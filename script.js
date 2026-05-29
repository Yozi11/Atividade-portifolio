// Animação suave e profissional de Scroll (Reveal on Scroll)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // O elemento revela quando 15% dele aparece na tela
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Opcional: Descomente a linha abaixo se quiser que a animação aconteça apenas 1 vez
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Captura todas as seções escondidas e aplica o observador
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));