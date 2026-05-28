// Efeito de Digitação
const textElement = document.getElementById("typing-text");
const textToType = "Backend.";
let index = 0;

function type() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

window.onload = () => {
    setTimeout(type, 500);
};

// Animação de Scroll (Revelar elementos)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));