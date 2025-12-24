function lockCarouselHeightFromFirstItem(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const carouselInner = carousel.querySelector(".carousel-inner");
  const firstItem = carouselInner?.querySelector(".carousel-item.active");
  const allItems = carouselInner ? carouselInner.querySelectorAll(".carousel-item") : [];

  if (!firstItem || !carouselInner) return;

  setTimeout(() => {
    const computedHeight = firstItem.scrollHeight;
    carouselInner.style.height = computedHeight + "px";
    allItems.forEach((item) => {
      item.style.height = computedHeight + "px";
    });
  }, 100);
}

// Usage for a specific carousel (e.g., "homecarousel")
window.addEventListener("load", () => lockCarouselHeightFromFirstItem("homecarousel"));
window.addEventListener("resize", () => lockCarouselHeightFromFirstItem("homecarousel"));
