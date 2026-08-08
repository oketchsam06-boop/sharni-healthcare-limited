const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !phone || !subject || !message) {
      formMessage.textContent = 'Please fill in all required fields before sending your message.';
      formMessage.style.color = '#d23f57';
      return;
    }

    formMessage.textContent = 'Thank you! Your message has been sent. We will respond as soon as possible.';
    formMessage.style.color = '#0F4C81';
    contactForm.reset();
  });
}
