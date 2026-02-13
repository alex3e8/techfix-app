// Services configuration - Single source of truth
export const servicesConfig = {
  name: "TechFix",
  fullName: "TechFix Suporte Técnico Remoto",
  price: 50,
  currency: "R$",
  duration: "30min a 1h",
  serviceType: "Atendimento Remoto",
  remoteTool: "AnyDesk",
};

export const servicesList = [
  {
    id: "software-install",
    title: "Instalação de Softwares",
    description:
      "Instalação e configuração de programas, drivers e aplicativos conforme sua necessidade.",
    longDescription:
      "Precisa de um programa específico? Instalamos e configuramos softwares variados, desde pacotes office até ferramentas profissionais.",
    icon: "💿",
    color: "blue",
    features: [
      "Instalação de programas solicitados",
      "Configuração inicial personalizada",
      "Atualização de drivers",
      "Remoção de programas conflitantes",
    ],
  },
  {
    id: "virus-removal",
    title: "Verificação e Remoção de Vírus",
    description:
      "Varredura completa contra malware, remoção de ameaças e recuperação do sistema.",
    longDescription:
      "Eliminamos vírus, malwares, ransomwares e outras ameaças que comprometem seu computador.",
    icon: "🛡️",
    color: "red",
    features: [
      "Varredura completa do sistema",
      "Remoção de programas maliciosos",
      "Limpeza de extensões indesejadas",
      "Recuperação de configurações alteradas",
    ],
  },
  {
    id: "performance-analysis",
    title: "Análise de Desempenho",
    description:
      "Diagnóstico completo para identificar e resolver problemas de lentidão no PC ou notebook.",
    longDescription:
      "Seu computador está lento? Descobrimos o motivo e aplicamos as correções necessárias.",
    icon: "📊",
    color: "green",
    features: [
      "Avaliação do sistema operacional",
      "Identificação de gargalos",
      "Otimização de inicialização",
      "Análise de hardware",
    ],
  },
  {
    id: "file-organization",
    title: "Organização de Arquivos",
    description:
      "Limpeza e organização de documentos, backups e otimização de espaço.",
    longDescription:
      "Colocamos ordem nos seus arquivos, eliminando duplicatas e organizando por categorias.",
    icon: "📁",
    color: "purple",
    features: [
      "Limpeza de arquivos temporários",
      "Organização de documentos",
      "Identificação de duplicatas",
      "Configuração básica de backup",
    ],
  },
];

export const servicePackages = [
  {
    id: "single-service",
    name: "Atendimento Avulso",
    price: 50,
    duration: "30min - 1h",
    description: "Ideal para problemas pontuais ou serviços específicos",
    features: [
      "Diagnóstico inicial incluso",
      "Atendimento remoto via AnyDesk",
      "Serviço contratado realizado",
      "Orientações finais",
    ],
  },
  {
    id: "combo-package",
    name: "Pacote Completo",
    price: 90,
    duration: "1h - 2h",
    description: "Combinação de serviços com desconto especial",
    features: [
      "Análise completa de desempenho",
      "Remoção de vírus e malwares",
      "Instalação de softwares (até 3)",
      "Organização completa de arquivos",
    ],
    note: "Economize R$10 em relação aos serviços avulsos",
  },
];

// How it works steps
export const howItWorks = [
  {
    icon: "📝",
    title: "Descreva o Problema",
    description: "Conte-nos o que precisa ser feito no seu computador",
    details: [
      "Selecione o serviço desejado",
      "Descreva sua necessidade",
      "Agende o melhor horário",
    ],
  },
  {
    icon: "🖥️",
    title: "Conexão Remota",
    description: "Conectamos via AnyDesk para iniciar o atendimento",
    details: [
      "Você recebe o link do AnyDesk",
      "Autoriza o acesso remoto",
      "Acompanhe em tempo real",
    ],
  },
  {
    icon: "✅",
    title: "Serviço Realizado",
    description: "Executamos o serviço e finalizamos com orientações",
    details: [
      "Realizamos o serviço contratado",
      "Explicamos o que foi feito",
      "Garantia de satisfação",
    ],
  },
];

// FAQs specific to remote services
export const serviceFAQs = [
  {
    question: "Como funciona o atendimento remoto?",
    answer:
      "Você agenda um horário, instala o AnyDesk (gratuito) e nos fornece o código de acesso. Conectamos ao seu computador e realizamos o serviço enquanto você acompanha tudo pela tela.",
  },
  {
    question: "É seguro fornecer acesso remoto?",
    answer:
      "Sim! A conexão é criptografada e você controla o acesso. A qualquer momento pode encerrar a sessão. Além disso, nossa equipe é treinada e segue rigorosos protocolos de segurança.",
  },
  {
    question: "O que está incluso no valor de R$50?",
    answer:
      "O valor cobre o diagnóstico inicial e o serviço contratado, com duração de 30 minutos a 1 hora. Se for necessário mais tempo, avisamos antes e apresentamos opções.",
  },
  {
    question: "E se o problema não for resolvido?",
    answer:
      "Nosso compromisso é com sua satisfação. Se o problema persistir dentro do escopo do serviço contratado, realizamos nova tentativa sem custo adicional em até 7 dias.",
  },
];

// Stats for homepage
export const stats = [
  {
    value: "500+",
    label: "Atendimentos Realizados",
    description: "Clientes satisfeitos",
  },
  {
    value: "98%",
    label: "Problemas Resolvidos",
    description: "Taxa de sucesso",
  },
  {
    value: "30min",
    label: "Tempo Médio",
    description: "Para serviços simples",
  },
  {
    value: "7 dias",
    label: "Garantia",
    description: "Satisfação garantida",
  },
];

// Testimonials
export const testimonials = [
  {
    initials: "AR",
    name: "Ana Rodrigues",
    service: "Remoção de Vírus",
    location: "São Paulo",
    text: "Meu computador estava muito lento e cheio de propagandas. Em menos de 1 hora resolveram tudo. Super recomendo!",
    rating: 5,
    date: "Mar 2024",
  },
  {
    initials: "CL",
    name: "Carlos Lima",
    service: "Instalação de Programas",
    location: "Rio de Janeiro",
    text: "Precisava instalar alguns programas profissionais e não estava conseguindo. Atendimento rápido e preço justo.",
    rating: 5,
    date: "Fev 2024",
  },
  {
    initials: "MS",
    name: "Mariana Santos",
    service: "Organização de Arquivos",
    location: "Belo Horizonte",
    text: "Meus arquivos estavam uma bagunça total. Organizaram tudo, eliminaram duplicatas e ainda liberaram espaço no disco.",
    rating: 4,
    date: "Jan 2024",
  },
];
