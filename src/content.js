// ─────────────────────────────────────────────────────────────
//  All site content lives here.
//  • Replace every `null` below with the real value; the site shows a
//    yellow "À compléter" marker until you do.
//  • English text (`en`) is a translation to validate.
// ─────────────────────────────────────────────────────────────

export const links = {
  email: 'Anaskedada20@gmail.com',
  phone: '+212 6 58 08 47 88',
  linkedin: 'https://www.linkedin.com/in/anas-kedada-btx/',
  github: 'https://github.com/anaskedada',
  cv: '/cv-anass-kedada.pdf', // file in /public (re-export it when the CV changes)
};

// Per-project assets (images live in /public/projects).
//   cover    – image shown on the site
//   full     – full-page capture opened on click (optional)
//   portrait – true for a tall/mobile image (shown uncropped)
//   private  – client back-office: no screenshots can be shown
//   url      – live website
//   store    – Google Play link (mobile apps)
//   maintenance – true while the live site is in maintenance (shows a note instead of a link)
const img = (key, extra = {}) => ({
  cover: `/projects/${key}.webp`,
  full: `/projects/${key}-full.webp`,
  ...extra,
});

export const projectAssets = {
  golf: img('golf', { url: 'https://www.golfmarketplace.com/' }),
  rayonnage: img('rayonnage', { maintenance: true }),
  systema: { private: true },
  cochet: img('cochet', { maintenance: true }),
  marbre: { private: true },
  onyma: {
    cover: '/projects/onyma.webp',
    portrait: true,
    store: 'https://play.google.com/store/apps/details?id=com.onyma.usar',
  },
  freshmania: img('freshmania', { url: 'https://www.freshmania.ma/' }),
  fryvy: img('fryvy', {
    url: 'https://www.fryvy.com/',
    store: 'https://play.google.com/store/apps/details?id=com.chamsed.fryvy',
  }),
  transfertsways: img('transfertsways', { url: 'https://www.transfertsways.com/' }),
  seelver: { private: true },
  greensmile: img('greensmile', { url: 'https://www.greensmile.ma/fr/' }),
  natea: img('natea', { url: 'https://www.natea.info/fr/' }),
  glowhaira: img('glowhaira', { maintenance: true }),
  lessens: img('lessens', { url: 'https://www.lessensdemarrakech.ma/' }),
  botanica: img('botanica', { maintenance: true }),
};

const stacks = {
  golf: ['Symfony', 'Twig', 'LiipImagineBundle', 'Cloudflare CDN'],
  rayonnage: ['PHP', 'Vite', 'Configurateur 3D'],
  systema: ['Symfony (API)', 'React', 'Vue.js'],
  cochet: ['WordPress', 'WooCommerce'],
  marbre: ['PrestaShop', 'PHP'],
  onyma: ['Flutter', 'Dart', 'Firebase', 'GetX'],
};

const skillItems = {
  backend: ['PHP', 'Symfony', 'Doctrine ORM', 'Twig', 'EasyAdmin', 'API REST', 'JWT', 'MVC'],
  frontend: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'HTML', 'CSS'],
  cms: ['WordPress', 'WooCommerce', 'PrestaShop'],
  mobile: ['Flutter / Dart', 'GetX', 'React Native', 'Firebase (Firestore, FCM)'],
  payment: ['Stripe', 'CMI'],
  tools: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Jest', 'VS Code'],
};

