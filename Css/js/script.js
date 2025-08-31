// Navbar toggle for mobile
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });
}

// Dynamic year in footer
document.querySelectorAll('#year,#year2,#year3,#year4,#year5')
  .forEach(el => el.textContent = new Date().getFullYear());

// Contact form simulation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formMsg').textContent = "Message sent successfully!";
    form.reset();
  });
}
