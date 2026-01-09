document.addEventListener("DOMContentLoaded", () => {

  // ===== HAMBURGER =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
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
