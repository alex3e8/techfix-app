import { servicesList } from "./services";

export const solicitacoesClienteMock = [
  {
    id: "SOL-2024-001",
    nomeCliente: "Alex Silva",
    email: "alex@exemplo.com",
    telefone: "(11) 99999-9999",
    tipoServico: "virus-removal",
    descricaoProblema:
      "Computador muito lento, aparecem muitas propagandas e programas abrindo sozinhos. Suspeito de vírus.",
    dataCriacao: "2024-01-15T09:30:00Z",
    status: "em-andamento",
    valor: 50,
    atualizacoes: [
      {
        id: "atualizacao-1",
        data: "2024-01-15T09:30:00Z",
        mensagem: "Solicitação recebida. Aguardando confirmação de pagamento.",
        autor: "sistema",
      },
      {
        id: "atualizacao-2",
        data: "2024-01-15T11:45:00Z",
        mensagem:
          "Pagamento confirmado! Seu atendimento está agendado para hoje às 14h. Enviaremos o link do AnyDesk por e-mail.",
        autor: "suporte",
      },
      {
        id: "atualizacao-3",
        data: "2024-01-15T14:20:00Z",
        mensagem:
          "Atendimento realizado com sucesso. Vírus removidos, sistema otimizado. Enviamos relatório por e-mail.",
        autor: "suporte",
      },
    ],
  },
  {
    id: "SOL-2024-002",
    nomeCliente: "Alex Silva",
    email: "alex@exemplo.com",
    telefone: "(11) 99999-9999",
    tipoServico: "software-install",
    descricaoProblema:
      "Preciso instalar o pacote Office e configurar o e-mail no computador novo.",
    dataCriacao: "2024-02-10T14:20:00Z",
    status: "aguardando-pagamento",
    valor: 50,
    atualizacoes: [
      {
        id: "atualizacao-1",
        data: "2024-02-10T14:20:00Z",
        mensagem: "Solicitação recebida. Aguardando confirmação de pagamento.",
        autor: "sistema",
      },
    ],
  },
];

export const requestFormMockData = {
  nomeCliente: "Alex Silva",
  email: "alex@exemplo.com",
  telefone: "(11) 99999-9999",
  tipoServico: "performance-analysis",
  descricaoProblema:
    "Computador reiniciando sozinho durante uso. Já formatei mas continua.",
};
