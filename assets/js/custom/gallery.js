// This script handles UI interactions for filtering cards, toggling search modal, and image error handling.

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".project-item");
  const dropdown = document.getElementById("categoryFilterSelect");

  function filterCards(filter) {
    cards.forEach((card) => {
      const matches = filter === "*" || card.matches(filter);

      if (!matches && !card.classList.contains("exit")) {
        // Animate out
        card.classList.add("exit");
        setTimeout(() => {
          card.style.display = "none";
        }, 400);
      } else if (matches) {
        // Animate in
        card.style.display = "";
        requestAnimationFrame(() => {
          card.classList.remove("exit");
        });
      }
    });
  }

  // Adds click event listeners to filter buttons. When clicked, sets the active button and filters cards accordingly.
  // Handle button clicks
  // buttons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     buttons.forEach((btn) => btn.classList.remove("active"));
  //     button.classList.add("active");

  //     const filter = button.getAttribute("data-filter");
  //     if (dropdown) dropdown.value = filter; // sync dropdown

  //     filterCards(filter);
  //   });
  // });

  const initActive = document.querySelector("[data-filter].active");
  if (initActive) {
    initActive.classList.add("btn-primary");
    initActive.classList.remove("btn-secondary");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-theme");
      });
      button.classList.add("active", "btn-primary");
      button.classList.remove("btn-theme");

      const filter = button.getAttribute("data-filter");
      if (dropdown) dropdown.value = filter; // sync dropdown
      filterCards(filter);
    });
  });

  // Adds change event listener to dropdown. When changed, syncs active button and filters cards.
  // Handle dropdown change
  if (dropdown) {
    dropdown.addEventListener("change", function () {
      const filter = this.value;

      // Sync button active state (for larger screens)
      buttons.forEach((btn) => {
        if (btn.getAttribute("data-filter") === filter) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      filterCards(filter);
    });
  }
});
