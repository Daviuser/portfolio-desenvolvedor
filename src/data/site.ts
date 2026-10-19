// Edite aqui: nome, textos, contatos e tecnologias. Nada além deste arquivo precisa mudar.
export const site = {
  name: "Davi Santiago",
  role: "Desenvolvedor Web",
  url: "https://portfolio-desenvolvedor-psi.vercel.app",
  repo: "https://github.com/Daviuser/portfolio-desenvolvedor",
  headline: "Transformando ideias em experiências digitais.",
  intro:
    "Crio landing pages, sites profissionais e aplicações web modernos e responsivos, com atenção à experiência do usuário e à qualidade visual. Aberto a oportunidades de emprego em TI e a novos projetos.",
  description:
    "Davi Santiago, desenvolvedor web: landing pages, sites profissionais e aplicações web responsivas. Veja os projetos publicados e entre em contato.",

  // Preencha somente com dados reais. Campos vazios não aparecem no site.
  contacts: {
    whatsapp: "5575987022496", // só dígitos com DDI e DDD
    github: "https://github.com/Daviuser", // perfil pessoal
    linkedin: "", // URL completa
    email: "", // Ex.: contato@seudominio.com
  },

  whatsappMessage: "Olá, Davi! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional ou um projeto.",

  about: [
    "Sou Davi Santiago, desenvolvedor web. Crio landing pages, sites profissionais e aplicações web com foco em interfaces modernas, responsivas e fáceis de usar.",
    "Os projetos deste portfólio mostram esse trabalho na prática: sites para profissionais de saúde e bem-estar, uma página comercial para o segmento fitness e o Klivo, uma aplicação web para gestão de clínicas odontológicas. Em todos, cuido da organização visual, da funcionalidade e da experiência de quem acessa.",
    "Tenho interesse em trabalhar com empresas, profissionais autônomos e pequenos negócios, e estou aberto a oportunidades de emprego na área de TI.",
  ],
  values: [
    { title: "Atenção aos detalhes", text: "Espaçamento, tipografia e microinterações pensados em cada projeto." },
    { title: "Compromisso com a qualidade", text: "Sites responsivos, acessíveis e publicados prontos para uso." },
    { title: "Aprendizado contínuo", text: "Interesse constante por tecnologia e novas formas de resolver problemas." },
  ],

  // Confirme esta lista. Sem níveis de proficiência de propósito.
  tech: [
    { group: "Desenvolvimento", items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { group: "Ferramentas e publicação", items: ["Git", "GitHub", "Vercel", "VS Code"] },
  ],
};

// Link do WhatsApp com a mensagem inicial já codificada. Todos os botões usam este valor.
export const whatsappUrl = site.contacts.whatsapp
  ? `https://wa.me/${site.contacts.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";
