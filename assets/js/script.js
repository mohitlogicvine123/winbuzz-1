// tailwind
tailwind.config = {
    theme: {
        fontFamily: {
            'inter': ['"Inter", sans-serif'],
            'montserrat': ['"Montserrat", sans-serif '],
        },
        extend: {
            colors: {
                theme1: '#b7862f;',
                theme2: '#b6842d;',
            },
            backgroundImage: {
                'gradient-theme': 'linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)',
            }
        },
    },
};


// offcanvas navbar
function toggleMenu() {
    const menu = document.getElementById("offcanvasMenu");
    const panel = menu.querySelector("div");

    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      panel.classList.remove("show-panel");
      setTimeout(() => menu.classList.add("hidden"), 500);
    } else {
      menu.classList.remove("hidden");
      setTimeout(() => {
        menu.classList.add("show-menu");
        panel.classList.add("show-panel");
      }, 10);
    }
}

function closeMenu(e) {
const menu = document.getElementById("offcanvasMenu");
const panel = menu.querySelector("div");

if (e.target === menu) {
    menu.classList.remove("show-menu");
    panel.classList.remove("show-panel");
    setTimeout(() => menu.classList.add("hidden"), 500);
}
}


// faq js
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('[data-accordion-icon]');
    header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherHeader = otherItem.querySelector('.accordion-header');
                const otherContent = otherItem.querySelector('.accordion-content');
                const otherIcon = otherItem.querySelector('[data-accordion-icon]');
                otherContent.classList.add('hidden');
                otherIcon.classList.remove('rotate-180');
                otherHeader.setAttribute('aria-expanded', 'false');
                otherHeader.classList.remove('bg-gray-200', 'text-black'); // Reset color
            }
        });
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        header.setAttribute('aria-expanded', !isExpanded);
        header.classList.toggle('bg-gray-200', !isExpanded); // Change background when active
        header.classList.toggle('text-black', !isExpanded); // Change text color when active
    });
});


// search bar 
window.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('searchOverlay');

    // make functions global
    window.openSearch = function () {
      overlay.classList.remove('opacity-0', 'scale-90', 'pointer-events-none');
      overlay.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
      document.body.classList.add('overflow-hidden');
    };

    window.closeSearch = function () {
      overlay.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      overlay.classList.add('opacity-0', 'scale-90', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    };

    // close overlay on background click
    overlay.addEventListener("click", () => {
      closeSearch();
    });
  });
  