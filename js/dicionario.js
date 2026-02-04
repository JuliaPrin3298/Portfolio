// 1. O "Dicionário" de conteúdos
const translations = {
    pt: {
        "page-title": "Portfólio - Julia R. Nogueira",
        "nav-home": "Início",
        "nav-aboutme": "Sobre Mim",
        "nav-portfolio": "Portfólio",
        "nav-skills": "Habilidades",
        "nav-certificates": "Certificados",
        "nav-contact": "Contato",
        "welcome-title": "Olá, eu sou Julia Rocha",
        "welcome-desc1": "Desenvolvedor Full Stack &",
        "welcome-desc2": "Designer de Jogos",
        "btn-resume": "Baixar Currículo",
        "btn-previus": "Projetos Anteriores",
        "resume-link": "appendix/curriculo-pt.pdf"
    },
    en: {
        "page-title": "Portfolio - Julia R. Nogueira",
        "nav-home": "Home",
        "nav-aboutme": "About Me",
        "nav-portfolio": "Portfolio",
        "nav-skills": "Skills",
        "nav-certificates": "Certificates",
        "nav-contact": "Contact",
        "welcome-title": "Hello, I'm Julia Rocha",
        "welcome-desc1": "Dev Full Stack &",
        "welcome-desc2": "Game Designer",
        "btn-resume": "Download Résumé",
        "btn-previus": "Previus Projects",
        "resume-link": "appendix/resume-en.pdf" // Caminho do seu PDF em EN
    }
};


const langBtn = document.getElementById('lang-switch');
// Verifica se já existe uma preferência salva, senão começa em PT
let currentLang = localStorage.getItem('preferredLang') || 'pt';

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    const langBtn = document.getElementById('lang-switch');

    // 1. Atualiza o Título da Aba
    document.title = translations[currentLang]["page-title"];

    // 2. Atualiza todos os elementos com data-key
    elements.forEach(el => {
        const key = el.getAttribute('data-key');

        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];

            // Ajuste específico para o link do currículo
            if (key === "btn-resume") {
                el.href = translations[currentLang]["resume-link"];
            }
        }
    });

    // 3. Atualiza o idioma da página
    document.documentElement.lang = currentLang;

    // 4. Atualiza o texto do botão de troca 
    if (currentLang === 'pt') {
        langBtn.innerHTML = '🇺🇸 EN'; // Mostra opção de mudar para Inglês
    } else {
        langBtn.innerHTML = '🇧🇷 PT'; // Mostra opção de mudar para Português
    }
}

// 4. Evento de Clique no Botão
langBtn.addEventListener('click', () => {
    // Alterna entre 'pt' e 'en'
    currentLang = currentLang === 'pt' ? 'en' : 'pt';

    // Salva a escolha no navegador do usuário
    localStorage.setItem('preferredLang', currentLang);

    // Executa a tradução
    updateContent();
});

// 5. Inicialização (roda assim que a página abre)
window.addEventListener('DOMContentLoaded', updateContent);