// Ubuntu Bridge — FAQ accordion (Part 3)
// Each question toggles its own answer open/closed independently.
// aria-expanded is kept in sync so screen readers announce the state change.

document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(function (button) {
    button.addEventListener('click', function () {
      const panel = button.nextElementSibling;
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen; // hidden attribute controls visibility directly
    });
  });
});