export const content = {
  fr: {
    meta: {
      title: 'Anass Kedada – Développeur Backend PHP / Symfony',
      skip: 'Aller au contenu',
      themeToLight: 'Passer en mode clair',
      themeToDark: 'Passer en mode sombre',
      langLabel: 'Langue',
      todo: 'À compléter',
    },
    nav: [
      { id: 'projets', label: 'Projets' },
      { id: 'competences', label: 'Compétences' },
      { id: 'experience', label: 'Expérience' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      name: 'Anass Kedada',
      title: 'Développeur Backend PHP / Symfony – Full Stack',
      tagline:
        'Je conçois des applications métier sur mesure : e-commerce, back-offices multi-rôles, API REST et intégrations de paiement.',
      location: 'Rabat, Maroc',
      cv: 'Télécharger mon CV',
      contact: 'Me contacter',
      cvTodo: 'lien vers le CV (PDF)',
      json: {
        role: 'Backend PHP / Symfony',
        focus: ['e-commerce', 'back-offices multi-rôles', 'paiements'],
        location: 'Rabat, Maroc',
        contract: 'CDI · Picaxel · depuis 05/2024',
      },
    },
    about: {
      heading: 'Profil',
      text: "Développeur PHP/Symfony avec plus de 2 ans d'expérience en CDI, spécialisé dans les applications métier sur mesure : plateformes e-commerce, back-offices multi-rôles, API REST et intégrations de paiement (Stripe, CMI). Expérience complémentaire sur WordPress/WooCommerce, PrestaShop et le développement mobile (Flutter, React Native). Je traduis des règles métier complexes – tarification B2B, abonnements, planification – en applications maintenables et performantes.",
    },
    skills: {
      heading: 'Compétences',
      primary: {
        name: 'Backend',
        items: [...skillItems.backend, 'Rôles et permissions'],
      },
      ai: {
        name: 'IA & automatisation',
        intro:
          'Agents IA sur mesure pour tout type d’entreprise : vente, calculs, appels et tâches automatisées.',
        items: [
          'Création d’agents IA',
          'Agents IA d’appel (voix)',
          'Systèmes multi-agents',
          'Agents de vente',
          'Agents de calcul et de devis',
          'Scripts et tâches automatisées',
        ],
      },
      groups: [
        { name: 'Bases de données', items: ['MySQL', 'Modélisation', 'Migrations', 'Optimisation de requêtes'] },
        { name: 'Frontend', items: skillItems.frontend },
        { name: 'CMS / E-commerce', items: [...skillItems.cms.slice(0, 2), 'PrestaShop (modules sur mesure)'] },
        { name: 'Mobile', items: skillItems.mobile },
        { name: 'Paiement', items: skillItems.payment },
        { name: 'Performance', items: ['Mise en cache', 'LiipImagineBundle', 'Cloudflare CDN'] },
        { name: 'Outils', items: skillItems.tools },
      ],
    },
    projects: {
      heading: 'Projets phares',
      intro: 'Six études de cas : le problème métier, ce que j’ai construit, et le résultat.',
      labels: {
        problem: 'Problème',
        built: 'Réalisation',
        result: 'Résultat',
        stack: 'Stack',
        screenshots: 'captures d’écran',
        link: 'lien du projet',
        resultTodo: 'résultat mesurable',
        view: 'Voir le site',
        store: 'Google Play',
        maintenance: 'Site en maintenance – lien bientôt disponible',
        fullPage: 'Voir la page complète',
        private: 'Back-office client privé : captures d’écran non diffusables.',
        stackTodo: 'stack technique',
      },
      items: [
        {
          key: 'golf',
          title: 'Golf Marketplace',
          type: 'Plateforme e-commerce et abonnements',
          stack: [...stacks.golf],
          problem:
            "Vendre des produits de golf haut de gamme et gérer des abonnements de clubs, avec plusieurs types d'utilisateurs internes.",
          built: [
            "Système d'abonnement aux clubs, côté utilisateur et administration.",
            'Back-office pour gérer produits, pages, utilisateurs et abonnements.',
            'Rôles et permissions granulaires (administrateurs, employés, gestionnaires), avec un tableau de bord dédié à chaque rôle.',
            'Traitement des images : redimensionnement automatique, conversion WebP, cache.',
            'Cloudflare CDN et sous-domaine dédié aux médias.',
          ],
          result: 'Score Google PageSpeed Insights d’environ 90+.',
        },
        {
          key: 'rayonnage',
          title: 'Pro Occasion Rayonnage',
          type: 'Configurateur 3D et e-commerce de rayonnage industriel',
          stack: [...stacks.rayonnage],
          problem:
            'Permettre aux clients et aux administrateurs de concevoir leur propre rayonnage ou mezzanine, et d’obtenir le bon prix pour chaque configuration.',
          built: [
            'Solution complète en PHP / Vite : site de vente, configurateur et administration.',
            'Configurateur 3D en direct : le client ou l’administrateur conçoit son rayonnage et ses mezzanines.',
            'Calcul du prix exact de chaque pièce qui compose la configuration.',
            'Vente en ligne des rayonnages et mezzanines configurés.',
          ],
          result: null,
        },
        {
          key: 'systema',
          title: 'Systema Vending',
          type: "Maintenance d'un parc de distributeurs",
          stack: [...stacks.systema, 'Cartographie et itinéraires'],
          problem:
            "Organiser la maintenance d'un réseau de plus de 400 distributeurs automatiques répartis par régions.",
          built: [
            'Planification des interventions des techniciens.',
            "Calcul automatique des durées d'intervention selon le type de machine, la localisation et la priorité.",
          ],
          result: null,
        },
        {
          key: 'cochet',
          title: 'Cochet',
          type: 'E-commerce agricole B2B / B2C',
          stack: [...stacks.cochet, 'Thème sur mesure'],
          problem:
            'Vendre des machines et équipements agricoles à des particuliers, des revendeurs et des grandes entreprises, avec des prix différents pour chacun.',
          built: [
            'Tarification selon le rôle utilisateur et la région.',
            'Remises dynamiques selon le type de client (B2B, B2C, revendeur).',
            'Règles de TVA par rôle et zone géographique.',
            'Visibilité conditionnelle des prix.',
            'Thème WooCommerce sur mesure et parcours d’achat simplifié.',
          ],
          result: null,
        },
        {
          key: 'marbre',
          title: 'InterieurMarbre',
          type: 'Module PrestaShop de devis B2B',
          stack: [...stacks.marbre, 'Module sur mesure'],
          problem:
            'Permettre aux revendeurs de marbre et de matériaux de créer rapidement des devis personnalisés pour leurs clients.',
          built: [
            'Création de devis combinant produits, matériaux, services et livraison.',
            'Workflow complet : création, validation, suivi, ajustement des prix.',
            'Espace administrateur centralisant les devis par entreprise et par produit.',
          ],
          result: null,
        },
        {
          key: 'onyma',
          title: 'Onyma',
          type: 'Réservation de salons de beauté (iOS et Android)',
          stack: [...stacks.onyma],
          problem:
            'Mettre en relation clients et salons avec une réservation fiable en temps réel.',
          built: [
            'Deux applications : client et salon.',
            'Recherche géolocalisée jusqu’à 400 km, filtres par ville, date, service et mot-clé.',
            'Disponibilités en temps réel et notifications push (Firestore, FCM).',
            'Planification : blocage des indisponibilités, reprogrammation, rappel automatique 45 min avant le rendez-vous.',
            'Tableau de bord gérant : rendez-vous, personnel, services, revenus.',
            'Favoris, avis et notes. Interface bilingue FR / EN.',
          ],
          result: null,
        },
      ],
    },
    other: {
      heading: 'Autres projets',
      items: [
        { key: 'freshmania', title: 'Freshmania', stack: 'API Symfony, React', text: 'Commandes et réservations pour un restaurant : personnalisation des plats, paiement en ligne CMI, tableau de bord financier.', result: 'Score Google PageSpeed Insights : 97' },
        { key: 'fryvy', title: 'Fryvy', stack: 'React Native, Symfony', text: 'Mise en relation freelances / clients : paiements Stripe, back-office EasyAdmin.' },
        { key: 'transfertsways', title: 'Transfertsways', stack: 'Symfony', text: "Réservation de transferts privés et d'excursions, back-office transporteurs.", result: 'Score Google PageSpeed Insights : 95' },
        { key: 'seelver', title: 'Seelver', stack: 'Symfony', text: 'Gestion de résidences pour personnes âgées : chambres, lits, visites, séjours, suivi des résidents.' },
        { key: 'greensmile', title: 'GreenSmile', stack: 'Symfony', text: 'Événements agricoles et blog : réservation en ligne, back-office administrateurs et organisateurs.' },
        { key: 'natea', title: 'Natea', stack: null, text: 'Site pour un centre de massage et de bien-être.', result: 'Score Google PageSpeed Insights : 98' },
        { key: 'glowhaira', title: 'Glowhaira', stack: null, text: 'Boutique e-commerce de soins capillaires.' },
        { key: 'lessens', title: 'Les Sens de Marrakech', stack: null, text: 'Boutique e-commerce : soins, parfums, maison et cadeaux.', result: 'Score Google PageSpeed Insights : 92' },
        { key: 'botanica', title: 'Botanica Alma', stack: null, text: 'Boutique e-commerce de cosmétiques et d’huiles.' },
      ],
    },
    experience: {
      heading: 'Expérience',
      items: [
        {
          dates: '05/2024 – aujourd’hui',
          role: 'Développeur Backend PHP / Symfony',
          org: 'Picaxel (CDI)',
          text: 'Applications web métier en Symfony, API REST, modélisation MySQL, rôles et permissions, optimisation des performances, collaboration avec l’équipe front-end.',
        },
        {
          dates: '03/2024 – 05/2024',
          role: 'Développeur Web stagiaire',
          org: 'TechNova Solutions',
          text: 'Fonctionnalités en HTML, CSS, JavaScript ; intégration d’API REST.',
        },
        {
          dates: '01/2023 – 03/2024',
          role: 'Développeur Mobile stagiaire',
          org: 'BENOCA',
          text: 'Applications Flutter multiplateformes, intégration d’API REST.',
        },
      ],
    },
    education: {
      heading: 'Formation',
      items: [
        { year: '2024', title: 'Licence professionnelle Développement web et mobile', school: 'Megacampus' },
        { year: '2023', title: 'DUT Développement digital', school: 'Institut Spécialisé de Technologie' },
        { year: '2021', title: 'Licence fondamentale en gestion', school: 'Faculté Ibn Zohr' },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: 'Disponible pour échanger sur un poste Backend PHP / Symfony ou Full Stack, au Maroc ou à l’international.',
      labels: { email: 'Email', phone: 'Téléphone', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV' },
      todo: { phone: 'numéro de téléphone', linkedin: 'URL LinkedIn', github: 'URL GitHub', cv: 'lien vers le CV (PDF)' },
      cvLink: 'Télécharger (PDF)',
    },
    footer: 'Site léger, sans tracker, construit avec React et Vite.',
  },

  en: {
    meta: {
      title: 'Anass Kedada – Backend PHP / Symfony Developer',
      skip: 'Skip to content',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      langLabel: 'Language',
      todo: 'To fill in',
    },
    nav: [
      { id: 'projets', label: 'Projects' },
      { id: 'competences', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      name: 'Anass Kedada',
      title: 'Backend PHP / Symfony Developer – Full Stack',
      tagline:
        'I build custom business applications: e-commerce, multi-role back offices, REST APIs and payment integrations.',
      location: 'Rabat, Morocco',
      cv: 'Download my CV',
      contact: 'Contact me',
      cvTodo: 'link to the CV (PDF)',
      json: {
        role: 'Backend PHP / Symfony',
        focus: ['e-commerce', 'multi-role back offices', 'payments'],
        location: 'Rabat, Morocco',
        contract: 'Permanent · Picaxel · since 05/2024',
      },
    },
    about: {
      heading: 'Profile',
      text: 'PHP/Symfony developer with over 2 years of experience in a permanent role, specialised in custom business applications: e-commerce platforms, multi-role back offices, REST APIs and payment integrations (Stripe, CMI). Additional experience with WordPress/WooCommerce, PrestaShop and mobile development (Flutter, React Native). I turn complex business rules – B2B pricing, subscriptions, scheduling – into maintainable, high-performance applications.',
    },
    skills: {
      heading: 'Skills',
      primary: {
        name: 'Backend',
        items: [...skillItems.backend, 'Roles and permissions'],
      },
      ai: {
        name: 'AI & automation',
        intro:
          'Custom AI agents for any type of business: sales, calculations, phone calls and automated tasks.',
        items: [
          'Building AI agents',
          'AI calling agents (voice)',
          'Multi-agent systems',
          'Sales agents',
          'Calculation and quoting agents',
          'Scripts and automated tasks',
        ],
      },
      groups: [
        { name: 'Databases', items: ['MySQL', 'Data modelling', 'Migrations', 'Query optimisation'] },
        { name: 'Frontend', items: skillItems.frontend },
        { name: 'CMS / E-commerce', items: [...skillItems.cms.slice(0, 2), 'PrestaShop (custom modules)'] },
        { name: 'Mobile', items: skillItems.mobile },
        { name: 'Payments', items: skillItems.payment },
        { name: 'Performance', items: ['Caching', 'LiipImagineBundle', 'Cloudflare CDN'] },
        { name: 'Tools', items: skillItems.tools },
      ],
    },
    projects: {
      heading: 'Featured projects',
      intro: 'Six case studies: the business problem, what I built, and the result.',
      labels: {
        problem: 'Problem',
        built: 'What I built',
        result: 'Result',
        stack: 'Stack',
        screenshots: 'screenshots',
        link: 'project link',
        resultTodo: 'measurable result',
        view: 'Visit site',
        store: 'Google Play',
        maintenance: 'Site under maintenance – link coming soon',
        fullPage: 'View full page',
        private: 'Private client back office: screenshots cannot be shared.',
        stackTodo: 'tech stack',
      },
      items: [
        {
          key: 'golf',
          title: 'Golf Marketplace',
          type: 'E-commerce and subscription platform',
          stack: [...stacks.golf],
          problem:
            'Sell high-end golf products and manage club subscriptions, with several types of internal users.',
          built: [
            'Club subscription system, on both the user and admin side.',
            'Back office to manage products, pages, users and subscriptions.',
            'Granular roles and permissions (administrators, employees, managers), with a dedicated dashboard for each role.',
            'Image processing: automatic resizing, WebP conversion, caching.',
            'Cloudflare CDN and a dedicated media subdomain.',
          ],
          result: 'Google PageSpeed Insights score of around 90+.',
        },
        {
          key: 'rayonnage',
          title: 'Pro Occasion Rayonnage',
          type: '3D configurator and e-commerce for industrial racking',
          stack: ['PHP', 'Vite', '3D configurator'],
          problem:
            'Let customers and administrators design their own racking or mezzanine, and get the right price for every configuration.',
          built: [
            'Complete PHP / Vite solution: online shop, configurator and administration.',
            'Live 3D configurator: the customer or administrator designs their racking and mezzanines.',
            'Exact price calculation for every part that makes up the configuration.',
            'Online sale of the configured racking and mezzanines.',
          ],
          result: null,
        },
        {
          key: 'systema',
          title: 'Systema Vending',
          type: 'Maintenance of a vending machine fleet',
          stack: [...stacks.systema, 'Mapping and routing'],
          problem:
            'Organise maintenance for a network of more than 400 vending machines spread across regions.',
          built: [
            'Scheduling of technician interventions.',
            'Automatic calculation of intervention durations based on machine type, location and priority.',
          ],
          result: null,
        },
        {
          key: 'cochet',
          title: 'Cochet',
          type: 'B2B / B2C agricultural e-commerce',
          stack: [...stacks.cochet, 'Custom theme'],
          problem:
            'Sell agricultural machinery and equipment to individuals, resellers and large companies, each with different prices.',
          built: [
            'Pricing based on user role and region.',
            'Dynamic discounts by customer type (B2B, B2C, reseller).',
            'VAT rules by role and geographic zone.',
            'Conditional price visibility.',
            'Custom WooCommerce theme and a simplified checkout flow.',
          ],
          result: null,
        },
        {
          key: 'marbre',
          title: 'InterieurMarbre',
          type: 'B2B quote module for PrestaShop',
          stack: [...stacks.marbre, 'Custom module'],
          problem:
            'Let marble and building-material resellers quickly create custom quotes for their clients.',
          built: [
            'Quotes combining products, materials, services and delivery.',
            'Full workflow: creation, approval, tracking, price adjustment.',
            'Admin area centralising quotes by company and by product.',
          ],
          result: null,
        },
        {
          key: 'onyma',
          title: 'Onyma',
          type: 'Beauty salon booking (iOS and Android)',
          stack: [...stacks.onyma],
          problem: 'Connect clients and salons with reliable real-time booking.',
          built: [
            'Two apps: client and salon.',
            'Geolocated search up to 400 km, filters by city, date, service and keyword.',
            'Real-time availability and push notifications (Firestore, FCM).',
            'Scheduling: blocking unavailable slots, rescheduling, automatic reminder 45 min before the appointment.',
            'Manager dashboard: appointments, staff, services, revenue.',
            'Favourites, reviews and ratings. Bilingual FR / EN interface.',
          ],
          result: null,
        },
      ],
    },
    other: {
      heading: 'Other projects',
      items: [
        { key: 'freshmania', title: 'Freshmania', stack: 'Symfony API, React', text: 'Orders and reservations for a restaurant: dish customisation, CMI online payment, financial dashboard.', result: 'Google PageSpeed Insights score: 97' },
        { key: 'fryvy', title: 'Fryvy', stack: 'React Native, Symfony', text: 'Freelancer / client matching: Stripe payments, EasyAdmin back office.' },
        { key: 'transfertsways', title: 'Transfertsways', stack: 'Symfony', text: 'Booking of private transfers and excursions, back office for transport providers.', result: 'Google PageSpeed Insights score: 95' },
        { key: 'seelver', title: 'Seelver', stack: 'Symfony', text: 'Management of senior residences: rooms, beds, visits, stays, resident follow-up.' },
        { key: 'greensmile', title: 'GreenSmile', stack: 'Symfony', text: 'Agricultural events and blog: online booking, back office for administrators and organisers.' },
        { key: 'natea', title: 'Natea', stack: null, text: 'Website for a massage and wellness centre.', result: 'Google PageSpeed Insights score: 98' },
        { key: 'glowhaira', title: 'Glowhaira', stack: null, text: 'E-commerce shop for hair care products.' },
        { key: 'lessens', title: 'Les Sens de Marrakech', stack: null, text: 'E-commerce shop: skincare, fragrances, home and gifts.', result: 'Google PageSpeed Insights score: 92' },
        { key: 'botanica', title: 'Botanica Alma', stack: null, text: 'E-commerce shop for cosmetics and oils.' },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          dates: '05/2024 – present',
          role: 'Backend PHP / Symfony Developer',
          org: 'Picaxel (permanent)',
          text: 'Symfony business web applications, REST APIs, MySQL modelling, roles and permissions, performance optimisation, collaboration with the front-end team.',
        },
        {
          dates: '03/2024 – 05/2024',
          role: 'Web Developer Intern',
          org: 'TechNova Solutions',
          text: 'Features in HTML, CSS, JavaScript; REST API integration.',
        },
        {
          dates: '01/2023 – 03/2024',
          role: 'Mobile Developer Intern',
          org: 'BENOCA',
          text: 'Cross-platform Flutter apps, REST API integration.',
        },
      ],
    },
    education: {
      heading: 'Education',
      items: [
        { year: '2024', title: 'Professional Bachelor’s in Web and Mobile Development', school: 'Megacampus' },
        { year: '2023', title: 'DUT (two-year technical degree) in Digital Development', school: 'Institut Spécialisé de Technologie' },
        { year: '2021', title: 'Bachelor’s in Management', school: 'Faculté Ibn Zohr' },
      ],
    },
    contact: {
      heading: 'Contact',
      intro: 'Open to discussing Backend PHP / Symfony or Full-Stack roles, in Morocco or internationally.',
      labels: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV' },
      todo: { phone: 'phone number', linkedin: 'LinkedIn URL', github: 'GitHub URL', cv: 'link to the CV (PDF)' },
      cvLink: 'Download (PDF)',
    },
    footer: 'Lightweight, tracker-free site built with React and Vite.',
  },
};
