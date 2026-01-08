const exploreBtn = document.getElementById("exploreBtn");
const menu = document.getElementById("exploreMenu");

exploreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
  menu.style.display = "none";
});
// SEARCH FUNCTIONALITY
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".content-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "flex" : "none";
    });
  });
}

// EXPLORE DROPDOWN TOGGLE
const exploreBtn = document.getElementById("exploreBtn");
const exploreMenu = document.getElementById("exploreMenu");

if (exploreBtn && exploreMenu) {
  exploreBtn.addEventListener("click", () => {
    exploreMenu.style.display =
      exploreMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      exploreMenu.style.display = "none";
    }
  });
}
/* ===============================
   EXPLORE DROPDOWN
================================ */
const exploreBtn = document.getElementById("exploreBtn");
const exploreMenu = document.getElementById("exploreMenu");

exploreBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent page click closing instantly
  exploreMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function () {
  exploreMenu.classList.remove("show");
});


/* ===============================
   SEARCH FUNCTIONALITY
================================ */
const searchInput = document.getElementById("searchInput");
const contentCards = document.querySelectorAll(".content-card");

searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase();

  contentCards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
