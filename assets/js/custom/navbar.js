document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar && navbar.classList.contains("navbar-expand-sm")) {
    navbar.classList.remove("navbar-expand-sm");
    navbar.classList.add("navbar-expand-md");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const shrinkOn = 10;

  window.addEventListener("scroll", () => {
    if (window.scrollY > shrinkOn) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
