document.addEventListener('DOMContentLoaded', () => {
    
    const themeBtn = document.getElementById('themeToggle');
    
    const currentTheme = localStorage.getItem('theme');
    

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateButtonText(currentTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Averiguar qué tema está activo en este momento exacto
            let activeTheme = document.documentElement.getAttribute('data-theme');
            
            // Si el atributo no existe, significa que está usando la preferencia del sistema operativo
            if (!activeTheme) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                activeTheme = prefersDark ? 'dark' : 'light';
            }
            
            // Intercambiar el tema
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            
            // Aplicar al documento y guardar en memoria persistente
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
    }

    function updateButtonText(theme) {
        if (themeBtn) {
            themeBtn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        }
    }

    // --- MANEJO DE NAVBAR EN SCROLL ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // --- VALIDACIÓN Y ENVÍO DEL FORMULARIO ---
 // --- FORMULARIO CON FORMSPREE ---
const contactForm = document.getElementById('portfolioForm');
const formResponse = document.getElementById('formResponse');

if (contactForm && formResponse) {

    contactForm.addEventListener('submit', () => {

        formResponse.classList.remove(
            'hidden',
            'success',
            'error'
        );

        formResponse.textContent =
            'Enviando mensaje...';

        formResponse.classList.add('success');

    });

}
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const projectPreviews = document.querySelectorAll('.project-preview');

projectPreviews.forEach((preview) => {
  const image = preview.querySelector('.project-image');
  const prevBtn = preview.querySelector('.project-arrow.left');
  const nextBtn = preview.querySelector('.project-arrow.right');

  if (!image || !prevBtn || !nextBtn) return;

  const images = image.dataset.images
    ? image.dataset.images.split(',').map(src => src.trim())
    : [image.src];

  let currentIndex = 0;

  const updateImage = () => {
    image.src = images[currentIndex];
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
});

const menuToggle = document.getElementById('menuToggle');
const navControls = document.getElementById('navControls');

menuToggle?.addEventListener('click', () => {
  navControls?.classList.toggle('active');

  const icon = menuToggle.querySelector('i');

  if (navControls?.classList.contains('active')) {
    icon.className = 'bx bx-x';
  } else {
    icon.className = 'bx bx-menu';
  }
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navControls?.classList.remove('active');

    const icon = menuToggle?.querySelector('i');
    if (icon) icon.className = 'bx bx-menu';
  });
});