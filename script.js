const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "f0c2cec3-21b2-425f-a376-86d823bac641");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

/*const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = [...contactForm.querySelectorAll('[required]')];
    const firstInvalid = required.find((field) => !field.value.trim() || !field.checkValidity());
    if (firstInvalid) {
      formMessage.textContent = 'Please complete all required fields with valid information.';
      formMessage.className = 'form-message error';
      firstInvalid.focus();
      return;
    }
    formMessage.textContent = 'Thank you. Your inquiry is ready to send once a form service is connected.';
    formMessage.className = 'form-message success';
  });
}*/
