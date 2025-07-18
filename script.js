// Loader logic
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

// Smooth scroll (optional for nav links)
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form message
document.getElementById("consultForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "Thank you for reaching out. We'll get back to you soon!";
  this.reset();
});
