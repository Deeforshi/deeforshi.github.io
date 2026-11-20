import type { Locale } from '../i18n/ui';

export interface TimelineItem {
  type: 'experience' | 'education';
  period: Record<Locale, string>;
  title: Record<Locale, string>;
  org: string;
  location: Record<Locale, string>;
  description: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
  tags: Record<Locale, string[]>;
  current?: boolean;
}

export interface SkillGroup {
  id: string;
  title: Record<Locale, string>;
  accent: 'cyan' | 'pink' | 'yellow' | 'purple';
  items: Record<Locale, string[]>;
}

export interface LanguageItem {
  name: Record<Locale, string>;
  level: Record<Locale, string>;
}

export const siteConfig = {
  name: 'Heddy Brun',
  handle: 'Deeforshi',
  email: 'heddybrun@pm.me',
  phone: '+33 6 95 39 42 80',
  phoneHref: 'tel:+33695394280',
  location: {
    fr: 'Bordeaux et périphérie, France',
    en: 'Bordeaux area, France',
  } as Record<Locale, string>,
  linkedin: 'https://www.linkedin.com/in/heddy-brun',
  github: 'https://github.com/Deeforshi',
  cvPath: '/cv/HeddyBrun_CV.pdf',
  avatarPath: '/images/profile/face_2.png',
  drivingLicense: {
    fr: 'Permis B en cours',
    en: 'Driver’s license (B) in progress',
  } as Record<Locale, string>,
  web3formsKey: '',

  bio: {
    fr: [
      'Développeur logiciel orienté Data & IA, je suis étudiant en Mastère MAALSI au CESI Bordeaux (2026–2028) et alternant chez Prospilot depuis octobre 2026 en Data, IA agentique et automatisation n8n.',
      'Au quotidien, je conçois des workflows d’automatisation n8n, des agents IA et des POC métier fiables (développement agentique avec Claude Code), en m’appuyant sur mon alternance précédente chez SNCF Réseau et mon stage international à Thomas More University en Belgique.',
      'Curieux, autonome et pragmatique, je garde une veille active à travers des projets perso, les jeux vidéo, les concerts de heavy metal et la randonnée.',
    ],
    en: [
      'Software developer focused on Data & AI, currently enrolled in the MAALSI Master’s program at CESI Bordeaux (2026–2028) and working as an apprentice at Prospilot since October 2026 in Data, agentic AI, and n8n automation.',
      'Day to day, I build n8n automation workflows, AI agents, and reliable business POCs (including agentic development with Claude Code), drawing on my previous apprenticeship at SNCF Réseau and my international internship at Thomas More University in Belgium.',
      'Curious, autonomous, and pragmatic, I stay up to date through personal builds alongside video games, heavy metal concerts, and hiking.',
    ],
  } as Record<Locale, string[]>,

  languages: [
    {
      name: { fr: 'Français', en: 'French' },
      level: { fr: 'Natif', en: 'Native' },
    },
    {
      name: { fr: 'Anglais', en: 'English' },
      level: { fr: 'Courant — TOEIC 975', en: 'Fluent — TOEIC 975' },
    },
    {
      name: { fr: 'Espagnol', en: 'Spanish' },
      level: { fr: 'Notions', en: 'Basic' },
    },
  ] as LanguageItem[],

  hobbies: {
    fr: [
      'Concerts & Heavy Metal',
      'Jeux vidéo',
      'Randonnées',
      'IA & Nouvelles Technologies',
    ],
    en: [
      'Concerts & Heavy Metal',
      'Video Games',
      'Hiking',
      'AI & Emerging Tech',
    ],
  } as Record<Locale, string[]>,

  softSkills: {
    fr: [
      'Adaptabilité',
      'Esprit d’équipe',
      'Autonomie',
      'Résolution de problèmes',
    ],
    en: [
      'Adaptability',
      'Teamwork',
      'Autonomy',
      'Problem Solving',
    ],
  } as Record<Locale, string[]>,

  timeline: [
    {
      type: 'experience',
      current: true,
      period: { fr: 'Oct 2026 — Présent', en: 'Oct 2026 — Present' },
      title: {
        fr: 'Alternant Data, IA Agentique & Automatisation n8n',
        en: 'Data, Agentic AI & n8n Automation Apprentice',
      },
      org: 'Prospilot',
      location: { fr: 'Bordeaux, France', en: 'Bordeaux, France' },
      description: {
        fr: 'Développement et orchestration de workflows d’automatisation n8n, d’agents IA et de solutions Data orientées POC et automatisation métier.',
        en: 'Developing and orchestrating n8n automation workflows, AI agents, and Data-driven POCs and business automation solutions.',
      },
      bullets: {
        fr: [
          'Conception de workflows n8n intégrant des LLM, webhooks et API métier pour automatiser des processus opérationnels.',
          'Développement et prototypage rapide de POC d’agents IA (orchestration, structuration de données et fiabilisation).',
          'Exploitation et traitement de données (Python, SQL) avec intégration continue et outillage agentique (Claude Code).',
        ],
        en: [
          'Designed n8n workflows combining LLMs, webhooks, and business APIs to automate operational pipelines.',
          'Built and rapidly iterated on AI agent POCs covering orchestration, data structuring, and reliability.',
          'Processed and leveraged data (Python, SQL) using modern agentic engineering workflows (Claude Code).',
        ],
      },
      tags: {
        fr: ['Prospilot', 'n8n', 'Agents IA', 'Claude Code', 'Python'],
        en: ['Prospilot', 'n8n', 'AI Agents', 'Claude Code', 'Python'],
      },
    },
    {
      type: 'experience',
      period: { fr: '2026', en: '2026' },
      title: {
        fr: 'Bénévole',
        en: 'Volunteer',
      },
      org: 'Ludothèque O Fil du Jeu',
      location: { fr: 'Bassens, France', en: 'Bassens, France' },
      description: {
        fr: 'Engagement associatif autour de l’accueil du public, de la médiation ludique et de la gestion du catalogue de jeux.',
        en: 'Community volunteering focused on welcoming visitors, facilitating board game sessions, and managing the game catalog.',
      },
      bullets: {
        fr: [
          'Accueil, conseil et animation d’ateliers autour des jeux de société pour des publics variés.',
          'Participation à l’organisation logistique, au suivi des prêts et à la vie associative locale.',
        ],
        en: [
          'Welcomed visitors, recommended games, and hosted sessions for diverse audiences.',
          'Supported inventory organization, lending logistics, and local community events.',
        ],
      },
      tags: {
        fr: ['Association', 'Communication', 'Organisation'],
        en: ['Volunteering', 'Communication', 'Organization'],
      },
    },
    {
      type: 'experience',
      period: { fr: 'Sept 2024 — Août 2025', en: 'Sept 2024 — Aug 2025' },
      title: {
        fr: 'Alternance Développeur Full-Stack',
        en: 'Full-Stack Developer Apprentice',
      },
      org: 'SNCF Réseau',
      location: { fr: 'Bordeaux, France', en: 'Bordeaux, France' },
      description: {
        fr: 'Développement et maintenance d’applications internes orientées exploitation de données pour les équipes métier et terrain.',
        en: 'Built and maintained internal data-driven web applications for operations and business teams.',
      },
      bullets: {
        fr: [
          'Conception et évolution d’applications internes full-stack répondant aux besoins des équipes terrain et métier.',
          'Traitement, structuration et exploitation de données avec optimisation de requêtes SQL pour améliorer les performances.',
          'Collaboration étroite avec les utilisateurs métier (recueil du besoin, itérations agiles, recette et mise en production).',
        ],
        en: [
          'Developed and evolved internal full-stack applications tailored to operational and business teams.',
          'Processed and leveraged business data while optimizing SQL queries for faster reporting and responsiveness.',
          'Collaborated closely with stakeholders from requirement gathering and agile iterations to deployment.',
        ],
      },
      tags: {
        fr: ['Full-Stack', 'SQL', 'Traitement de données', 'Agile'],
        en: ['Full-Stack', 'SQL', 'Data Processing', 'Agile'],
      },
    },
    {
      type: 'experience',
      period: { fr: 'Avril — Juin 2024', en: 'April — June 2024' },
      title: {
        fr: 'Stage Universitaire — Développeur Full-Stack',
        en: 'University Internship — Full-Stack Developer',
      },
      org: 'Thomas More University',
      location: { fr: 'Geel, Belgique', en: 'Geel, Belgium' },
      description: {
        fr: 'Projet international en autonomie au sein d’une équipe de 4 personnes : création d’une identité de marque et d’une plateforme web complète.',
        en: 'Autonomous international team project (4 members): built a complete brand identity and full-stack web platform from scratch.',
      },
      bullets: {
        fr: [
          'Conception en équipe de 4 de l’identité produit et d’un site web full-stack avec Symfony et React.',
          'Développement d’API REST, modélisation de la base de données et intégration front-end réactive.',
          'Pilotage du projet en méthode Agile dans un environnement anglophone international.',
        ],
        en: [
          'Co-created a product brand and full-stack web application using Symfony and React in a 4-person team.',
          'Implemented REST APIs, relational database schemas, and a responsive front-end interface.',
          'Delivered the project using Agile practices in an international English-speaking environment.',
        ],
      },
      tags: {
        fr: ['Symfony', 'React', 'API REST', 'Scrum', 'Anglais'],
        en: ['Symfony', 'React', 'REST API', 'Scrum', 'English'],
      },
    },
    {
      type: 'education',
      current: true,
      period: { fr: '2026 — 2028', en: '2026 — 2028' },
      title: {
        fr: 'Étudiant au Mastère MAALSI',
        en: 'MAALSI Master’s Student',
      },
      org: 'CESI Bordeaux',
      location: { fr: 'Bordeaux, France', en: 'Bordeaux, France' },
      description: {
        fr: 'Manager en Architecture et Applications Logicielles des Systèmes d’Information — rythme alternance 1 à 2 semaines école / 3 semaines entreprise.',
        en: 'Master’s in Software Architecture & Information Systems Management — apprenticeship schedule (1–2 weeks school / 3 weeks company).',
      },
      bullets: {
        fr: [
          'Architecture logicielle, gouvernance des données, intégration de l’IA et pilotage technique de projets SI.',
          'Rythme adapté à l’immersion en entreprise : 1–2 semaines en formation / 3 semaines en entreprise.',
        ],
        en: [
          'Software architecture, data governance, AI integration, and technical leadership for enterprise systems.',
          'Alternating schedule: 1–2 weeks at school / 3 weeks in the company.',
        ],
      },
      tags: {
        fr: ['Architecture SI', 'Data & IA', 'Alternance'],
        en: ['IS Architecture', 'Data & AI', 'Apprenticeship'],
      },
    },
    {
      type: 'education',
      period: { fr: '2022 — 2025', en: '2022 — 2025' },
      title: {
        fr: 'BUT Informatique — Réalisation d’applications',
        en: 'Bachelor of Technology in Computer Science (BUT)',
      },
      org: 'IUT de Bordeaux',
      location: { fr: 'Gradignan, France', en: 'Gradignan, France' },
      description: {
        fr: 'Parcours Réalisation d’applications : conception, développement, validation logicielle, bases de données et gestion de projet.',
        en: 'Application Engineering track: software architecture, full-stack development, automated testing, databases, and project management.',
      },
      bullets: {
        fr: [
          'Solide pratique de la programmation orientée objet (Java, C#), du développement web (PHP/Symfony, JS/React) et des SGBD.',
          'Réalisation de nombreux projets en équipe en méthodologie Agile / Scrum avec tests unitaires et CI/CD.',
        ],
        en: [
          'Solid foundation in OOP (Java, C#), web development (PHP/Symfony, JS/React), and relational databases.',
          'Completed multiple team projects using Agile/Scrum, unit testing, Git, and CI/CD workflows.',
        ],
      },
      tags: {
        fr: ['Java', 'C#', 'Symfony', 'SQL', 'Scrum'],
        en: ['Java', 'C#', 'Symfony', 'SQL', 'Scrum'],
      },
    },
    {
      type: 'education',
      period: { fr: '2019 — 2022', en: '2019 — 2022' },
      title: {
        fr: 'Baccalauréat Technologique STI2D — Spécialité SIN',
        en: 'STI2D Technological Baccalaureate — Digital & IT Systems (SIN)',
      },
      org: 'Lycée Gustave Eiffel',
      location: { fr: 'Bordeaux, France', en: 'Bordeaux, France' },
      description: {
        fr: 'Systèmes d’Information et Numérique : bases de l’électronique, réseaux, algorithmique et prototypage de systèmes communicants.',
        en: 'Information and Digital Systems specialization covering electronics fundamentals, networking, algorithmic thinking, and connected prototyping.',
      },
      bullets: {
        fr: [
          'Premiers pas en programmation, réseaux et architecture matérielle des systèmes numériques.',
        ],
        en: [
          'First steps in programming, networking, and digital systems architecture.',
        ],
      },
      tags: {
        fr: ['SIN', 'Réseaux', 'Algorithmique'],
        en: ['Digital Systems', 'Networking', 'Algorithms'],
      },
    },
  ] as TimelineItem[],

  skillGroups: [
    {
      id: 'ai-agentic',
      title: {
        fr: 'IA Agentique & Automatisation',
        en: 'Agentic AI & Automation',
      },
      accent: 'cyan',
      items: {
        fr: [
          'n8n (Workflows & API)',
          'Claude Code / Dev Agentique',
          'Python & Pandas',
          'POC & Automatisation métier',
        ],
        en: [
          'n8n (Workflows & APIs)',
          'Claude Code / Agentic Dev',
          'Python & Pandas',
          'Business POCs & Automation',
        ],
      },
    },
    {
      id: 'web-software',
      title: {
        fr: 'Développement Web & Logiciel',
        en: 'Web & Software Engineering',
      },
      accent: 'pink',
      items: {
        fr: [
          'JavaScript ES6+',
          'React',
          'PHP / Symfony',
          'Java / Kotlin',
          'C#',
        ],
        en: [
          'JavaScript ES6+',
          'React',
          'PHP / Symfony',
          'Java / Kotlin',
          'C#',
        ],
      },
    },
    {
      id: 'data-sql',
      title: {
        fr: 'Data & Bases de données',
        en: 'Data & Databases',
      },
      accent: 'yellow',
      items: {
        fr: [
          'SQL Server',
          'PostgreSQL',
          'MySQL',
          'Modélisation & Optimisation SQL',
        ],
        en: [
          'SQL Server',
          'PostgreSQL',
          'MySQL',
          'SQL Modeling & Optimization',
        ],
      },
    },
    {
      id: 'devops-methods',
      title: {
        fr: 'Outils, DevOps & Méthodes',
        en: 'Tools, DevOps & Methods',
      },
      accent: 'purple',
      items: {
        fr: [
          'Git',
          'Agile / Scrum',
          'Docker',
          'CI/CD',
          'Linux / Bash',
          'Tests & Qualité code',
        ],
        en: [
          'Git',
          'Agile / Scrum',
          'Docker',
          'CI/CD',
          'Linux / Bash',
          'Testing & Code Quality',
        ],
      },
    },
  ] as SkillGroup[],

  cvHighlights: {
    fr: [
      'Étudiant au Mastère MAALSI — CESI Bordeaux (2026–2028) & alternant chez Prospilot depuis oct. 2026',
      'Pratique de l’IA agentique (Claude Code), automatisation n8n, Python / Pandas et prototypage de POC',
      'Expérience précédente en alternance chez SNCF Réseau (applications internes & SQL)',
      'Anglais courant (TOEIC 975, stage en Belgique) · Permis B en cours',
    ],
    en: [
      'MAALSI Master’s student at CESI Bordeaux (2026–2028) & apprentice at Prospilot since Oct 2026',
      'Hands-on work with agentic AI (Claude Code), n8n automation, Python / Pandas, and POC prototyping',
      'Prior apprenticeship at SNCF Réseau (internal full-stack apps & SQL data optimization)',
      'Fluent English (TOEIC 975, internship in Belgium) · Driver’s license (B) in progress',
    ],
  } as Record<Locale, string[]>,
};
