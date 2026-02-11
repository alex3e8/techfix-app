// src/data/servicesData.js

export const servicos = [
  {
    title: "Notebooks & Computadores",
    description:
      "Desempenho lento, não liga, remoção de vírus, upgrades de hardware, recuperação de dados, reparo de telas, problemas no teclado, superaquecimento.",
    icon: "💻",
    color: "blue",
  },
  {
    title: "Smartphones & Tablets",
    description:
      "Telas quebradas, problemas de bateria, danos por água, problemas de software, portas de carregamento, falhas na câmera, reparo de botões.",
    icon: "📱",
    color: "green",
  },
  {
    title: "Impressoras & Scanners",
    description:
      "Não conecta, papel preso, qualidade de impressão ruim, problemas com drivers, configuração de rede, scanner não funciona, problemas com tinta/toner.",
    icon: "🖨️",
    color: "purple",
  },
  {
    title: "WiFi & Rede",
    description:
      "Internet lenta, áreas sem sinal, configuração de roteador, segurança de rede, conectividade de dispositivos, problemas com modem, extensores de alcance.",
    icon: "📶",
    color: "red",
  },
  {
    title: "Suporte de Software",
    description:
      "Problemas de instalação, remoção de vírus, atualizações de sistema, travamento de aplicativos, ativação de licenças, configuração de email, soluções de backup.",
    icon: "🔧",
    color: "yellow",
  },
  {
    title: "Recuperação de Dados",
    description:
      "Exclusão acidental, discos corrompidos, arquivos inacessíveis, soluções de backup, recuperação RAID, falhas em discos externos, recuperação de discos formatados.",
    icon: "💾",
    color: "indigo",
  },
];

export const comoFunciona = [
  {
    icone: "📝",
    titulo: "Descreva o Problema",
    descricao: "Conte-nos o que está acontecendo com seu dispositivo",
    detalhes: ["Formulário simples", "Sem necessidade de diagnóstico prévio"],
  },
  {
    icone: "🔍",
    titulo: "Receba Diagnóstico",
    descricao: "Nossos técnicos analisam e preparam um orçamento",
    detalhes: ["Análise gratuita", "Orçamento em até 2-4 horas"],
  },
  {
    icone: "🔧",
    titulo: "Reparo & Entrega",
    descricao: "Consertamos seu dispositivo e devolvemos funcionando",
    detalhes: ["Garantia de 1 ano", "Atualizações em tempo real"],
  },
];

// ADD THESE EXPORTS:
export const depoimentos = [
  {
    iniciais: "JS",
    nome: "João Silva",
    dispositivo: "MacBook Pro",
    localizacao: "São Paulo",
    depoimento:
      "Excelente atendimento! Meu MacBook estava com problema na placa e ficou pronto em 2 dias. Preço justo e serviço de qualidade.",
    avaliacao: 5,
    data: "Jan 2024",
  },
  {
    iniciais: "MC",
    nome: "Maria Costa",
    dispositivo: "iPhone 13",
    localizacao: "Rio de Janeiro",
    depoimento:
      "Tela quebrada do meu iPhone. Trocaram rapidamente e ainda deram 1 ano de garantia. Super recomendo!",
    avaliacao: 5,
    data: "Fev 2024",
  },
  {
    iniciais: "RO",
    nome: "Rafael Oliveira",
    dispositivo: "Dell XPS",
    localizacao: "Belo Horizonte",
    depoimento:
      "Notebook não ligava mais. Diagnosticaram problema na fonte em poucas horas. Ótimo serviço!",
    avaliacao: 4,
    data: "Mar 2024",
  },
];

export const perguntasFrequentes = [
  {
    pergunta: "Quanto tempo demora o reparo?",
    resposta:
      "O tempo varia conforme o problema e disponibilidade de peças. Dispositivos comuns levam de 2 a 5 dias úteis. Você recebe atualizações regulares pelo e-mail.",
  },
  {
    pergunta: "Vocês atendem domicílio?",
    resposta:
      "Sim! Oferecemos serviço de retirada e entrega. Agendamos o melhor horário para você.",
  },
  {
    pergunta: "Qual a garantia dos reparos?",
    resposta:
      "Todos os reparos têm 1 ano de garantia em peças e mão de obra. Se o problema persistir, corrigimos sem custo.",
  },
];
