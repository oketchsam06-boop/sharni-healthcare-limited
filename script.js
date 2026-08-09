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

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const phone = contactForm.phone.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !phone || !subject || !message) {
      event.preventDefault();

      formMessage.textContent =
        'Please fill in all required fields before sending your message.';

      formMessage.style.color = '#d23f57';

      return;
    }

    // Don't prevent the submission here.
    // The form will be sent to FormSubmit.
  });
}
