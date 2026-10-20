// Ubuntu Bridge — Contact form validation and submission (Part 3)
// Mirrors enquiry.js's approach: client-side validation, then a simulated
// AJAX submission (no real backend yet).

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccess');
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    document.querySelectorAll('.error-message').forEach(function (el) {
      el.textContent = '';
    });

    const fullName = document.getElementById('fullName');
    if (fullName.value.trim().length < 2) {
      document.getElementById('cFullNameError').textContent = 'Please enter your full name.';
      isValid = false;
    }

    const email = document.getElementById('email');
    if (!EMAIL_PATTERN.test(email.value.trim())) {
      document.getElementById('cEmailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    const messageType = document.getElementById('messageType');
    if (messageType.value === '') {
      document.getElementById('messageTypeError').textContent = 'Please select a message type.';
      isValid = false;
    }

    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
      document.getElementById('cMessageError').textContent = 'Please enter at least 10 characters.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(function () {
      form.hidden = true;
      successBox.hidden = false;
    }, 800);
  });
});
