document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     EXPLORE DROPDOWN
  ========================= */

  const exploreBtn = document.getElementById("exploreBtn");
  const exploreMenu = document.getElementById("exploreMenu");

  if (exploreBtn && exploreMenu) {
    exploreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      exploreMenu.style.display =
        exploreMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
      exploreMenu.style.display = "none";
    });
  }

  /* =========================
     SEARCH FILTER
  ========================= */

  const searchInput = document.getElementById("searchInput");
  const paperCards = document.querySelectorAll(".paper-card");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();

      paperCards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(filter)
          ? "block"
          : "none";
      });
    });
  }

  /* =========================
     NEWSLETTER POPUP
     (HOMEPAGE ONLY)
  ========================= */

  const overlay = document.getElementById("newsletterOverlay");
  const closeBtn = document.getElementById("closeNewsletter");

  // If popup doesn't exist (not homepage), stop
  if (!overlay || !closeBtn) return;

  // Show only once per user
  if (localStorage.getItem("newsletterClosed") === "true") return;

  // Show popup after 4 seconds
  setTimeout(() => {
    overlay.style.display = "flex";
  }, 4000);

  // Close via X button
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    localStorage.setItem("newsletterClosed", "true");
  });

  // Close by clicking outside popup
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      localStorage.setItem("newsletterClosed", "true");
    }
  });

});
