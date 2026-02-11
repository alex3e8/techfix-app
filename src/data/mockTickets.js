export const solicitacoesClienteMock = [
  {
    id: "SOL-2024-001",
    nomeCliente: "Alex Silva",
    email: "alex@exemplo.com",
    telefone: "(11) 99999-9999",
    tipoDispositivo: "notebook",
    marcaDispositivo: "Dell",
    modeloDispositivo: "XPS 15",
    descricaoProblema:
      "Notebook não liga - mostra tela preta com cursor piscando. Estava funcionando normalmente ontem. Tentei reiniciar várias vezes sem sucesso.",
    urgencia: "alta",
    dataCriacao: "2024-01-15T09:30:00Z",
    status: "em-andamento",
    custoEstimado: 120,
    atualizacoes: [
      {
        id: "atualizacao-1",
        data: "2024-01-15T09:30:00Z",
        mensagem:
          "Solicitação enviada com sucesso. Nossa equipe irá analisar em até 2 horas.",
        autor: "sistema",
      },
      {
        id: "atualizacao-2",
        data: "2024-01-15T11:45:00Z",
        mensagem:
          "Diagnóstico: Provável falha no disco rígido. Técnico entrará em contato com opções de reparo.",
        autor: "suporte",
      },
      {
        id: "atualizacao-3",
        data: "2024-01-15T14:20:00Z",
        mensagem: "Peças solicitadas. Entrega prevista em 1-2 dias úteis.",
        autor: "suporte",
      },
    ],
  },
  {
    id: "SOL-2024-002",
    nomeCliente: "Alex Silva",
    email: "alex@exemplo.com",
    telefone: "(11) 99999-9999",
    tipoDispositivo: "smartphone",
    marcaDispositivo: "Apple",
    modeloDispositivo: "iPhone 14",
    descricaoProblema:
      "Tela quebrada após queda. Touch não funciona na parte inferior.",
    urgencia: "media",
    dataCriacao: "2024-02-10T14:20:00Z",
    status: "em-analise",
    atualizacoes: [
      {
        id: "atualizacao-1",
        data: "2024-02-10T14:20:00Z",
        mensagem: "Solicitação enviada com sucesso.",
        autor: "sistema",
      },
      {
        id: "atualizacao-2",
        data: "2024-02-10T16:30:00Z",
        mensagem: "Em análise pelo técnico especializado.",
        autor: "suporte",
      },
    ],
  },
];

// Prefilled data for new request form
export const requestFormMockData = {
  nomeCliente: "Alex Silva",
  email: "alex@exemplo.com",
  telefone: "(11) 99999-9999",
  tipoDispositivo: "notebook",
  marcaDispositivo: "Dell",
  modeloDispositivo: "XPS 15",
  descricaoProblema:
    "Computador reiniciando sozinho durante uso. Já formatei mas continua.",
  urgencia: "media",
  preferenciaContato: "email",
};
