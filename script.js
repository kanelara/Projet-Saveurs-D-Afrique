// Filtrage menu
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active-filter'));
      this.classList.add('active-filter');
    });
  });
});

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Voir le menu complet
document.addEventListener('DOMContentLoaded', function() {
  const viewMenuButton = document.getElementById('view-full-menu');
  if (viewMenuButton) {
    viewMenuButton.addEventListener('click', function() {
      // ✅ CORRIGÉ : Redirige vers menu.html dans l'onglet actuel
      window.location.href = 'menu.html';
    });
  }
});