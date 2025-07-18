// Loader animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Form behavior
document.getElementById("consultForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText =
    "Thank you! We will contact you shortly.";
  this.reset();
});
