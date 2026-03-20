/* Hero image lazy loading & error fallback */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* Activate gradient fallback if hero image fails to load */
    document.querySelectorAll('.hero img').forEach(function (img) {
      img.addEventListener('error', function () {
        var hero = img.closest('.hero');
        if (hero) {
          hero.classList.add('hero--gradient');
          img.style.display = 'none';
        }
      });
    });
  });
})();
