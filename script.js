document.addEventListener("DOMContentLoaded", () => {

  // ===== HAMBURGER =====
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      console.log("Hamburger clicked"); // DEBUG
    });
  }

  // ===== EXPLORE DROPDOWN =====
  const exploreBtn = document.getElementById("exploreBtn");
  const exploreMenu = document.getElementById("exploreMenu");

  if (exploreBtn && exploreMenu) {
    exploreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      exploreMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      exploreMenu.classList.remove("show");
    });
  }

  // ===== SEARCH =====
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const query = searchInput.value.toLowerCase();
      document.querySelectorAll(".content-card").forEach(card => {
        card.style.display =
          card.innerText.toLowerCase().includes(query)
            ? "block"
            : "none";
      });
    });
  }
});
