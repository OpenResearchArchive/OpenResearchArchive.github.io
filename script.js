document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("newsletterOverlay");
  const closeBtn = document.getElementById("closeNewsletter");

  if (!overlay) return; // not homepage

  // show only if not closed before
  if (localStorage.getItem("newsletterClosed") === "true") return;

  setTimeout(() => {
    overlay.style.display = "flex";
  }, 4000);

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    localStorage.setItem("newsletterClosed", "true");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      localStorage.setItem("newsletterClosed", "true");
    }
  });
});
