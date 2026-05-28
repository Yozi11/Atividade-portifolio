// Adiciona o ano atual dinamicamente no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Função do Botão de Alternar o Tema (Dark Mode / Light Mode)
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});