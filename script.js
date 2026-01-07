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
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupOverlay");
  const closeBtn = document.getElementById("closePopup");

  if (!popup || !closeBtn) return;

  // Show once per session
  if (!sessionStorage.getItem("popupShown")) {
    popup.style.display = "flex";
    sessionStorage.setItem("popupShown", "true");
  } else {
    popup.style.display = "none";
  }

  // Button click
  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  // Click outside box closes popup (fallback)
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
