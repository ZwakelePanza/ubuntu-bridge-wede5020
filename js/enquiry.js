// Ubuntu Bridge — Enquiry form validation and submission (Part 3)
// No backend exists yet, so "submission" is simulated with a short delay
// (setTimeout) to demonstrate the AJAX-style UX the brief asks for, without
// actually sending data anywhere real.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiryForm');
  const successBox = document.getElementById('enquirySuccess');

  // Simple regex checks used across both forms' phone/email validation
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_PATTERN = /^[0-9+()\s-]{7,15}$/; // loose SA-friendly phone check

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop normal page reload so we can validate first

    let isValid = true;

    // Clear previous error messages before re-validating
    document.querySelectorAll('.error-message').forEach(function (el) {
      el.textContent = '';
    });

    const fullName = document.getElementById('fullName');
    if (fullName.value.trim().length < 2) {
      document.getElementById('fullNameError').textContent = 'Please enter your full name.';
      isValid = false;
    }

    const email = document.getElementById('email');
    if (!EMAIL_PATTERN.test(email.value.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Phone is optional, so only validate the format if something was typed
    const phone = document.getElementById('phone');
    if (phone.value.trim() !== '' && !PHONE_PATTERN.test(phone.value.trim())) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
      isValid = false;
    }

    const enquiryType = document.getElementById('enquiryType');
    if (enquiryType.value === '') {
      document.getElementById('enquiryTypeError').textContent = 'Please select an option.';
      isValid = false;
    }

    if (!isValid) {
      return; // stop here — don't "submit" while there are errors on screen
    }

    // Simulate an AJAX request: disable the button, wait briefly, then show
    // the success message. Replace this block with a real fetch() call once
    // a backend/email service is connected.
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    setTimeout(function () {
      form.hidden = true;
      successBox.hidden = false;
    }, 800);
  });
});
