#!/usr/bin/env bash
set -euo pipefail

# =========================
# Config (tweak as needed)
# =========================
SLUG="${SLUG:-output}"                          # default slug
DATE="${DATE:-$(date +%F)}"                     # override: export DATE=YYYY-MM-DD
SRC="${SRC:-example.md}"                        # source markdown
DEFAULTS="${DEFAULTS:-configs/args.yaml}"       # pandoc defaults file
POSTS_DIR="${POSTS_DIR:-../_posts}"             # target Jekyll posts dir
OUT="${OUT:-${POSTS_DIR}/${DATE}-${SLUG}.md}"   # output path

# =========================
# Setup
# =========================
mkdir -p "$(dirname "$OUT")"

# =========================
# Pandoc conversion
# =========================
pandoc "$SRC" \
  --defaults "$DEFAULTS" \
  -o "$OUT"

echo "✅ Wrote: $OUT"
