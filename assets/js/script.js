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
    const offCanvas = document.getElementById('offcanvasMenu');
    const content = offCanvas.querySelector('div');
    offCanvas.classList.toggle('hidden');
    offCanvas.classList.toggle('opacity-0');
    offCanvas.classList.toggle('opacity-100');
    offCanvas.classList.toggle('pointer-events-none');
    content.classList.toggle('-translate-x-full');
    content.classList.toggle('translate-x-0');
    if (offCanvas.classList.contains('opacity-100')) {
        document.body.style.overflow = 'hidden';  
    } 
    else {
        document.body.style.overflow = '';  
    }
}
function closeMenu(event) {
    const offCanvas = document.getElementById('offcanvasMenu');
    if (!event.target.closest('div.w-64')) {  
    toggleMenu();
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
