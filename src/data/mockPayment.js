export const mockPaymentMethods = [
  {
    id: "credit",
    name: "Cartão de Crédito",
    icon: "💳",
  },
  {
    id: "debit",
    name: "Cartão de Débito",
    icon: "💳",
  },
  {
    id: "pix",
    name: "PIX",
    icon: "⚡",
  },
  {
    id: "boleto",
    name: "Boleto",
    icon: "📄",
  },
];

// Prefilled payment data
export const paymentMockData = {
  metodo: "credit",
  numeroCartao: "4111 1111 1111 1111",
  nomeCartao: "ALEX SILVA",
  validade: "12/25",
  cvv: "123",
  parcelas: "1",
};

export const mockPaymentProcess = {
  status: "approved",
  mensagem: "Pagamento aprovado com sucesso!",
  valor: 120.0,
};
