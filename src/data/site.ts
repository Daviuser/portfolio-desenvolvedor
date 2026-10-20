// Edite aqui: textos, contatos, serviços, processo e tecnologias.
export const site = {
  name: "Davi Santiago",
  role: "Desenvolvedor Web",
  url: "https://portfolio-desenvolvedor-psi.vercel.app",
  repo: "https://github.com/Daviuser/portfolio-desenvolvedor",
  headline: "Soluções digitais sob medida para o seu negócio.",
  intro:
    "Desenvolvo sites, landing pages e aplicações web personalizadas para empresas, profissionais e empreendedores que querem fortalecer a presença online e organizar seus processos.",
  description:
    "Davi Santiago, desenvolvedor web independente: sites profissionais, landing pages e aplicações web personalizadas e responsivas. Veja os projetos publicados e peça um orçamento.",

  contacts: {
    whatsapp: "5575987022496", // só dígitos com DDI e DDD
    github: "https://github.com/Daviuser",
    linkedin: "", // URL completa; vazio = oculto
    email: "", // vazio = oculto
  },
  whatsappMessage: "Olá, Davi! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional ou um projeto.",

  about: [
    "Sou Davi Santiago, desenvolvedor web independente. Desenvolvo soluções digitais modernas e personalizadas para empresas, profissionais e empreendedores que desejam fortalecer a presença online, otimizar processos e expandir seus negócios.",
    "Meu foco é unir design, tecnologia e funcionalidade para transformar ideias em projetos digitais eficientes, responsivos e alinhados às necessidades de cada cliente. Os projetos deste portfólio, de sites para profissionais de saúde a uma aplicação web de gestão, mostram como aplico essa abordagem na prática.",
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
      title: "Landing pages para divulgar serviços",
      text: "Páginas focadas em apresentar um serviço e levar o visitante ao contato, com botões de WhatsApp e agendamento.",
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
      title: "Modernização de interfaces",
      text: "Atualização visual e de usabilidade de sites e sistemas que já existem.",
      benefit: "Aparência atual e navegação mais simples, sem recomeçar do zero.",
    },
  ],

  process: [
    { title: "Conversa inicial", text: "Você conta a sua ideia e eu faço perguntas para entender a necessidade do negócio." },
    { title: "Proposta e escopo", text: "Defino o que será feito e como, para que a gente tenha clareza antes de começar." },
    { title: "Desenvolvimento e ajustes", text: "Construo o projeto com design e tecnologia, e ajustamos os detalhes juntos." },
    { title: "Entrega", text: "O projeto é finalizado e publicado, pronto para uso." },
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
