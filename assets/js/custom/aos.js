window.requestIdleCallback?.(() => {
  AOS.init({ once: true });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 600,
    easing: "ease-out",
    once: false, // don’t re-animate when scrolling back up
    offset: 60, // tweak if your fixed navbar overlaps
  });
});
