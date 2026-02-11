// Company information - single source of truth
export const appConfig = {
  company: {
    name: "TechFix",
    fullName: "TechFix Suporte Técnico",
    logo: "TF",
    primaryColor: "blue-600",
  },
  contact: {
    phone: "(11) 99999-9999",
    email: "suporte@techfix.com.br",
    whatsapp: "(11) 99999-9999",
  },
  warranty: {
    period: "1 Ano",
    description: "1 ano de garantia em todos os reparos",
  },
  responseTime: {
    estimate: "2-4 horas",
    support: "24/7",
  },
  pricing: {
    freeDiagnosis: true,
    noFixNoPay: true,
  },
};

// Navigation links
export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/solicitar", label: "Solicitar Ajuda" },
  { to: "/portal", label: "Minhas Solicitações", protected: true },
];

// Status flow
export const statusFlow = [
  { status: "enviado", label: "Enviado", icon: "📝" },
  { status: "em-analise", label: "Em Análise", icon: "🔍" },
  { status: "em-andamento", label: "Em Andamento", icon: "⚙️" },
  { status: "aguardando-pecas", label: "Aguardando Peças", icon: "📦" },
  { status: "resolvido", label: "Resolvido", icon: "✅" },
  { status: "fechado", label: "Fechado", icon: "🔒" },
];
