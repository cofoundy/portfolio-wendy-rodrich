export type Lang = "en" | "es";

const sharedVisuals = {
  name: "Wendy Rodrich",
  accentColor: "#7C6A8F",
  highlightColor: "#C9A96E",
  social: {
    email: "Wenrodrich@outlook.com",
    linkedin: "https://www.linkedin.com/in/wenrodrich",
  },
};

const en = {
  ...sharedVisuals,
  title: "Digital Marketing & Ecommerce Strategist",
  description:
    "Wendy Rodrich - Digital Marketing Strategist specializing in paid ads, ecommerce growth, and AI-driven marketing. 17+ years of business experience across beauty, wellness, and luxury brands.",

  stats: [
    { value: "17+", label: "Years in Business" },
    { value: "40%", label: "Client Growth" },
    { value: "DMI", label: "AI Marketing Certified" },
  ],

  tagline:
    "Helping brands scale through AI-driven marketing strategy, paid advertising, and ecommerce growth.",
  location:
    "Based in Florida, working with clients across the U.S. and Latin America.",
  ctaText: "Looking for a marketing strategist? Let's talk about growing your brand.",
  shopCta: "Shop IllaDerm",
  journalCta: "Journal",

  aboutMe:
    "Wendy Rodrich is a Digital Marketing Strategist and entrepreneur with over 17 years of experience in business development, beauty, wellness, and luxury industries.\n\nShe specializes in AI-driven marketing strategy, paid advertising (Google Ads and Meta Ads), Shopify ecommerce growth, and CRM automation using platforms such as HubSpot.\n\nAs the founder of <a href=\"https://illadermbeauty.com\" target=\"_blank\"><strong>IllaDerm Skin Corp</strong></a> and <strong>Go & Flirt Spa</strong> in South Florida, she has implemented digital marketing campaigns that increased client acquisition and supported online sales growth through targeted advertising and customer retention strategies.",

  heroSubtext:
    "Digital Marketing Strategist with 17+ years of business experience. Certified in AI Marketing (DMI & Wharton). Specialized in Google Ads, Meta Ads, Shopify, HubSpot CRM, and ecommerce growth strategies.",

  highlights: [
    "Paid Ads Management (Google & Meta)",
    "Ecommerce Growth Strategy (Shopify)",
    "Email Marketing & Automation",
    "CRM Setup & Customer Journeys (HubSpot)",
    "Conversion Optimization & Retargeting",
    "AI-Driven Marketing Strategy",
  ],

  skills: [
    "Google Ads",
    "Meta Ads (Facebook & Instagram)",
    "Shopify Ecommerce",
    "Email Marketing & Automation",
    "HubSpot CRM",
    "Marketing Analytics",
    "Conversion Optimization",
    "Retargeting & Remarketing",
  ],

  caseStudies: [
    {
      name: "Spa Client Acquisition Campaign",
      objective: "Grow the spa client base and increase repeat bookings.",
      strategy:
        "Implemented targeted Google Ads and Meta Ads campaigns combined with referral programs and email marketing.",
      results: [
        "Increased client base by 40%",
        "Increased repeat bookings through referral programs",
        "Improved customer retention through automated email campaigns",
      ],
    },
    {
      name: "IllaDerm Ecommerce Marketing Strategy",
      objective:
        "Develop a digital marketing strategy for a skincare ecommerce brand.",
      strategy:
        "Built a Shopify ecommerce funnel and implemented Meta Ads retargeting campaigns to drive repeat purchases.",
      results: [
        "Created a structured ecommerce sales funnel",
        "Implemented retargeting campaigns for returning customers",
        "Strengthened brand positioning for online growth",
      ],
    },
    {
      name: "AUREX Jewelry — Digital Launch Strategy",
      objective:
        "Develop the go-to-market digital strategy for a luxury ecommerce jewelry brand.",
      strategy:
        "Designed Shopify ecommerce store structure, strategy, and customer acquisition funnel.",
      results: [
        "Built ecommerce launch strategy",
        "Designed paid advertising structure",
        "Developed CRM and customer journey framework",
      ],
    },
  ],

  projects: [
    {
      name: "IllaDerm Ecommerce Marketing Strategy",
      description:
        "Built and executed the digital marketing strategy for a skincare ecommerce brand — including brand positioning, ecommerce funnel optimization, and retargeting campaigns that drive repeat purchases.",
      link: "https://illadermbeauty.com",
      skills: ["Ecommerce", "Meta Ads", "Retargeting"],
    },
    {
      name: "Spa Client Acquisition Campaign",
      description:
        "Designed and managed digital campaigns that increased the spa client base by 40%. Combined social media ads, referral programs, and email marketing to drive bookings and retention.",
      link: "https://goandflirt.com",
      skills: ["Google Ads", "Email Marketing", "Client Retention"],
    },
    {
      name: "AUREX Jewelry — Digital Launch Strategy",
      description:
        "Developing the go-to-market digital strategy for a luxury jewelry ecommerce brand — including Shopify store setup, paid ads plan, and customer journey design.",
      link: "",
      skills: ["Shopify", "Launch Strategy", "CRM"],
    },
  ],

  experience: [
    {
      company: "IllaDerm Skin Corp",
      title: "Founder & Marketing Strategist",
      dateRange: "2024 - Present",
      bullets: [
        "Built ecommerce marketing strategy including brand positioning, digital ads, and retargeting funnels",
        "Managing Google Ads and Meta Ads campaigns driving online sales growth",
        "Implementing HubSpot CRM for customer journey tracking and email automation",
      ],
    },
    {
      company: "Go & Flirt Spa",
      title: "Owner & Digital Marketing Lead",
      dateRange: "2016 - Present",
      bullets: [
        "Increased client base by 40% through targeted digital marketing campaigns",
        "Developed customer retention strategy increasing repeat visits through email marketing and loyalty programs",
        "Managing paid ads (Meta & Google), social media content, and referral marketing",
      ],
    },
    {
      company: "AUREX Jewelry",
      title: "Founder & Ecommerce Strategist",
      dateRange: "2025 - Present",
      bullets: [
        "Designing digital-first go-to-market strategy with Shopify ecommerce platform",
        "Planning paid ads campaigns and customer acquisition funnel for launch",
      ],
    },
  ],

  education: [
    {
      school: "Digital Marketing Institute",
      degree:
        "DMI Expert — AI in Digital Marketing & Business (Expected 2026)",
      dateRange: "2026",
      achievements: [
        "Advanced certification in AI-driven digital marketing strategy",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "AI for Marketing (Certificate)",
      dateRange: "2025",
      achievements: [
        "AI applications in marketing strategy and analytics",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "AI in Finance (Certificate)",
      dateRange: "2025",
      achievements: [
        "AI applications in financial strategy and business growth",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "AI in People Management (Certificate)",
      dateRange: "2025",
      achievements: [
        "AI applications in team management and HR strategy",
      ],
    },
    {
      school: "Professional Licenses",
      degree:
        "Licensed Medical Esthetician | Permanent Makeup Artist | Certified Phlebotomist",
      dateRange: "Florida, USA",
      achievements: ["Body Specialist", "Nail Technician"],
    },
  ],

  ui: {
    nav: {
      about: "About",
      caseStudies: "Case Studies",
      ventures: "Ventures",
      experience: "Experience",
      education: "Education",
      journal: "Journal",
    },
    aboutTitle: "About Me",
    expertise: "Expertise",
    highlightsTitle: "Highlights",
    caseStudiesTitle: "Marketing Results & Case Studies",
    cs: { objective: "Objective", strategy: "Strategy", results: "Results" },
    venturesTitle: "Ventures",
    viewProject: "View Project",
    experienceTitle: "Experience",
    educationTitle: "Education & Certifications",
    rights: "All rights reserved.",
    langSwitch: "ES",
    langSwitchAria: "Cambiar a español",
  },
};

const es: typeof en = {
  ...sharedVisuals,
  title: "Estratega de Marketing Digital y Ecommerce",
  description:
    "Wendy Rodrich - Estratega de Marketing Digital especializada en publicidad paga, crecimiento de ecommerce y marketing impulsado por IA. Más de 17 años de experiencia en belleza, wellness y marcas de lujo.",

  stats: [
    { value: "17+", label: "Años en Negocios" },
    { value: "40%", label: "Crecimiento de Clientes" },
    { value: "DMI", label: "Certificada en IA" },
  ],

  tagline:
    "Ayudo a marcas a escalar con estrategia de marketing impulsada por IA, publicidad paga y crecimiento de ecommerce.",
  location:
    "Radicada en Florida, trabajando con clientes en EE.UU. y Latinoamérica.",
  ctaText:
    "¿Buscas una estratega de marketing? Hablemos sobre cómo hacer crecer tu marca.",
  shopCta: "Visita IllaDerm",
  journalCta: "Blog",

  aboutMe:
    "Wendy Rodrich es Estratega de Marketing Digital y emprendedora con más de 17 años de experiencia en desarrollo de negocios, belleza, wellness y lujo.\n\nSe especializa en estrategia de marketing impulsada por IA, publicidad paga (Google Ads y Meta Ads), crecimiento de ecommerce en Shopify y automatización de CRM con plataformas como HubSpot.\n\nComo fundadora de <a href=\"https://illadermbeauty.com\" target=\"_blank\"><strong>IllaDerm Skin Corp</strong></a> y <strong>Go & Flirt Spa</strong> en el sur de Florida, ha implementado campañas de marketing digital que aumentaron la adquisición de clientes y potenciaron las ventas online mediante publicidad segmentada y estrategias de retención.",

  heroSubtext:
    "Estratega de Marketing Digital con más de 17 años de experiencia empresarial. Certificada en AI Marketing (DMI y Wharton). Especializada en Google Ads, Meta Ads, Shopify, HubSpot CRM y estrategias de crecimiento de ecommerce.",

  highlights: [
    "Gestión de Publicidad Paga (Google y Meta)",
    "Estrategia de Crecimiento Ecommerce (Shopify)",
    "Email Marketing y Automatización",
    "Configuración de CRM y Customer Journey (HubSpot)",
    "Optimización de Conversión y Retargeting",
    "Estrategia de Marketing Impulsada por IA",
  ],

  skills: [
    "Google Ads",
    "Meta Ads (Facebook e Instagram)",
    "Ecommerce Shopify",
    "Email Marketing y Automatización",
    "HubSpot CRM",
    "Analítica de Marketing",
    "Optimización de Conversión",
    "Retargeting y Remarketing",
  ],

  caseStudies: [
    {
      name: "Campaña de Adquisición de Clientes para Spa",
      objective:
        "Hacer crecer la base de clientes del spa y aumentar las reservas recurrentes.",
      strategy:
        "Implementé campañas segmentadas de Google Ads y Meta Ads combinadas con programas de referidos y email marketing.",
      results: [
        "Aumento del 40% en la base de clientes",
        "Incremento de reservas recurrentes mediante programas de referidos",
        "Mejora en la retención de clientes con campañas automatizadas de email",
      ],
    },
    {
      name: "Estrategia de Marketing Ecommerce para IllaDerm",
      objective:
        "Desarrollar una estrategia de marketing digital para una marca de skincare en ecommerce.",
      strategy:
        "Construí un embudo de ecommerce en Shopify e implementé campañas de retargeting en Meta Ads para impulsar compras recurrentes.",
      results: [
        "Creación de un embudo de ventas ecommerce estructurado",
        "Implementación de campañas de retargeting para clientes recurrentes",
        "Fortalecimiento del posicionamiento de marca para crecimiento online",
      ],
    },
    {
      name: "AUREX Jewelry — Estrategia de Lanzamiento Digital",
      objective:
        "Desarrollar la estrategia digital go-to-market para una marca de joyería de lujo en ecommerce.",
      strategy:
        "Diseñé la estructura de la tienda Shopify, la estrategia y el embudo de adquisición de clientes.",
      results: [
        "Construcción de la estrategia de lanzamiento ecommerce",
        "Diseño de la estructura de publicidad paga",
        "Desarrollo del framework de CRM y customer journey",
      ],
    },
  ],

  projects: [
    {
      name: "Estrategia de Marketing Ecommerce IllaDerm",
      description:
        "Desarrollé y ejecuté la estrategia de marketing digital para una marca de skincare — posicionamiento de marca, optimización del embudo ecommerce y campañas de retargeting que impulsan compras recurrentes.",
      link: "https://illadermbeauty.com",
      skills: ["Ecommerce", "Meta Ads", "Retargeting"],
    },
    {
      name: "Campaña de Adquisición para Spa",
      description:
        "Diseñé y gestioné campañas digitales que aumentaron en 40% la base de clientes del spa. Combiné anuncios en redes sociales, programas de referidos y email marketing para impulsar reservas y retención.",
      link: "https://goandflirt.com",
      skills: ["Google Ads", "Email Marketing", "Retención de Clientes"],
    },
    {
      name: "AUREX Jewelry — Estrategia de Lanzamiento Digital",
      description:
        "Desarrollando la estrategia digital go-to-market para una marca de joyería de lujo en ecommerce — configuración de la tienda Shopify, plan de publicidad paga y diseño del customer journey.",
      link: "",
      skills: ["Shopify", "Estrategia de Lanzamiento", "CRM"],
    },
  ],

  experience: [
    {
      company: "IllaDerm Skin Corp",
      title: "Fundadora y Estratega de Marketing",
      dateRange: "2024 - Presente",
      bullets: [
        "Construí la estrategia de marketing ecommerce: posicionamiento de marca, anuncios digitales y embudos de retargeting",
        "Gestión de campañas de Google Ads y Meta Ads que impulsan el crecimiento de ventas online",
        "Implementación de HubSpot CRM para seguimiento del customer journey y automatización de email",
      ],
    },
    {
      company: "Go & Flirt Spa",
      title: "Propietaria y Líder de Marketing Digital",
      dateRange: "2016 - Presente",
      bullets: [
        "Aumenté en 40% la base de clientes con campañas de marketing digital segmentadas",
        "Desarrollé una estrategia de retención que incrementó las visitas recurrentes mediante email marketing y programas de fidelización",
        "Gestión de publicidad paga (Meta y Google), contenido en redes sociales y marketing de referidos",
      ],
    },
    {
      company: "AUREX Jewelry",
      title: "Fundadora y Estratega de Ecommerce",
      dateRange: "2025 - Presente",
      bullets: [
        "Diseño de estrategia digital-first go-to-market con la plataforma de ecommerce Shopify",
        "Planificación de campañas de publicidad paga y embudo de adquisición para el lanzamiento",
      ],
    },
  ],

  education: [
    {
      school: "Digital Marketing Institute",
      degree:
        "DMI Expert — IA en Marketing Digital y Negocios (Esperado 2026)",
      dateRange: "2026",
      achievements: [
        "Certificación avanzada en estrategia de marketing digital con IA",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "IA para Marketing (Certificado)",
      dateRange: "2025",
      achievements: [
        "Aplicaciones de IA en estrategia de marketing y analítica",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "IA en Finanzas (Certificado)",
      dateRange: "2025",
      achievements: [
        "Aplicaciones de IA en estrategia financiera y crecimiento empresarial",
      ],
    },
    {
      school: "University of Pennsylvania (Wharton)",
      degree: "IA en Gestión de Personas (Certificado)",
      dateRange: "2025",
      achievements: [
        "Aplicaciones de IA en gestión de equipos y estrategia de RR.HH.",
      ],
    },
    {
      school: "Licencias Profesionales",
      degree:
        "Esteticista Médica Certificada | Artista de Maquillaje Permanente | Flebotomista Certificada",
      dateRange: "Florida, EE.UU.",
      achievements: ["Especialista Corporal", "Técnica en Uñas"],
    },
  ],

  ui: {
    nav: {
      about: "Sobre Mí",
      caseStudies: "Casos de Estudio",
      ventures: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      journal: "Blog",
    },
    aboutTitle: "Sobre Mí",
    expertise: "Expertise",
    highlightsTitle: "Destacados",
    caseStudiesTitle: "Resultados de Marketing y Casos de Estudio",
    cs: { objective: "Objetivo", strategy: "Estrategia", results: "Resultados" },
    venturesTitle: "Proyectos",
    viewProject: "Ver Proyecto",
    experienceTitle: "Experiencia",
    educationTitle: "Educación y Certificaciones",
    rights: "Todos los derechos reservados.",
    langSwitch: "EN",
    langSwitchAria: "Switch to English",
  },
};

export const configs = { en, es };
export const siteConfig = en;
export type SiteConfig = typeof en;
