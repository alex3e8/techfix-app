// Registered user for login
export const registeredUsers = [
  {
    id: "USR-ALEX-001",
    nome: "Alex Silva",
    email: "alex@exemplo.com",
    senha: "123456",
    telefone: "(11) 99999-9999",
    endereco: {
      rua: "Av. Paulista, 1000",
      cidade: "São Paulo",
      cep: "01310-100",
    },
    dataCadastro: "2024-01-15T09:30:00Z",
  },
];

// Prefilled data for signup form
export const signupMockData = {
  nome: "João Oliveira",
  email: "joao@exemplo.com",
  senha: "123456",
  telefone: "(11) 98888-7777",
  endereco: {
    rua: "Rua Augusta, 500",
    cidade: "São Paulo",
    cep: "01305-000",
  },
};

// Prefilled data for login form
export const loginMockData = {
  email: "alex@exemplo.com",
  senha: "123456",
};
