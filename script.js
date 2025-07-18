// Hide loader after animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000); // duration matches animation
});

// Form submission (basic simulation)
const form = document.getElementById("consultForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Thank you! We will get back to you shortly.";
  form.reset();
});
