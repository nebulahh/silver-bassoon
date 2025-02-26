document.getElementById('menu-button').addEventListener('click', function() {
    const navItems = document.getElementById('nav-items');
    if (navItems.classList.contains('hidden')) {
      navItems.classList.remove('hidden');
    } else {
      navItems.classList.add('hidden');
    }
  });