export type Lang = "en" | "pt"

const en = {
  nav: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    cta: "Let's Talk",
    ariaHome: "Anna Bengaly — home",
    ariaToggle: "Toggle navigation menu",
    ariaLang: "Switch to Portuguese",
  },
  hero: {
    imageAlt: "UI/UX Product Designer",
    description:
      "Crafting user-centred digital experiences that scale. Based in Rio de Janeiro — available for remote opportunities worldwide.",
  },
  featuredWork: {
    heading1: "Selected",
    heading2: "Works",
    statsText: "Projects featuring intentional design & technical precision",
    seeAll: "see all projects",
    seeAllSr: "(opens Behance in new tab)",
  },
  contact: {
    heading: "Want to\nwork together?",
    description:
      "Drop your email below or reach out directly to discuss your next big digital project.",
    placeholder: "YOUR EMAIL ADDRESS",
    inputLabel: "Your email address",
    send: "Send",
  },
  footer: {
    label: "UI/UX Product Designer",
    newTab: "(opens in new tab)",
  },
  projectCard: {
    featured: "Featured",
    viewOnBehance: "View on Behance",
    newTab: "(opens in new tab)",
    coverAlt: "project cover",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "Learn about Anna Bengaly — UX/UI Product Designer with a passion for research-driven, user-centred design.",
    label: "About",
    heading: "Designing with\npurpose.",
    bio: [
      "I'm Anna Bengaly, a UX/UI Product Designer based in Rio de Janeiro, Brazil, designing since 2019. Currently working as Senior UX Designer at Stefanini Group, I create digital products that put users first — combining research, strategy, and interface design to build scalable experiences.",
      "My process is grounded in empathy and evidence. I believe the best interfaces are invisible — they guide users effortlessly toward their goals without getting in the way.",
      "I'm available for remote full-time opportunities and open to collaborate on meaningful projects worldwide.",
    ],
    resumeBtn: "See full resumé",
    skillsLabel: "Skills",
    skillsHeading: "What I do.",
    skills: [
      {
        category: "Design",
        items: [
          "User Research",
          "Usability Testing",
          "User Flows",
          "Design Systems",
          "Accessibility (WCAG)",
          "Prototyping",
        ],
      },
      {
        category: "Tools",
        items: [
          "Figma",
          "Maze",
          "Miro",
          "Adobe XD",
          "Adobe Photoshop",
          "Figma Make",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Strategic Thinking",
          "Stakeholder Communication",
          "Workshop Facilitation",
          "Cross-functional Collaboration",
          "Fluent English",
        ],
      },
    ],
    experienceLabel: "Experience",
    experienceHeading: "Where I've been.",
    currentLabel: "Current",
    experience: [
      {
        role: "Senior UX Designer",
        company: "Usiminas · via Stefanini Group",
        period: "Nov 2024",
        current: true,
        bullets: [
          "Embedded at Usiminas, one of Brazil's largest steel companies, through Stefanini Group as consulting UX lead.",
          "Led user and stakeholder research to identify critical needs in corporate digital solutions.",
          "Planned and executed usability tests that improved interface intuitiveness and reduced development rework.",
          "Served as UX reference within product squads, ensuring alignment between user experience and business goals.",
        ],
      },
      {
        role: "UX Designer",
        company: "Aquarela Analytics",
        period: "Mar 2023 – Nov 2024",
        current: false,
        bullets: [
          "Designed innovative solutions for AI and Analytics projects, leading discovery, user interviews, and journey mapping.",
          "Applied UX research methods to create intuitive data dashboards, improving user adoption.",
          "Facilitated usability tests and collaborated closely with product and engineering teams.",
        ],
      },
      {
        role: "UX/UI Designer",
        company: "Mouts TI",
        period: "Jan 2022 – Feb 2023",
        current: false,
        bullets: [
          "Mapped user journeys, gathered requirements, and designed wireframes for B2B and B2C applications.",
          "Delivered UX/UI solutions that enhanced navigation and engagement across web and mobile products.",
        ],
      },
      {
        role: "Product Designer",
        company: "Octopus IC",
        period: "Jul 2021 – Feb 2023",
        current: false,
        bullets: [
          "End-to-end design for administrative and financial management platforms.",
          "Conducted research, prototyping, and iterative collaboration with stakeholders to align with operational workflows.",
        ],
      },
      {
        role: "UI/UX Designer",
        company: "Nuvem Tecnologia",
        period: "Feb 2021 – Jan 2022",
        current: false,
        bullets: [
          "Full UX/UI design lifecycle for desktop and mobile applications.",
          "Improved visual and interactive quality of digital products through Adobe XD prototypes.",
        ],
      },
      {
        role: "UX Designer",
        company: "Itzol.digital",
        period: "Dec 2019 – Feb 2021",
        current: false,
        bullets: [
          "Executed user research, journey mapping, and usability testing for web projects.",
          "Designed interfaces in Figma with a focus on usability and accessibility.",
        ],
      },
      {
        role: "UX Designer",
        company: "BlueBird & Co",
        period: "Jan 2019 – Nov 2019",
        current: false,
        bullets: [
          "Created interfaces for corporate websites and event hotsites.",
          "Developed interactive prototypes and supported research-driven design.",
        ],
      },
    ],
  },
  portfolio: {
    label: "Portfolio",
    heading: "All Work.",
  },
  projectDescriptions: {
    "nutri-track": "All-in-one fitness and nutrition app to track meals, workouts, and health goals.",
    "conecta-eventos": "Event management app connecting users to discover, organize, and attend events.",
    "smart-home": "Smart home app to control devices, automate routines, and monitor home systems.",
    "paisagismo-digital": "Digital landscaping platform to design, visualize, and plan outdoor spaces.",
    "virtual-med": "Telemedicine app enabling remote consultations, patient monitoring, and health tracking.",
    "fashi-on": "Fashion app for discovering trends, browsing outfits, and personalized styling.",
  },
}

