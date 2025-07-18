/* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #333;
  scroll-behavior: smooth;
}

/* Loader */
#loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOutLoader 1s ease 2.5s forwards;
}

.loader-logo {
  width: 130px;
  animation: logoReveal 2s ease-in-out;
  filter: drop-shadow(0 0 10px rgba(128, 0, 128, 0.3));
}

@keyframes logoReveal {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-30deg);
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}

@keyframes fadeOutLoader {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

/* Navbar */
nav {
  background-color: #4caf50;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  animation: slideDown 1s ease-in-out;
}

.nav-container {
  max-width: 1100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.nav-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-grow: 1;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #e0ffe0;
}

@keyframes slideDown {
  from {
    top: -80px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* Header */
header {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #4caf50, #9c27b0);
  color: white;
}

header h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

header p {
  font-size: 1.3rem;
}

/* Elegant Section Card */
.elegant-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem auto;
  max-width: 1000px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

/* Section Headers */
section h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #4caf50;
}

/* About Text */
.about p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
}

/* Founders */
.founders .founder {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
}

.founder img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #9c27b0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.founder h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
}

.founder p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Contact Form */
.contact form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact input,
.contact textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.contact button {
  padding: 0.8rem;
  background-color: #9c27b0;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact button:hover {
  background-color: #7b1fa2;
}

#formMsg {
  color: green;
  margin-top: 10px;
}

/* Footer */
footer {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  border-top: 4px solid #9c27b0;
}
