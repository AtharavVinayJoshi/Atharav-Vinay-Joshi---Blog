// Loader logic
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submission
document.getElementById("consultForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "Thank you for contacting us! We'll get back to you shortly.";
  this.reset();
});
