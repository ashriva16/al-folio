// Waits for DOM to load, then adds click event to search toggle button to open search modal.
document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.getElementById("search-toggle");
  if (searchToggle && typeof openSearchModal === "function") {
    searchToggle.addEventListener("click", openSearchModal);
  }
});

// Waits for DOM to load, then adds error handler to images to remove responsive srcset elements on error.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img[data-handle-error="remove-responsive-srcset"]').forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.removeAttribute("onerror"); // equivalent to this.onerror=null;
        document.querySelectorAll(".responsive-img-srcset").forEach((el) => el.remove());
      },
      { once: true }
    );
  });
});
