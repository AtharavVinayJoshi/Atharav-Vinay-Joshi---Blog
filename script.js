// Dark mode toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleDark.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll to top button logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  document.documentElement.scrollTop = 0;
};

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Atharav!");
  this.reset();
});
