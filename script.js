/* ===============================
   EXPLORE DROPDOWN
================================ */
const exploreBtn = document.getElementById("exploreBtn");
const exploreMenu = document.getElementById("exploreMenu");

if (exploreBtn && exploreMenu) {
  exploreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    exploreMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      exploreMenu.classList.remove("show");
    }
  });
}


/* ===============================
   SEARCH FUNCTIONALITY
================================ */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".content-card");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(query)
        ? "block"
        : "none";
    });
  });
}


/* ===============================
   HAMBURGER MENU
================================ */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
