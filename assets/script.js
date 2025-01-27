function switchLanguage() {
    const elements = {
        intro: {
            fr: "Passionné par l'innovation et le développement de solutions technologiques",
            en: "Passionate about innovation and the development of technological solutions"
        },
        about: {
            fr: "À propos de moi",
            en: "About Me"
        },
        aboutText: {
            fr: "Récemment diplômé avec 3 ans d'expérience en alternance, je suis passionné par l'innovation et le développement de solutions technologiques. Persévérant, polyvalent et rigoureux, je suis motivé par les projets complexes et le travail collaboratif. Je suis prêt à relever de nouveaux défis et à contribuer au succès d'une équipe dynamique.",
            en: "Recently graduated with 3 years of work-study experience, I am passionate about innovation and the development of technological solutions. Perseverant, versatile, and rigorous, I am motivated by complex projects and collaborative work. I am ready to take on new challenges and contribute to the success of a dynamic team."
        },
        experience: {
            fr: "Expérience professionnelle",
            en: "Professional Experience"
        },
        experience1: {
            fr: "Consulting, développement et support des outils PLM, définition et suivi des KPI, développement de PoC internes avec AWS et Azure.",
            en: "Consulting, development, and support of PLM tools, KPI definition and monitoring, development of internal PoCs with AWS and Azure."
        },
        experience2: {
            fr: "Déploiement de services, gestion de conteneurs (Docker, Kubernetes), concepts cloud (AWS), études de performance des solutions de conteneurisation.",
            en: "Service deployment, container management (Docker, Kubernetes), cloud concepts (AWS), performance studies of containerization solutions."
        },
        experience3: {
            fr: "PoC de surveillance et régulation de température avec ESP32, serveur web embarqué pour carte électronique.",
            en: "Temperature monitoring and regulation PoC with ESP32, embedded web server for electronic board."
        },
        education: {
            fr: "Éducation",
            en: "Education"
        },
        education1: {
            fr: "Informatique, GPA 3.6",
            en: "Computer Science, GPA 3.6"
        },
        education2: {
            fr: "GPA 3.7",
            en: "GPA 3.7"
        },
        education3: {
            fr: "Mathématiques et Physique, mention bien",
            en: "Mathematics and Physics, with honors"
        },
        skills: {
            fr: "Compétences",
            en: "Skills"
        },
        contact: {
            fr: "Contact",
            en: "Contact"
        }
    };

    const lang = document.documentElement.lang === "fr" ? "en" : "fr";
   
