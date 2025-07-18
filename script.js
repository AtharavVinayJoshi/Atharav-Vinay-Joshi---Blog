// script.js

// Hide preloader when page is loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// Smooth scroll behavior for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Consultation form submission
const form = document.getElementById("consultForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formMsg.textContent = "Thank you for reaching out! We’ll contact you soon.";
  form.reset();
});
