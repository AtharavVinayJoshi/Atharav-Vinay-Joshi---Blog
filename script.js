// Loader disappears when page loads
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

// Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultForm");
  const formMsg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMsg.textContent = "Thank you for your query. We'll get back to you shortly.";
      form.reset();
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll("nav a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
