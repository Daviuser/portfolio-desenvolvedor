// Conteúdo institucional e canais da VIVUS BUSINESS.
export const site = {
  name: "VIVUS BUSINESS",
  headline: "Sua empresa merece uma presença digital à altura do seu potencial.",
  intro:
    "Desenvolvemos sites e sistemas personalizados que fortalecem sua marca, atraem clientes, ampliam oportunidades e tornam sua operação mais eficiente.",
  description:
    "A VIVUS BUSINESS desenvolve sites profissionais, landing pages, sistemas personalizados e automações para empresas que querem crescer com tecnologia.",
  contacts: {
    whatsapp: "5575987022496", // Número comercial existente, só dígitos com DDI e DDD.
  },
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento para uma solução digital.",
  benefits: [
    { title: "Mais oportunidades", text: "Apresente seus produtos e serviços a novos clientes que procuram soluções como a sua." },
    { title: "Mais credibilidade", text: "Uma presença digital profissional fortalece a imagem da sua empresa e transmite confiança." },
    { title: "Sempre disponível", text: "Seu site apresenta seu negócio e suas informações a qualquer hora do dia." },
    { title: "Mais produtividade", text: "Sistemas personalizados organizam informações e reduzem tarefas manuais." },
    { title: "Mais alcance", text: "Tenha um espaço próprio na internet além dos canais das redes sociais." },
    { title: "Marca valorizada", text: "Uma experiência digital bem construída ajuda seu negócio a se destacar." },
  ],
  services: [
    { icon: "globe", title: "Sites profissionais", text: "Sites modernos e responsivos para apresentar empresas, serviços e produtos com clareza." },
    { icon: "megaphone", title: "Landing pages", text: "Páginas estratégicas que conduzem visitantes a entrar em contato e conhecer sua oferta." },
    { icon: "app", title: "Sistemas personalizados", text: "Soluções digitais desenhadas para as necessidades e a rotina da sua empresa." },
    { icon: "layers", title: "Plataformas web", text: "Aplicações completas para digitalizar operações e organizar informações em um só lugar." },
    { icon: "refresh", title: "Automação de processos", text: "Tecnologia para simplificar atividades repetitivas e dar mais fluidez ao trabalho." },
  ],
  process: [
    { title: "Conversamos sobre seu negócio", text: "Entendemos suas necessidades, seus objetivos e o que você quer alcançar." },
    { title: "Planejamos a solução", text: "Definimos a estrutura, as funcionalidades e a direção visual do projeto." },
    { title: "Desenvolvemos seu projeto", text: "Transformamos o planejamento em uma solução digital moderna e funcional." },
    { title: "Entregamos sua solução", text: "Após os testes e a sua aprovação, entregamos o projeto conforme o escopo combinado." },
  ],
  about: "Transformamos necessidades empresariais em soluções digitais inteligentes. Combinamos tecnologia, design e estratégia para ajudar empresas a conquistar oportunidades, fortalecer sua presença no mercado e trabalhar melhor.",
};

export const whatsappUrl = site.contacts.whatsapp
  ? `https://wa.me/${site.contacts.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";
