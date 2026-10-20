// Edite aqui: textos, contatos, serviços, processo e tecnologias.
export const site = {
  name: "Davi Santiago",
  role: "Web Developer",
  url: "https://portfolio-desenvolvedor-psi.vercel.app",
  repo: "https://github.com/Daviuser/portfolio-desenvolvedor",
  headline: "Ideias que ganham forma. Negócios que evoluem.",
  intro:
    "Desenvolvo soluções digitais modernas e personalizadas para empresas, profissionais e empreendedores que desejam fortalecer sua presença online e transformar suas ideias em projetos reais.",
  description:
    "Davi Santiago, Web Developer: sites profissionais, aplicações web e sistemas personalizados. Conheça os projetos e converse sobre a sua ideia.",

  contacts: {
    whatsapp: "5575987022496", // só dígitos com DDI e DDD
    github: "https://github.com/Daviuser",
    linkedin: "", // URL completa; vazio = oculto
    email: "", // vazio = oculto
  },
  whatsappMessage: "Olá! Conheci seu portfólio e gostaria de conversar sobre um projeto.",

  about: [
    "Desenvolvo soluções digitais com atenção ao design, à funcionalidade e às necessidades de cada negócio. Meu foco é transformar ideias em projetos modernos, responsivos e bem construídos, proporcionando uma experiência de qualidade em cada detalhe.",
    "Os projetos deste portfólio, de sites para profissionais de saúde a uma aplicação web de gestão, mostram como aplico essa abordagem na prática.",
  ],
  values: [
    { title: "Design com propósito", text: "Interfaces organizadas e com identidade própria, pensadas para o público de cada projeto." },
    { title: "Funcionalidade", text: "Botões, menus e fluxos que fazem o que prometem, em qualquer dispositivo." },
    { title: "Experiência do usuário", text: "Navegação clara para que o visitante encontre rápido o que procura." },
  ],

  // example = slug de um projeto real que ilustra o serviço (opcional)
  services: [
    {
      icon: "globe",
      title: "Sites profissionais e presença digital",
      text: "Sites institucionais que apresentam a sua marca com clareza em qualquer tela.",
      benefit: "Uma presença online profissional, fácil de acessar e de compartilhar.",
      example: "espaco-psique",
    },
    {
      icon: "megaphone",
      title: "Experiências digitais para empresas e profissionais",
      text: "Páginas pensadas para apresentar serviços e levar o visitante ao contato, com botões de WhatsApp e agendamento.",
      benefit: "Quem chega entende o que você faz e tem um caminho direto até você.",
      example: "catalina-reyes",
    },
    {
      icon: "app",
      title: "Aplicações web e sistemas personalizados",
      text: "Sistemas web desenhados de acordo com a rotina do negócio.",
      benefit: "Processos mais organizados em um só lugar.",
      example: "klivo",
    },
    {
      icon: "refresh",
      title: "Modernização de interfaces e projetos existentes",
      text: "Atualização visual e de usabilidade de sites e sistemas que já existem.",
      benefit: "Aparência atual e navegação mais simples, sem recomeçar do zero.",
    },
  ],

  process: [
    { title: "Conversa inicial", text: "Entendo as necessidades do seu projeto e do seu negócio." },
    { title: "Planejamento e proposta", text: "Planejo o escopo e defino a proposta, para termos clareza antes de começar." },
    { title: "Desenvolvimento e ajustes", text: "Construo o projeto com design e tecnologia, e ajustamos os detalhes juntos." },
    { title: "Entrega e publicação", text: "O projeto é entregue e publicado conforme o escopo acordado." },
  ],

  tech: [
    { group: "Desenvolvimento", items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { group: "Ferramentas e publicação", items: ["Git", "GitHub", "Vercel", "VS Code"] },
  ],
};

// Link do WhatsApp com a mensagem já codificada. Todos os botões usam este valor.
export const whatsappUrl = site.contacts.whatsapp
  ? `https://wa.me/${site.contacts.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";
