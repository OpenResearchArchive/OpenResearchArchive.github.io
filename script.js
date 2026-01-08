/* ===============================
   EXPLORE DROPDOWN
================================ */
const exploreBtn = document.getElementById("exploreBtn");
const exploreMenu = document.getElementById("exploreMenu");

if (exploreBtn && exploreMenu) {
  exploreBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    exploreMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      exploreMenu.classList.remove("show");
    }
  });
}


/* ===============================
   SEARCH FUNCTIONALITY
================================ */
const searchInput = document.getElementById("searchInput");
const contentCards = document.querySelectorAll(".content-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = searchInput.value.toLowerCase();

    contentCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}
