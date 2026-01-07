const exploreBtn = document.getElementById("exploreBtn");
const menu = document.getElementById("exploreMenu");

exploreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
  menu.style.display = "none";
});
