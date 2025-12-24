document.addEventListener("DOMContentLoaded", () => {
  console.log("🟢 TOC Observer initialized");

  // Wait a frame to ensure sidebar is populated
  setTimeout(() => {
    const tocLinks = Array.from(document.querySelectorAll("#toc-sidebar a[href^='#']"));
    const headingIds = tocLinks.map((link) => link.getAttribute("href").slice(1));
    const headings = headingIds.map((id) => document.getElementById(id)).filter((el) => el !== null);

    console.log("🔍 TOC links found:", tocLinks.length);
    console.log("🔍 Headings found:", headings.length);

    if (!headings.length || !tocLinks.length) {
      console.warn("⚠️ TOC headings or links missing. Check sidebar population.");
      return;
    }

    const idToLink = {};
    tocLinks.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      idToLink[id] = link;
    });

    let currentActiveId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            if (currentActiveId !== id) {
              currentActiveId = id;
              tocLinks.forEach((link) => link.classList.remove("active"));
              if (idToLink[id]) idToLink[id].classList.add("active");
              console.log("🔹 Highlighting:", id);
            }
          }
        });
      },
      {
        rootMargin: "-70px 0px -80% 0px", // adjust for navbar height
        threshold: [0],
      }
    );

    headings.forEach((h) => observer.observe(h));
  }, 50); // Small delay to wait for TOC render
});
