document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.theme-switch');
    const moonIcon = themeSwitch.querySelector('.fa-moon');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            moonIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Theme switch handler
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            moonIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            moonIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    const langSwitch = document.querySelector('.lang-switch');
    const translations = {
        en: {
            title: "Core Programmer",
            location: "Gerli (Buenos Aires)",
            phone: "(+54) 911 5645 9566",
            email: '<a href="mailto:contacto@justneki.com">contacto@justneki.com</a>',
            experience: "Experience",
            formation: "Formation",
            projects: "Projects",
            technicalSkills: "Technical Skills",
            skills: "Skills",
            languages: "Languages",
            
            // Experience section
            coreDeveloper: "Core & Logic Developer",
            leadProgrammer: "Lead Programmer",
            paliverse: "Paliverse Apps",
            farTeam: "F.a.R. Team",
            dateAprilFeb: "April 2024 - February 2025",
            dateOctPresent: "October 2022 - Present",
            dateSeptGameJam: "September 15th - 25th, 2023 (Game Jam)",
            dateSept: "September 15th - 25th, 2023",
            leadDescriptionFarTeam: "Leading a team of 3 in the ongoing development of 'Codename Farmoxel', a Unity-powered 3D resource management game. Overseeing core system architecture, gameplay mechanics, and project coordination.", // English version
            roomMakersJamDesc: "Led a team of 3 as Lead Programmer during a 10-day game jam, rapidly prototyping 'Room Makers'. Achieved 67th place out of 403 entries, demonstrating quick development capabilities and laying the foundation for the project's subsequent full release.", // English version
            
            // Formation section
            computerScience: "Degree in Computer Science",
            englishCert: "B2+ English Certification",
            unq: "National University of Quilmes",
            englishSchool: "English School, Lanús",
            dateUnq: "2022 - Present",
            dateEnglish: "2007-2021",

            // Projects section
            dsxTitle: "DSX",
            dsxSubtitle: "Software that connects DualSense, DualSense Edge, and DualShock 4 controllers to your PC.",
            dsxDesc: "As a Developer at Paliverse Apps, my responsibilities included integrating Steam platform features (achievements and workshop), developing user interface components, and building robust backend systems. Successfully managed and enhanced legacy codebase while delivering new functionality to improve user experience.",
            
            ktaTitle: "KTA",
            ktaSubtitle: "Procedurally Generated 3D Arcade Game",
            ktaDesc: "Independently developed and successfully published mobile game on the Google Play Store, featuring dynamic procedural content generation. Currently spearheading a comprehensive remake with enhanced gameplay mechanics and expanded feature set to deliver a more engaging user experience.",
            
            farmoxelTitle: "Codename Farmoxel",
            farmoxelSubtitle: "Unity-powered 3D Resource Management Game",
            farmoxelDesc: "Leading the development of a sophisticated resource management simulation, leveraging Unity's 3D capabilities. This collaborative project has been instrumental in developing project management expertise and team leadership skills while maintaining technical oversight of core systems.",

            roomMakersTitle: "Room Makers",
            roomMakersSubtitle: "Unity-powered Game Boy style Room Building Game",
            roomMakersProjectDesc: "Led the development and recent launch of 'Room Makers', a Unity-powered game-boy-style room building game. Evolved from a successful game jam prototype (ranked 67th/403), guiding a team of 3 through full development and publication on the google play store.",
            
            linkbushTitle: "LinkBush",
            linkbushSubtitle: "Custom Link Management Platform",
            linkBushDesc: "Developed and deployed a modern link management solution hosted on GitHub Pages, utilizing HTML5, CSS3/SASS, and JavaScript. This custom implementation features responsive design and seamless integration with my domain infrastructure at justneki.com.",
            
            miscWebTitle: "Misc Web Projects",
            miscWebDesc: "Developed and currently maintain a diverse portfolio of web applications, such as FaR Team's landing page and Devlog, an educational IDE for UNQ's programming, advanced computational tools (truth table generator, multi-base calculator), interactive multiplayer games, and utility applications. These projects demonstrate proficiency in full-stack development and algorithm implementation.",

            // Skills categories
            gameDev: "Game Development Engines & Languages",
            webDev: "Web Development",
            otherTech: "Other Technologies",
            coreSkills: "Core Skills",
            technical: "Technical",

            // Skills items
            teamLeadership: "Team Leadership",
            projectManagement: "Project Management",
            problemSolving: "Problem Solving",
            quickLearning: "Quick Learning",
            procGen: "Procedural Generation",
            resourceManagement: "Resource Management Systems",
            mobileGameDev: "Mobile Game Development",
            fullStack: "Full Stack Development",
            versionControl: "Version Control (Git)",
            crossPlatform: "Cross-platform Development",
            sysArch: "System Architecture",

            // Languages
            spanish: "Spanish",
            english: "English",
            native: "Native"
        },
        es: {
            title: "Programador Central",
            location: "Gerli (Buenos Aires)",
            phone: "(+54) 911 5645 9566",
            email: '<a href="mailto:contacto@justneki.com">contacto@justneki.com</a>',
            experience: "Experiencia",
            formation: "Formación",
            projects: "Proyectos",
            technicalSkills: "Habilidades Técnicas",
            skills: "Habilidades",
            languages: "Idiomas",
            
            // Experience section
            coreDeveloper: "Desarrollador Central y de Lógica",
            leadProgrammer: "Programador Líder",
            paliverse: "Paliverse Apps",
            farTeam: "F.a.R. Team",
            dateAprilFeb: "Abril 2024 - Febrero 2025",
            dateOctPresent: "Octubre 2022 - Presente",
            dateSeptGameJam: "Septiembre 15 - 25, 2023 (Game Jam)",
            dateSept: "15 - 25 de Septiembre, 2023",
            leadDescriptionFarTeam: "Liderando un equipo de 3 en el desarrollo continuo de 'Codename Farmoxel', un juego 3D de gestión de recursos desarrollado en Unity. Responsable de la arquitectura de sistemas centrales, mecánicas de juego y coordinación del proyecto.",
            roomMakersJamDesc: "Lideré un equipo de 3 como Programador Líder durante una game jam de 10 días, prototipando rápidamente 'Room Makers'. Alcanzamos el puesto 67 de 403 participantes, demostrando rápidas capacidades de desarrollo y sentando las bases para el posterior lanzamiento completo del proyecto.",

            // Formation section
            computerScience: "Licenciatura en Informática",
            englishCert: "Certificación de Inglés B2+",
            unq: "Universidad Nacional de Quilmes",
            englishSchool: "Instituto de Inglés, Lanús",
            dateUnq: "2022 - Presente",
            dateEnglish: "2007-2021",

            // Projects section
            dsxTitle: "DSX",
            dsxSubtitle: "Software que conecta controles DualSense, DualSense Edge y DualShock 4 a tu PC.",
            dsxDesc: "Como desarrollador en Paliverse Apps, mis responsabilidades incluyeron la integración de características de Steam (logros y workshop), desarrollo de componentes de interfaz de usuario y construcción de sistemas backend robustos. Gestioné y mejoré código heredado mientras entregaba nueva funcionalidad para mejorar la experiencia del usuario.",
            
            ktaTitle: "KTA",
            ktaSubtitle: "Juego Arcade 3D Generado Proceduralmente",
            ktaDesc: "Desarrollé y publiqué independientemente un juego móvil en Google Play Store, con generación de contenido procedural dinámica. Actualmente liderando una remake integral con mecánicas de juego mejoradas y conjunto de características expandido para ofrecer una experiencia de usuario más atractiva.",
            
            farmoxelTitle: "Codename Farmoxel",
            farmoxelSubtitle: "Juego de Gestión de Recursos 3D en Unity",
            farmoxelDesc: "Lidero el desarrollo de una simulación sofisticada de gestión de recursos, aprovechando las capacidades 3D de Unity. Este proyecto colaborativo ha sido instrumental en desarrollar experiencia en gestión de proyectos y habilidades de liderazgo de equipo mientras mantengo la supervisión técnica de los sistemas principales.",

            roomMakersTitle: "Room Makers",
            roomMakersSubtitle: "Juego de construcción de habitaciones estilo Game Boy, desarrollado en Unity",
            roomMakersProjectDesc: "Lideré el desarrollo y el reciente lanzamiento de 'Room Makers', un juego de construcción de habitaciones estilo Game Boy desarrollado en Unity. Evolucionado de un prototipo exitoso de game jam (clasificado 67º de 403), guiando a un equipo de 3 a través del desarrollo completo y la publicación en la Google Play Store.",
            linkbushTitle: "LinkBush",
            linkbushSubtitle: "Plataforma Personalizada de Gestión de Enlaces",
            linkBushDesc: "Desarrollé y desplegué una solución moderna de gestión de enlaces alojada en GitHub Pages, utilizando HTML5, CSS3/SASS y JavaScript. Esta implementación personalizada cuenta con diseño responsivo e integración perfecta con mi infraestructura de dominio en justneki.com.",
            
            miscWebTitle: "Proyectos Web Diversos",
            miscWebDesc: "Desarrollé y mantengo un portafolio diverso de aplicaciones web, tales como la página web y el devlog de FaR Team, un IDE educativo para programación de UNQ, herramientas computacionales avanzadas (generador de tablas de verdad, calculadora multi-base), juegos multijugador interactivos y aplicaciones utilitarias. Estos proyectos demuestran competencia en desarrollo full-stack e implementación de algoritmos.",

            // Skills categories
            gameDev: "Engines de Desarrollo de Juegos & Lenguajes",
            webDev: "Desarrollo Web",
            otherTech: "Otras Tecnologías",
            coreSkills: "Habilidades Principales",
            technical: "Técnico",

            // Skills items
            teamLeadership: "Liderazgo de Equipo",
            projectManagement: "Gestión de Proyectos",
            problemSolving: "Resolución de Problemas",
            quickLearning: "Aprendizaje Rápido",
            procGen: "Generación Procedural",
            resourceManagement: "Sistemas de Gestión de Recursos",
            mobileGameDev: "Desarrollo de Juegos Móviles",
            fullStack: "Desarrollo Full Stack",
            versionControl: "Version Control (Git)",
            crossPlatform: "Desarrollo Multiplataforma",
            sysArch: "Arquitectura de Sistemas",

            // Languages
            spanish: "Español",
            english: "Inglés",
            native: "Nativo"
        }
    };

    let currentLang = 'en';

    function updateLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Preserve icons if they exist
                const iconHtml = element.innerHTML.match(/<i.*?<\/i>/);
                element.innerHTML = (iconHtml ? iconHtml[0] + ' ' : '') + translations[lang][key];
            }
        });

        // Update project items
        document.querySelectorAll('.project-item').forEach(project => {
            const title = project.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '') + 'Title';
            const subtitle = project.querySelector('.project-subtitle');
            const description = project.querySelector('p:not(.project-subtitle)');

            if (translations[lang][title]) {
                project.querySelector('h3').textContent = translations[lang][title];
            }
            if (subtitle && translations[lang][title + 'Subtitle']) {
                subtitle.textContent = translations[lang][title + 'Subtitle'];
            }
            if (description && translations[lang][title + 'Desc']) {
                description.textContent = translations[lang][title + 'Desc'];
            }
        });

        // Update skill categories
        document.querySelectorAll('.skill-category').forEach(category => {
            const heading = category.querySelector('h3');
            const iconHtml = heading.innerHTML.match(/<i.*?<\/i>/);
            const text = heading.textContent.trim();
            const key = text.toLowerCase().replace(/\s+/g, '');
        
            if (translations[lang][key]) {
                heading.innerHTML = (iconHtml ? iconHtml[0] + ' ' : '') + translations[lang][key];
            }
        });

        // Update language section
        document.querySelectorAll('.language-item').forEach(item => {
            const langName = item.querySelector('.language');
            const proficiency = item.querySelector('.proficiency');
        
            if (langName.textContent.toLowerCase() === 'spanish') {
                langName.textContent = translations[lang]['spanish'];
                if (proficiency.textContent.toLowerCase() === 'native') {
                    proficiency.textContent = translations[lang]['native'];
                }
            } else if (langName.textContent.toLowerCase() === 'english') {
                langName.textContent = translations[lang]['english'];
            }
        });
    }

    document.querySelector('.download-button').dataset.enPdf = 'Santiago_Fisela_CV_EN.pdf';
    document.querySelector('.download-button').dataset.esPdf = 'Santiago_Fisela_CV_ES.pdf';

    function getCurrentLanguage() {
        return localStorage.getItem('lang') || 'en';
    }

    function updatePDFLink() {
        const downloadButton = document.querySelector('.download-button');
        const currentLang = getCurrentLanguage();
        const pdfPath = currentLang === 'en' ? downloadButton.dataset.enPdf : downloadButton.dataset.esPdf;
        downloadButton.href = pdfPath;
    }

    langSwitch.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
        updatePDFLink(); 
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    }

    // Initial PDF link setup
    updatePDFLink();
});