const pt: typeof en = {
  nav: {
    home: "Início",
    about: "Sobre",
    portfolio: "Portfólio",
    cta: "Vamos Conversar",
    ariaHome: "Anna Bengaly — início",
    ariaToggle: "Abrir menu de navegação",
    ariaLang: "Mudar para inglês",
  },
  hero: {
    imageAlt: "Designer de Produto UX/UI",
    description:
      "Criando experiências digitais centradas no usuário que escalam. Com sede no Rio de Janeiro — disponível para oportunidades remotas em todo o mundo.",
  },
  featuredWork: {
    heading1: "Trabalhos",
    heading2: "Selecionados",
    statsText: "Projetos com design intencional e precisão técnica",
    seeAll: "ver todos os projetos",
    seeAllSr: "(abre o Behance em nova aba)",
  },
  contact: {
    heading: "Quer trabalhar\njuntos?",
    description:
      "Deixe seu e-mail abaixo ou entre em contato diretamente para discutir seu próximo grande projeto digital.",
    placeholder: "SEU ENDEREÇO DE E-MAIL",
    inputLabel: "Seu endereço de e-mail",
    send: "Enviar",
  },
  footer: {
    label: "Designer de Produto UX/UI",
    newTab: "(abre em nova aba)",
  },
  projectCard: {
    featured: "Destaque",
    viewOnBehance: "Ver no Behance",
    newTab: "(abre em nova aba)",
    coverAlt: "capa do projeto",
  },
  about: {
    metaTitle: "Sobre",
    metaDescription:
      "Conheça Anna Bengaly — Designer de Produto UX/UI com paixão por design centrado no usuário e orientado por pesquisa.",
    label: "Sobre",
    heading: "Projetando com\npropósito.",
    bio: [
      "Sou Anna Bengaly, Designer de Produto UX/UI com sede no Rio de Janeiro, Brasil, atuando desde 2019. Atualmente trabalhando como UX Designer Sênior no Stefanini Group, crio produtos digitais que colocam os usuários em primeiro lugar — combinando pesquisa, estratégia e design de interfaces para construir experiências escaláveis.",
      "Meu processo é fundamentado em empatia e evidências. Acredito que as melhores interfaces são invisíveis — elas guiam os usuários sem esforço em direção aos seus objetivos, sem criar obstáculos.",
      "Estou disponível para oportunidades remotas em tempo integral e aberta a colaborar em projetos significativos em todo o mundo.",
    ],
    resumeBtn: "Ver currículo completo",
    skillsLabel: "Habilidades",
    skillsHeading: "O que eu faço.",
    skills: [
      {
        category: "Design",
        items: [
          "Pesquisa com Usuários",
          "Testes de Usabilidade",
          "Fluxos de Usuário",
          "Sistemas de Design",
          "Acessibilidade (WCAG)",
          "Prototipagem",
        ],
      },
      {
        category: "Ferramentas",
        items: [
          "Figma",
          "Maze",
          "Miro",
          "Adobe XD",
          "Adobe Photoshop",
          "Figma Make",
        ],
      },
      {
        category: "Habilidades Interpessoais",
        items: [
          "Pensamento Estratégico",
          "Comunicação com Stakeholders",
          "Facilitação de Workshops",
          "Colaboração Multifuncional",
          "Inglês Fluente",
        ],
      },
    ],
    experienceLabel: "Experiência",
    experienceHeading: "Onde estive.",
    currentLabel: "Atual",
    experience: [
      {
        role: "UX Designer Sênior",
        company: "Usiminas · via Stefanini Group",
        period: "Nov 2024",
        current: true,
        bullets: [
          "Integrada à Usiminas, uma das maiores siderúrgicas do Brasil, via Stefanini Group como UX lead consultora.",
          "Liderou pesquisas com usuários e stakeholders para identificar necessidades críticas em soluções digitais corporativas.",
          "Planejou e executou testes de usabilidade que melhoraram a intuitividade das interfaces e reduziram o retrabalho no desenvolvimento.",
          "Atuou como referência de UX nos squads de produto, garantindo alinhamento entre a experiência do usuário e os objetivos de negócio.",
        ],
      },
      {
        role: "UX Designer",
        company: "Aquarela Analytics",
        period: "Mar 2023 – Nov 2024",
        current: false,
        bullets: [
          "Projetou soluções inovadoras para projetos de IA e Analytics, liderando discovery, entrevistas com usuários e mapeamento de jornadas.",
          "Aplicou métodos de pesquisa UX para criar dashboards de dados intuitivos, melhorando a adoção pelos usuários.",
          "Facilitou testes de usabilidade e colaborou estreitamente com equipes de produto e engenharia.",
        ],
      },
      {
        role: "Designer UX/UI",
        company: "Mouts TI",
        period: "Jan 2022 – Fev 2023",
        current: false,
        bullets: [
          "Mapeou jornadas de usuários, levantou requisitos e projetou wireframes para aplicações B2B e B2C.",
          "Entregou soluções UX/UI que melhoraram a navegação e o engajamento em produtos web e mobile.",
        ],
      },
      {
        role: "Product Designer",
        company: "Octopus IC",
        period: "Jul 2021 – Fev 2023",
        current: false,
        bullets: [
          "Design end-to-end para plataformas de gestão administrativa e financeira.",
          "Conduziu pesquisas, prototipação e colaboração iterativa com stakeholders para alinhar com os fluxos operacionais.",
        ],
      },
      {
        role: "Designer UI/UX",
        company: "Nuvem Tecnologia",
        period: "Fev 2021 – Jan 2022",
        current: false,
        bullets: [
          "Ciclo completo de design UX/UI para aplicações desktop e mobile.",
          "Melhorou a qualidade visual e interativa dos produtos digitais por meio de protótipos no Adobe XD.",
        ],
      },
      {
        role: "UX Designer",
        company: "Itzol.digital",
        period: "Dez 2019 – Fev 2021",
        current: false,
        bullets: [
          "Executou pesquisa com usuários, mapeamento de jornadas e testes de usabilidade para projetos web.",
          "Projetou interfaces no Figma com foco em usabilidade e acessibilidade.",
        ],
      },
      {
        role: "UX Designer",
        company: "BlueBird & Co",
        period: "Jan 2019 – Nov 2019",
        current: false,
        bullets: [
          "Criou interfaces para sites corporativos e hotsites de eventos.",
          "Desenvolveu protótipos interativos e apoiou o design orientado por pesquisa.",
        ],
      },
    ],
  },
  portfolio: {
    label: "Portfólio",
    heading: "Todos os Trabalhos.",
  },
  projectDescriptions: {
    "nutri-track": "Aplicativo all-in-one de fitness e nutrição para registrar refeições, treinos e metas de saúde.",
    "conecta-eventos": "Aplicativo de gestão de eventos que conecta usuários a descobrir, organizar e participar de eventos.",
    "smart-home": "Aplicativo de casa inteligente para controlar dispositivos, automatizar rotinas e monitorar sistemas residenciais.",
    "paisagismo-digital": "Plataforma de paisagismo digital para projetar, visualizar e planejar espaços externos.",
    "virtual-med": "Aplicativo de telemedicina para consultas remotas, monitoramento de pacientes e acompanhamento de saúde.",
    "fashi-on": "Aplicativo de moda para descobrir tendências, explorar looks e receber sugestões de estilo personalizadas.",
  },
}

export const translations: Record<Lang, typeof en> = { en, pt }
export type Translations = typeof en
