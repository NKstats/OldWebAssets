function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode');
    var icon = document.querySelector('#theme-toggle i');
    var text = document.querySelector('#theme-toggle span');
    if (body.classList.contains('dark-mode')) {
      icon.className = 'fa fa-sun';
      text.textContent = ' Light';
    } else {
      icon.className = 'fa fa-moon';
      text.textContent = ' Dark';
    }
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }

  function applyThemePreference() {
    var body = document.body;
    var navbar = document.querySelector('.navbar');
    var icon = document.querySelector('#theme-toggle i');
    var text = document.querySelector('#theme-toggle span');
   
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      navbar.classList.add('dark-mode');
      icon.className = 'fa fa-sun';
      text.textContent = ' Light';
    } else {
      body.classList.remove('dark-mode');
      navbar.classList.remove('dark-mode');
      icon.className = 'fa fa-moon';
      text.textContent = ' Dark';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var navbarLeft = document.querySelector('.navbar .navbar-nav:first-child');
    var toggleLink = document.createElement('li');
    toggleLink.className = 'nav-item';
    toggleLink.innerHTML = '<a href="#" onclick="toggleDarkMode()" class="nav-link" id="theme-toggle"><i class="fa fa-moon"></i><span> Dark</span></a>';
    navbarLeft.appendChild(toggleLink);
    applyThemePreference();

    var button = document.createElement('button');
    button.innerHTML = '&#8679; Back to Top';
    button.className = 'back-to-top';
    document.body.appendChild(button);
    button.onclick = function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  });