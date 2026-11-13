import { createI18n } from "vue-i18n";

const messages = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola",
      iam: "soy",
      role: "Desarrollo de Software",
      eyebrow: "Full-Stack Developer · RD",
      bio: "Soy un desarrollador de software apasionado y altamente motivado. Me enfoco en crear soluciones innovadoras y eficientes. Combino habilidades técnicas con una fuerte capacidad de comunicación y colaboración para lograr resultados excepcionales. Soy una persona proactiva, un excelente miembro de equipo, organizado y responsable.",
      bioShort: "Construyo interfaces y sistemas web eficientes con Vue, React y Python. Enfoque en soluciones limpias, medibles y bien comunicadas.",
      badge: "construyendo para la web",
      resume: "Ver CV",
      contact: "Contáctame",
      stat1sub: "Desarrollo de Software",
      stat2sub: "Frontend moderno",
      stat3sub: "Backend · Odoo",
    },
    sections: {
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      skills: "Tecnologías",
    },
    experience: {
      job1: {
        title: "Ingeniero de Software (08/2024 - 10/2024)",
        desc: "Durante mi experiencia en Global Creative Unit, implementé soluciones web usando JavaScript, Vue.js y Bootstrap, creando aplicaciones eficientes y de alta calidad. Mi trabajo se centró en desarrollar interfaces de usuario intuitivas y dinámicas, mejorando la experiencia de usuario y garantizando un rendimiento óptimo del proyecto.",
      },
      job2: {
        title: "Ingeniero de Software (05/2023 - 11/2023)",
        desc: "Tuve la oportunidad de trabajar en marcos de negocio organizacionales, donde formé parte del desarrollo de nuevos módulos usando Odoo y Python. Esta experiencia me permitió adquirir nuevos conocimientos sobre sistemas contables y mejorar mis habilidades en el diseño e implementación de soluciones eficientes para la gestión empresarial.",
      },
      job3: {
        title: "Desarrollo de Software (2021 - 2024)",
        desc: "Durante mis estudios en el ITLA, realicé varias pasantías y proyectos que me dieron experiencia tanto en desarrollo backend como frontend y en gestión de bases de datos. Esto me permitió fortalecer mis habilidades y adquirir un enfoque integral del desarrollo de software.",
      },
    },
    education: {
      edu1: {
        title: "Desarrollo de Software (2021 - 2024)",
        desc: "Durante mi formación tecnológica en Desarrollo de Software en el prestigioso ITLA, tuve la oportunidad de especializarme en programación web. A través de experiencias prácticas y la resolución constante de problemas, desarrollé una comprensión profunda de las herramientas y prácticas estándar de la industria, lo que me permitió adquirir habilidades sólidas y actualizadas en el campo del desarrollo web.",
      },
      edu2: {
        title: "Bootcamp Full Stack Developer (09/2022 - 02/2023)",
        desc: "Realicé el bootcamp Junior Full Stack Developer en Alterna Academy, donde durante 6 meses cursé 12 módulos que me ayudaron a seguir desarrollándome y adquiriendo nuevas habilidades. Esta experiencia fue fundamental para fortalecer mis conocimientos y prepararme para entrar al mundo laboral como desarrollador full stack.",
      },
      edu3: {
        title: "Escuela de Desarrollo Web (2022 - 2024)",
        desc: "Asistí a la Escuela de Desarrollo Web de Platzi, donde tuve la oportunidad de profundizar en diversas tecnologías y herramientas para el desarrollo de sitios y aplicaciones web. A lo largo de este proceso, aprendí desde lo básico de HTML, CSS y JavaScript, hasta el uso de frameworks modernos y buenas prácticas de desarrollo.",
      },
      edu4: {
        title: "Diseño Web Responsivo y JavaScript (2021 - 2024)",
        desc: "Completé las certificaciones «JavaScript Algorithms and Data Structures» y «Responsive Web Design» a través de freeCodeCamp. A lo largo de estas certificaciones, adquirí un conocimiento profundo en algoritmos y estructuras de datos con JavaScript, así como en el diseño y desarrollo de sitios web responsivos.",
      },
    },
    form: {
      title: "Formulario de Contacto",
      name: "Nombre:",
      email: "Email:",
      subject: "Asunto:",
      message: "Mensaje:",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      errName: "Por favor ingrese su nombre",
      errEmail: "Por favor ingrese su email",
      errEmailValid: "Por favor ingrese un email válido",
      errSubject: "Por favor ingrese el asunto",
      errMessage: "Por favor ingrese su mensaje",
    },
    contactPage: {
      title: "Hablemos",
      lead: "¿Tienes un proyecto en mente o una oportunidad laboral? Completa el formulario o escríbeme directamente. Suelo responder en 24-48 horas.",
      emailLabel: "Correo",
      locationLabel: "Ubicación",
      location: "República Dominicana",
      availabilityLabel: "Disponibilidad",
      availability: "Abierto a nuevas oportunidades",
      socialLabel: "Sígueme",
    },
    aboutPage: {
      title: "Sobre mí",
      p1: "Soy Elian Encarnación, desarrollador de software full-stack formado en el ITLA. Me apasiona construir interfaces y sistemas web eficientes, con foco en soluciones limpias, medibles y bien comunicadas.",
      p2: "Trabajo principalmente con Vue, React y Python, y me gusta involucrarme en todo el ciclo: del diseño de la interfaz a la lógica de negocio y las bases de datos. Soy proactivo, organizado y buen compañero de equipo.",
      focusTitle: "En qué me enfoco",
      focus1: "Frontend moderno con Vue y React",
      focus2: "APIs y backend con Python y NestJS",
      focus3: "Módulos de negocio con Odoo y SQL",
    },
    projectsPage: {
      title: "Proyectos",
      note: "Una selección de trabajos y experimentos. Pasa el cursor sobre cada tarjeta para ver la demo y el repositorio.",
    },
    projectsSection: {
      heading: "Trabajo seleccionado",
      note: "Desliza para ver los proyectos.",
      demo: "Ver demo",
      repo: "Ver en GitHub",
    },
    contactSection: {
      title: "¿Trabajamos<br>juntos?",
      lead: "Escríbeme y te respondo pronto.",
      cta: "Enviar mensaje",
    },
    footer: {
      tagline: "Desarrollador de software · Construyendo soluciones web.",
      social: "Conecta conmigo",
      backToTop: "Volver arriba",
      rights: "Elian Encarnacion. Todos los derechos reservados.",
    },
    wip: "🛠️ EN CONSTRUCCIÓN 🛠️",
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi",
      iam: "I am",
      role: "Software Development",
      eyebrow: "Full-Stack Developer · RD",
      bio: "I am a passionate and highly motivated software developer. My focus is on creating innovative and efficient solutions. I combine technical skills with strong communication and collaboration abilities to achieve exceptional results. I am a proactive individual, an excellent team player, organized, and responsible.",
      bioShort: "I build efficient web interfaces and systems with Vue, React and Python. Focused on clean, measurable, well-communicated solutions.",
      badge: "building for the web",
      resume: "Check Resume",
      contact: "Contact Me",
      stat1sub: "Software Development",
      stat2sub: "Modern frontend",
      stat3sub: "Backend · Odoo",
    },
    sections: {
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Tech Stack",
    },
    experience: {
      job1: {
        title: "Software Engineer (08/2024 - 10/2024)",
        desc: "During my experience at Global Creative Unit, I implemented web solutions using JavaScript, Vue.js and Bootstrap, creating efficient and high quality applications. My work focused on developing intuitive and dynamic user interfaces, improving the user experience and ensuring optimal performance for the project.",
      },
      job2: {
        title: "Software Engineer (05/2023 - 11/2023)",
        desc: "I had the opportunity to work in organizational business frameworks, where I was part of the development of new modules using Odoo and Python. This experience allowed me to acquire new knowledge about accounting systems and improve my skills in the design and implementation of efficient solutions for business management.",
      },
      job3: {
        title: "Software Development (2021 - 2024)",
        desc: "While studying at ITLA, I carried out several internships and projects that gave me experience in both backend and frontend development and database management. This allowed me to strengthen my skills and gain a comprehensive approach to software development.",
      },
    },
    education: {
      edu1: {
        title: "Software Development (2021 - 2024)",
        desc: "During my technological training in Software Development at the prestigious ITLA, I had the opportunity to specialize in web programming. Through hands-on experiences and constant problem solving, I developed a deep understanding of industry standard tools and practices, which allowed me to acquire solid and up-to-date skills in the field of web development.",
      },
      edu2: {
        title: "Full Stack Developer Bootcamp (09/2022 - 02/2023)",
        desc: "I took the Junior Full Stack Developer bootcamp at Alterna Academy, where for 6 months I took 12 modules that helped me to continue developing and acquiring new skills. This experience was fundamental to strengthen my knowledge and prepare me to enter the working world as a full stack developer.",
      },
      edu3: {
        title: "Web Development School (2022 - 2024)",
        desc: "I attended Platzi's Web Development School, where I had the opportunity to delve into various technologies and tools for the development of websites and web applications. Throughout this process, I learned from the basics of HTML, CSS and JavaScript, to the use of modern frameworks and good development practices.",
      },
      edu4: {
        title: "Responsive Web Design and JavaScript (2021 - 2024)",
        desc: "I completed the certifications “JavaScript Algorithms and Data Structures” and “Responsive Web Design” through freeCodeCamp. Throughout these certifications, I acquired a deep knowledge in algorithms and data structures using JavaScript, as well as in the design and development of responsive websites.",
      },
    },
    form: {
      title: "Contact Form",
      name: "Name:",
      email: "Email:",
      subject: "Subject:",
      message: "Message:",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      errName: "Please enter your name",
      errEmail: "Please enter your email",
      errEmailValid: "Please enter a valid email",
      errSubject: "Please enter the subject",
      errMessage: "Please enter your message",
    },
    contactPage: {
      title: "Let's talk",
      lead: "Got a project in mind or a job opportunity? Fill out the form or email me directly. I usually reply within 24-48 hours.",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Dominican Republic",
      availabilityLabel: "Availability",
      availability: "Open to new opportunities",
      socialLabel: "Follow me",
    },
    aboutPage: {
      title: "About me",
      p1: "I'm Elian Encarnación, a full-stack software developer trained at ITLA. I'm passionate about building efficient web interfaces and systems, focused on clean, measurable and well-communicated solutions.",
      p2: "I mainly work with Vue, React and Python, and I like being involved across the whole cycle: from UI design to business logic and databases. I'm proactive, organized and a good team player.",
      focusTitle: "What I focus on",
      focus1: "Modern frontend with Vue and React",
      focus2: "APIs and backend with Python and NestJS",
      focus3: "Business modules with Odoo and SQL",
    },
    projectsPage: {
      title: "Projects",
      note: "A selection of work and experiments. Hover each card to see the demo and the repository.",
    },
    projectsSection: {
      heading: "Selected work",
      note: "Swipe to browse the projects.",
      demo: "View demo",
      repo: "View on GitHub",
    },
    contactSection: {
      title: "Let's work<br>together?",
      lead: "Drop me a line and I'll get back soon.",
      cta: "Send message",
    },
    footer: {
      tagline: "Software developer · Building web solutions.",
      social: "Connect with me",
      backToTop: "Back to top",
      rights: "Elian Encarnacion. All rights reserved.",
    },
    wip: "🛠️ WORK IN PROGRESS 🛠️",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "es",
  fallbackLocale: "es",
  messages,
});

export default i18n;
