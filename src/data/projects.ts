// Para adicionar um projeto: copie um objeto abaixo, coloque a imagem em
// public/images/projects/ e ajuste os campos. Nenhum componente precisa mudar.
export type Project = {
  slug: string;
  highlight?: string; // destaque da solução, só com o que dá para confirmar no site
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  tech: string[]; // só tecnologias confirmadas; deixe [] se não souber
  highlights?: string[]; // usado no projeto em destaque
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "klivo",
    highlight: "Interface de acesso com identidade própria e painel dos módulos que o sistema propõe.",
    name: "Klivo — Sistema de gestão para clínicas odontológicas",
    category: "Aplicação web / SaaS odontológico",
    description:
      "Aplicação web para gestão de clínicas odontológicas, com acesso por e-mail e senha. A proposta reúne agenda, prontuário, odontograma e financeiro da clínica em um único lugar.",
    url: "https://saas-klivo-clinica-odontologica-f6s.vercel.app/",
    image: "/images/projects/klivo-login.png",
    alt: "Tela de acesso do Klivo, sistema de gestão de clínicas odontológicas, com formulário de login e os módulos do sistema",
    tech: [],
    highlights: ["Agendamento inteligente", "Prontuário digital", "Odontograma completo", "Financeiro simplificado"],
    featured: true,
  },
  {
    slug: "brain-and-body",
    highlight: "Navegação por seções e botão flutuante de WhatsApp sempre à vista.",
    name: "Brain and Body Consultoria",
    category: "Landing page comercial, treino personalizado",
    description:
      "Página comercial para consultoria de treino personalizado, com identidade escura e energética, navegação por seções (sobre, diferenciais, planos, como funciona e FAQ) e botão de contato por WhatsApp.",
    url: "https://brain-and-body-consultoria.vercel.app/",
    image: "/images/projects/brain-and-body.png",
    alt: "Landing page da Brain and Body Consultoria com título em vermelho sobre fundo preto e foto do personal trainer",
    tech: ["HTML5", "CSS3"],
  },
  {
    slug: "ana-caroline",
    highlight: "Botões de contato por WhatsApp e Instagram logo na primeira tela.",
    name: "Ana Caroline",
    category: "Landing page profissional, psicologia",
    description:
      "Landing page para psicóloga com tipografia serifada, foto em moldura em arco e seções de apresentação, formação, atendimentos e contato, com chamadas para WhatsApp e Instagram.",
    url: "https://ana-caroline-landing-page.vercel.app/",
    image: "/images/projects/ana-caroline.png",
    alt: "Landing page da psicóloga Ana Caroline Brito com título em serifa e foto da profissional em moldura em arco",
    tech: [],
  },
  {
    slug: "patricia-buchhorn",
    highlight: "Botão de agendamento fixo no menu e identificação profissional em destaque.",
    name: "Patrícia Buchhorn",
    category: "Landing page, psicologia clínica",
    description:
      "Site para psicóloga clínica com paleta rosada e vinho, informações organizadas em seções (sobre, como posso ajudar, abordagem e atendimento) e botão de agendamento sempre à vista.",
    url: "https://landing-page-patricia-buchhorn.vercel.app/",
    image: "/images/projects/patricia-buchhorn.png",
    alt: "Landing page da psicóloga clínica Patrícia Buchhorn em tons de rosa e vinho com foto da profissional",
    tech: [],
  },
  {
    slug: "espaco-psique",
    highlight: "Identidade visual construída a partir da logo, com botão de agendamento no menu.",
    name: "Espaço Psique Psicologia",
    category: "Site institucional, psicologia",
    description:
      "Site institucional de um espaço de psicologia, com identidade construída a partir da logo em borboleta, com paleta verde-azulada e navegação por espaço, profissionais, atendimentos, ambiente e dúvidas.",
    url: "https://espaco-psique-psicologia.vercel.app/",
    image: "/images/projects/espaco-psique.png",
    alt: "Landing page do Espaço Psique Psicologia com logo de borboleta verde-azulada e título em serifa",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    slug: "catalina-reyes",
    highlight: "Seções de tratamentos e trabalho, com botão de agendamento no menu.",
    name: "Dra. Catalina Reyes",
    category: "Landing page odontológica",
    description:
      "Site profissional para cirurgiã-dentista, com tons de areia e dourado, tipografia serifada e seções de apresentação, tratamentos, trabalho e contato.",
    url: "https://catalina-reyes-landing-page.vercel.app/",
    image: "/images/projects/catalina-reyes.png",
    alt: "Landing page da cirurgiã-dentista Dra. Catalina Reyes com título em serifa e foto no consultório",
    tech: [],
  },
];
