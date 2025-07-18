// Page loader effect
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Contact form submission
document.getElementById("consultForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Thank you for your message! We'll get back to you soon.";
  this.reset();
});
