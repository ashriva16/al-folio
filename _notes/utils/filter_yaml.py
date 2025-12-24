#!/usr/bin/env python3
import os, sys, traceback, yaml
import panflute as pf

# -------- Configuration --------
# Base keys we accept directly from the document's own YAML
BASE_KEYS = [
    "layout",
    "title", "subtitle", "authors", "date",
    "description", "abstract",
    "keywords", "tags", "categories",
    "bibliography",
    "permalink", "excerpt"
]

# Preferred ordering when writing front matter
ORDER_FIRST = [
    "layout",
    "title", "subtitle", "authors", "date",
    "description", "abstract",
    "keywords", "tags", "categories",
    "bibliography",
    "permalink", "excerpt"
]

# Which keys from the *external* metadata are allowed to flow in.
# Keep this broad for al-folio/distill, but you can tune it as you like.
EXTERNAL_ALLOWED = set([
    # Common al-folio toggles and features
    "last_modified_at", "thumbnail", "featured",
    "toc", "sidebar",
    "disqus_comments", "giscus_comments",
    "related_posts", "related_publications",
    "tikzjax",
    "chart", "plotly", "chartjs", "echarts", "vega_lite",
    "images", "compare", "slider",
    "mermaid",
    "enabled", "zoomable", "pretty_table", "map", "pseudocode", "tabs",
    "math", "code_diff", "citation", "typograms",
    "redirect", "external_source",
    # also allow any other base keys in case you keep them externally:
    *BASE_KEYS
])

def _as_list(x):
    if x is None:
        return []
    if isinstance(x, list):
        return x
    return [x]

def _norm_keywords(x):
    if x is None:
        return []
    if isinstance(x, str):
        parts = [p.strip() for p in x.split(",")]
        return [p for p in parts if p]
    if isinstance(x, list):
        out = []
        for item in x:
            if isinstance(item, str):
                out.extend([p.strip() for p in item.split(",") if p.strip()])
            else:
                out.append(str(item))
        seen = set()
        uniq = []
        for k in out:
            if k not in seen:
                seen.add(k)
                uniq.append(k)
        return uniq
    return [str(x)]

def _norm_authors(a):
    if a is None:
        return None
    if isinstance(a, str):
        return [{"name": a}]
    if isinstance(a, list):
        norm = []
        for item in a:
            if isinstance(item, str):
                norm.append({"name": item})
            elif isinstance(item, dict):
                if "name" in item:
                    norm.append(item)
                else:
                    name = item.get("author") or item.get("full_name") or item.get("family") or item.get("given")
                    if name:
                        new = {"name": name}
                        for k in ("affiliation", "url", "email", "orcid"):
                            if k in item:
                                new[k] = item[k]
                        norm.append(new)
                    else:
                        norm.append({"name": str(item)})
            else:
                norm.append({"name": str(item)})
        return norm
    if isinstance(a, dict):
        if "name" in a:
            return [a]
        return [{"name": a.get("author") or a.get("full_name") or str(a)}]
    return [{"name": str(a)}]

def _merge_preserve(base_dict, ext_dict):
    """Merge dictionaries by preserving existing base keys (base wins).
    Append any keys from ext_dict that aren't already present and are allowed."""
    merged = dict(base_dict)
    for k, v in ext_dict.items():
        if k in merged:
            continue
        merged[k] = v
    return merged

def _load_external_yaml(path):
    if not path:
        return {}
    try:
        with open(path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f) or {}
            if not isinstance(data, dict):
                return {}
            # only keep allowed keys
            return {k: data[k] for k in data.keys() if k in EXTERNAL_ALLOWED}
    except FileNotFoundError:
        sys.stderr.write(f"[filter_yaml] External metadata not found: {path}\n")
        return {}
    except Exception as e:
        sys.stderr.write(f"[filter_yaml] Failed to read external metadata {path}: {e}\n")
        return {}

def prepare(doc):
    meta = doc.get_metadata() or {}
    # 1) Transform the doc metadata
    working = dict(meta)

    # Convert author -> authors (and drop 'author')
    if "authors" not in working and "author" in working:
        working["authors"] = _norm_authors(working.get("author"))
    if "author" in working:
        del working["author"]

    # subject -> categories
    if "subject" in working and not working.get("categories"):
        subj = working.get("subject")
        cats = _as_list(subj)
        categories = []
        for c in cats:
            if isinstance(c, str):
                parts = [p.strip() for p in c.split(",") if p.strip()]
                categories.extend(parts)
            else:
                categories.append(str(c))
        working["categories"] = categories

    # keywords -> tags
    if "keywords" in working:
        kws = _norm_keywords(working.get("keywords"))
        working["keywords"] = kws
        if working.get("tags"):
            existing = _norm_keywords(working.get("tags"))
            # merge unique
            for k in kws:
                if k not in existing:
                    existing.append(k)
            working["tags"] = existing
        else:
            working["tags"] = list(kws)

    # 2) Keep only base acceptable keys from the document
    base_only = {k: working[k] for k in BASE_KEYS if k in working}

    # 3) Load external metadata
    # Priority: in-doc 'external_metadata' key, else env 'EXTERNAL_META'
    external_path = meta.get("external_metadata") if isinstance(meta, dict) else None
    if not external_path:
        external_path = os.getenv("EXTERNAL_META")
    external = _load_external_yaml(external_path)

    # 4) Merge: base doc keys first, then append external-only keys
    merged = _merge_preserve(base_only, external)

    # 5) Write front matter with ordered base keys first, then any remaining (external) keys in their original order
    ordered = {}
    for k in ORDER_FIRST:
        if k in merged:
            ordered[k] = merged[k]
    # append the rest in the original merged insertion order
    for k in merged.keys():
        if k not in ordered:
            ordered[k] = merged[k]

    yaml_text = yaml.safe_dump(ordered, sort_keys=False, allow_unicode=True).rstrip()
    front_matter = f"---\n{yaml_text}\n---\n"
    doc.content.insert(0, pf.RawBlock(front_matter, format="html"))

def main():
    try:
        pf.run_filter(lambda e, d: None, prepare=prepare)
    except Exception:
        traceback.print_exc(file=sys.stderr); sys.exit(1)

if __name__ == "__main__":
    main()
