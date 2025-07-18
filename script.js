window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = 'none', 500);
});

// Form handling
document.getElementById('consultForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = "Thank you! We'll get in touch soon.";
  this.reset();
});
