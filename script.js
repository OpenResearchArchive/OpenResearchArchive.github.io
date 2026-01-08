// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// ================= EXPLORE DROPDOWN =================
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

// ================= SEARCH =================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".content-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}
