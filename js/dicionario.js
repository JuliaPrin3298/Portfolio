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
        "welcome-desc1": "Dev Full Stack &",
        "welcome-desc2": "Designer de Jogos",
        "btn-resume": "Baixar Currículo",
        "btn-previus": "Projetos Anteriores",
        "resume-link": "appendix/curriculo-pt.pdf",
        "txt-aboutme1": "Meu nome é Julia Rocha Nogueira, tenho 18 anos e sempre fui interessada por tecnologia e criatividade. Esse interesse me levou a concluir o Ensino Médio Técnico em Desenvolvimento de Sistemas pela ETEC.",
        "txt-aboutme2": "Atualmente, curso Game Design na FMU e Desenvolvimento de Software Multiplataforma na FATEC. Tenho grande interesse em desenvolvimento de jogos, front-end e criação de personagens. Gosto de trabalhar em equipe e de aprender novas ferramentas e tecnologias. No meu tempo livre, faço cursos extracurriculares, vou ao cinema, mestro sessões de RPG de mesa e passo tempo com meu cachorro.",
        "txt-aboutme3": "Estou em busca da minha primeira oportunidade profissional e me considero uma pessoa dedicada, curiosa e criativa, sempre em busca de aprendizado contínuo e crescimento profissional.",
        "title-card1": "Chronicles of Crime",
        "txt-card1": "Um jogo ambientado no início do século XX, no qual Alex Holness sonha em se tornar uma grande detetive, apesar das dificuldades de encontrar trabalho sendo uma mulher naquela época. Tudo muda quando ela recebe uma carta anônima alertando sobre um assassinato prestes a acontecer em um navio de cruzeiro. Diante disso, Alex vê a oportunidade perfeita para agir e provar suas habilidades.",
        "download": "Baixar",
        "title-card2":"MatMundi",
        "txt-card2": "Um site gamificado desenvolvido para alunos do 1º ao 5º ano, com o objetivo de tornar o aprendizado de matemática divertido, interativo e envolvente. A plataforma oferece atividades complementares e exercícios de reforço, estimulando o desenvolvimento do raciocínio lógico.",
        "view-git": "Ver no GitHub",
        "title-card3": "Pipeline ETL para Notas de Estudantes",
        "txt-card3": "Um projeto em Python focado na aplicação prática dos conceitos de ETL (Extração, Transformação e Carga). O pipeline realiza a extração de dados de notas fiscais a partir de arquivos Excel, com foco na arquitetura de fluxo de dados e no desenvolvimento de soluções de processamento robustas.",
        "title-card4": "Bingo",
        "txt-card4": "Um gerador interativo de números de Bingo que sorteia números aleatoriamente e mantém o controle de todos os números já selecionados. O sistema marca visualmente os números sorteados, evitando repetições e tornando o jogo fácil de acompanhar em tempo real.",
        "view": "Abrir",
        "title-card5": "Tamagotchi",
        "txt-card5": "Um pet virtual inspirado no Tamagotchi, desenvolvido em Java, criado para reviver a experiência nostálgica de cuidar e criar um animal digital. Os jogadores interagem com o pet por meio de ações diárias, recriando o charme e a simplicidade dos pets virtuais clássicos.",
        "title-card6": "Quiz Educativo",
        "txt-card6": "Um quiz divertido e interativo desenvolvido para ajudar os alunos a aprender conjunções por meio de jogos. Professores podem utilizar a plataforma para criar atividades dinâmicas, incentivando os estudantes a construir frases de forma colaborativa e aprender na prática.",
        "view-more": "Ver mais Projetos no Github",
        "design": "Design",
        "development": "Desenvolvimento",
        "dev-1": "Santander 2025 - Ciencia de Dados com Python",
        "dev-tool1": "63h | Emitido por Santander & DIO",
        "dev-2": " IoT na Mobilidade: Explorando Novos Mundos",
        "dev-tool2": "20h | Emitido por Fit Tech Academy",
        "dev-3": "Fundamentos de ETL (Extract, Transform, Load) com Python",
        "dev-tool3": "3h | Emitido por Santander & DIO",
        "dev-4": "Explorando IA Generativa em um Pipeline de ETL com Python",
        "dev-tool4": "2h | Emitido por Santander & DIO",
        "dev-5": "Redução dos Custos em Farmácias com AWS",
        "dev-tool5": "1h | Emitido por Santander & DIO",
        "dev-6": " Versionamento de Código com Git e GitHub",
        "dev-tool6": "2h | Emitido por Santander & DIO",
        "dev-7": "Introdução a Banco de Dados Relacionais (SQL)",
        "dev-tool7": "3h | Emitido por Santander & DIO",
        
        
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
        "resume-link": "appendix/resume-en.pdf", // Caminho do seu PDF em EN
        "txt-aboutme1": "My name is Julia Rocha Nogueira, and I am 18 years old. I have always been interested in technology and creativity, which led me to complete a Technical High School program in Systems Development at ETEC.",
        "txt-aboutme2": "Currently, I am studying Game Design at FMU and Multiplatform Software Development at FATEC. I have a strong interest in game development, front-end development, and character creation. I enjoy working in teams and learning new tools and technologies. In my free time, I take extracurricular courses, watch movies at the cinema, run tabletop RPG sessions, and spend time with my dog.",
        "txt-aboutme3": "I am looking for my first job opportunity and consider myself a dedicated, curious, and creative person, always seeking learning opportunities and professional growth.",
        "title-card1": "Chronicles of Crime",
        "txt-card1": "A game where, in the early 20th century, Alex Holness dreams of becoming a great detective though finding work as a woman in that era is no easy task. However, after receiving an anonymous letter warning of a murder about to take place on a cruise ship, she sees the perfect opportunity to act and prove her skills.",
        "download": "Download",
        "title-card2":"MatMundi",
        "txt-card2": "A gamified website developed for students from 1st to 5th grade, designed to make learning mathematics fun, interactive, and engaging. The platform offers complementary activities and reinforcement exercises, stimulating the development of logical reasoning skills.",
        "view-git": "View on GitHub",
        "title-card3": "ETL Pipeline for Student Grades",
        "txt-card3": "A Python project focused on the practical application of ETL (Extraction, Transformation, and Loading) concepts. The pipeline extracts invoice data from Excel files, focusing on data flow architecture and the development of robust processing solutions.",
        "title-card4": "Bingo",
        "txt-card4": "An interactive Bingo number generator that randomly draws numbers and keeps track of all previously selected ones. The system visually marks drawn numbers, preventing repetitions and making the game easy to follow in real time.",
        "view": "View",
        "title-card5": "Tamagotchi",
        "txt-card5": "A Tamagotchi-inspired virtual pet built in Java, designed to revive the nostalgic experience of raising and caring for a digital pet. Players interact with the pet through daily actions, recreating the charm and simplicity of classic virtual pets.",
        "title-card6": "Education Quiz",
        "txt-card6": "A fun and interactive quiz designed to help students learn conjunctions through gameplay. Teachers can use the platform to create dynamic activities, encouraging students to build sentences collaboratively and learn through practice.",
        "view-more": "View more Projects on Github",
        "design": "Design",
        "development": "Development",
        "dev-1": "Santander 2025 - Data Science with Python",
        "dev-tool1": "63h | Issued by Santander & DIO",
        "dev-2": " IoT in Mobility: Exploring New Worlds",
        "dev-tool2": "20h | Issued by Fit Tech Academy",
        "dev-3": "Python ETL Fundamentals",
        "dev-tool3": "3h | Issued by Santander & DIO",
        "dev-4": " Generative AI in ETL Pipelines",
        "dev-tool4": "2h | Issued by Santander & DIO",
        "dev-5": "AWS Cloud: Cost Reduction for Pharmacies",
        "dev-tool5": "1h | Issued by Santander & DIO",
        "dev-6": " Version Control with Git & GitHub",
        "dev-tool6": "2h | Issued by Santander & DIO",
        "dev-7": "Introduction to Relational Databases (SQL)",
        "dev-tool7": "3h | Issued by Santander & DIO",


    }
};


const langBtn = document.getElementById('lang-switch');
// Verifica se já existe uma preferência salva, senão começa em PT
let currentLang = localStorage.getItem('preferredLang') || 'pt';

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    const langBtn = document.getElementById('lang-switch');

    // 1. Título da aba
    document.title = translations[currentLang]["page-title"];

    // 2. Textos e tooltips
    elements.forEach(el => {
        const key = el.getAttribute('data-key');

        if (translations[currentLang][key]) {

            // TOOLTIP (Bootstrap 4)
            if (el.hasAttribute('data-toggle') && el.getAttribute('data-toggle') === 'tooltip') {
                el.setAttribute('title', translations[currentLang][key]);
            }
            // TEXTO NORMAL
            else {
                el.innerText = translations[currentLang][key];
            }

            // Link do currículo
            if (key === "btn-resume") {
                el.href = translations[currentLang]["resume-link"];
            }
        }
    });

    // 3. Lang do HTML
    document.documentElement.lang = currentLang;

    // 4. Botão de idioma
    langBtn.innerHTML = currentLang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';

    // 5. REINICIALIZA TOOLTIPS (Bootstrap 4)
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $('[data-toggle="tooltip"]').tooltip();
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