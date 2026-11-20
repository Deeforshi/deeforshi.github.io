export type Locale = 'fr' | 'en';

export const defaultLocale: Locale = 'fr';

export interface UiDictionary {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    cv: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    role: string;
    subtitle: string;
    ctaProjects: string;
    ctaCv: string;
    ctaContact: string;
    statusLabel: string;
    statusValue: string;
    locationLabel: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    bioTitle: string;
    languagesTitle: string;
    hobbiesTitle: string;
    softSkillsTitle: string;
    timelineTitle: string;
    expTab: string;
    eduTab: string;
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    allFilter: string;
    viewDetails: string;
    viewRepo: string;
    backToProjects: string;
    contextLabel: string;
    stackLabel: string;
    highlightsLabel: string;
    featuredBadge: string;
  };
  cv: {
    tag: string;
    title: string;
    subtitle: string;
    downloadBtn: string;
    previewBtn: string;
    fileInfo: string;
    highlightsTitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    directTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    unconfiguredHint: string;
  };
  footer: {
    builtWith: string;
    rights: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
}

export const ui: Record<Locale, UiDictionary> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      cv: 'CV',
      contact: 'Contact',
    },
    hero: {
      badge: 'ALTERNANT DATA & IA @ PROSPILOT',
      greeting: 'Bonjour, je suis',
      role: 'Développeur Logiciel orienté Data, IA Agentique & Automatisation',
      subtitle:
        'Étudiant en Mastère MAALSI au CESI Bordeaux (2026–2028) et alternant chez Prospilot. Je développe des workflows n8n, des agents IA et des applications web full-stack.',
      ctaProjects: 'Explorer mes projets',
      ctaCv: 'Consulter le CV',
      ctaContact: 'Me contacter',
      statusLabel: 'STATUT',
      statusValue: 'Alternant @ Prospilot · Mastère MAALSI',
      locationLabel: 'LOCALISATION',
    },
    about: {
      tag: '01 // PROFIL',
      title: 'À propos & Parcours',
      subtitle:
        'Du développement full-stack chez SNCF Réseau à l’automatisation n8n et aux agents IA chez Prospilot.',
      bioTitle: 'Profil',
      languagesTitle: 'Langues',
      hobbiesTitle: 'Centres d’intérêt',
      softSkillsTitle: 'Soft skills',
      timelineTitle: 'Expériences & Formation',
      expTab: 'Expériences',
      eduTab: 'Formation',
    },
    skills: {
      tag: '02 // STACK TECHNIQUE',
      title: 'Compétences',
      subtitle:
        'Un socle en développement logiciel et bases de données relationnelles, appliqué aujourd’hui à l’automatisation n8n et à l’IA agentique.',
    },
    projects: {
      tag: '03 // RÉALISATIONS',
      title: 'Projets sélectionnés',
      subtitle:
        'Outils développés en workflow agentique, applications web, moteurs 3D, jeux orientés objet et ingénierie SQL.',
      allFilter: 'Tous',
      viewDetails: 'Voir les détails',
      viewRepo: 'Voir le dépôt',
      backToProjects: 'Retour aux projets',
      contextLabel: 'Contexte & Architecture',
      stackLabel: 'Stack technique',
      highlightsLabel: 'Points clés',
      featuredBadge: 'À la une',
    },
    cv: {
      tag: '04 // CURRICULUM VITAE',
      title: 'Dossier & CV',
      subtitle:
        'Téléchargez ou consultez mon CV au format PDF.',
      downloadBtn: 'Télécharger le PDF',
      previewBtn: 'Ouvrir l’aperçu',
      fileInfo: 'PDF · Format A4 · Mis à jour 2026',
      highlightsTitle: 'Points forts du profil',
    },
    contact: {
      tag: '05 // CONTACT',
      title: 'Prendre contact',
      subtitle:
        'Un projet d’automatisation, un échange technique autour de l’IA agentique ou une prise de contact professionnelle ?',
      directTitle: 'Canaux directs',
      formTitle: 'Envoyer un message',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Camille Martin',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'camille@entreprise.fr',
      subjectLabel: 'Objet',
      subjectPlaceholder: 'Échange technique / Projet IA & Automatisation',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez votre besoin, le poste ou le projet...',
      sendBtn: 'Envoyer le message',
      sendingBtn: 'Envoi en cours...',
      successMsg: 'Message envoyé. Je vous répondrai rapidement.',
      errorMsg:
        'Échec de l’envoi via le formulaire. Utilisez l’adresse e-mail directe ci-contre.',
      unconfiguredHint:
        'Mode direct actif : l’envoi ouvre votre client mail ou utilisez l’adresse ci-contre.',
    },
    footer: {
      builtWith: 'Propulsé par Astro & Tailwind CSS',
      rights: 'Tous droits réservés.',
      backToTop: 'Haut de page',
    },
    notFound: {
      title: 'SIGNAL PERDU // 404',
      subtitle: 'Cette route n’existe pas ou a été déplacée.',
      backHome: 'Retour à l’accueil',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      cv: 'Resume',
      contact: 'Contact',
    },
    hero: {
      badge: 'DATA & AI APPRENTICE @ PROSPILOT',
      greeting: 'Hi, I am',
      role: 'Software Developer focused on Data, Agentic AI & Automation',
      subtitle:
        'MAALSI Master’s student at CESI Bordeaux (2026–2028) and apprentice at Prospilot. I build n8n workflows, AI agents, and full-stack web applications.',
      ctaProjects: 'Explore projects',
      ctaCv: 'View Resume',
      ctaContact: 'Get in touch',
      statusLabel: 'STATUS',
      statusValue: 'Apprentice @ Prospilot · MAALSI Master’s',
      locationLabel: 'LOCATION',
    },
    about: {
      tag: '01 // PROFILE',
      title: 'About & Background',
      subtitle:
        'From full-stack development at SNCF Réseau to n8n automation and AI agents at Prospilot.',
      bioTitle: 'Profile',
      languagesTitle: 'Languages',
      hobbiesTitle: 'Interests',
      softSkillsTitle: 'Soft Skills',
      timelineTitle: 'Experience & Education',
      expTab: 'Experience',
      eduTab: 'Education',
    },
    skills: {
      tag: '02 // TECH STACK',
      title: 'Skills',
      subtitle:
        'A background in software engineering and relational databases, applied today to n8n automation and agentic AI.',
    },
    projects: {
      tag: '03 // WORK',
      title: 'Selected Projects',
      subtitle:
        'Tools built with agentic dev workflows, web applications, 3D engines, OOP games, and SQL engineering.',
      allFilter: 'All',
      viewDetails: 'View details',
      viewRepo: 'View repository',
      backToProjects: 'Back to projects',
      contextLabel: 'Context & Architecture',
      stackLabel: 'Tech Stack',
      highlightsLabel: 'Key Highlights',
      featuredBadge: 'Featured',
    },
    cv: {
      tag: '04 // RESUME',
      title: 'Curriculum Vitae',
      subtitle:
        'Download or preview my resume in PDF format.',
      downloadBtn: 'Download PDF',
      previewBtn: 'Open Preview',
      fileInfo: 'PDF · A4 Format · Updated 2026',
      highlightsTitle: 'Profile Highlights',
    },
    contact: {
      tag: '05 // CONTACT',
      title: 'Get in Touch',
      subtitle:
        'Have an automation challenge, a technical topic around agentic AI, or just want to connect?',
      directTitle: 'Direct Channels',
      formTitle: 'Send a Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Alex Taylor',
      emailLabel: 'Email Address',
      emailPlaceholder: 'alex@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Technical inquiry / AI & Automation project',
      messageLabel: 'Message',
      messagePlaceholder: 'Share details about the role, team, or project...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successMsg: 'Message sent successfully. I will get back to you shortly.',
      errorMsg:
        'Form submission failed. Please reach out directly via the email address listed.',
      unconfiguredHint:
        'Direct mode active: submitting opens your mail client or use the direct email.',
    },
    footer: {
      builtWith: 'Built with Astro & Tailwind CSS',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
    notFound: {
      title: 'SIGNAL LOST // 404',
      subtitle: 'The requested route does not exist or has been relocated.',
      backHome: 'Back to Home',
    },
  },
};
