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
// NEWSLETTER POPUP (HOMEPAGE ONLY)
document.addEventListener("DOMContentLoaded", () => {
  const newsletterOverlay = document.getElementById("newsletterOverlay");
  const closeNewsletter = document.getElementById("closeNewsletter");

  if (newsletterOverlay) {
    setTimeout(() => {
      newsletterOverlay.style.display = "flex";
    }, 4000);
  }

  if (closeNewsletter && newsletterOverlay) {
    closeNewsletter.addEventListener("click", () => {
      newsletterOverlay.style.display = "none";
    });

    // Optional: click outside popup to close
    newsletterOverlay.addEventListener("click", (e) => {
      if (e.target === newsletterOverlay) {
        newsletterOverlay.style.display = "none";
      }
    });
  }
});
