// scripts.js

// Show visible class when section enters viewport
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scroll (optional if scroll-behavior in CSS isn't enough)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Console greeting
console.log("Welcome to Jaffer Bunny's Portfolio Site 🚀");
