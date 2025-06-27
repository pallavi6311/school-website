// Section Toggle
function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

// Set home section visible by default
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});

// Slideshow
let slideIndex = 0;
const images = [
  "https://via.placeholder.com/600x300?text=School+Photo+1",
  "https://via.placeholder.com/600x300?text=Annual+Day",
  "https://via.placeholder.com/600x300?text=Library+Time"
];

function showSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  const slide = document.getElementById("slide");
  if (slide) {
    slide.src = images[slideIndex];
  }
}
setInterval(showSlide, 3000);

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const selectedClass = document.getElementById("classSelect").value;

  if (!name || !age || !selectedClass) {
    alert("Please fill out all fields.");
    return false;
  }

  document.getElementById("resultMsg").innerText = `Thank you, ${name}. We'll contact you soon!`;
  return false;
}
