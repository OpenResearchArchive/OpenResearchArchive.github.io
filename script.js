const exploreBtn = document.getElementById("exploreBtn");
const exploreMenu = document.getElementById("exploreMenu");

exploreBtn.addEventListener("click", e => {
  e.stopPropagation();
  exploreMenu.style.display =
    exploreMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
  exploreMenu.style.display = "none";
});

/* SEARCH */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".paper-card");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
});
