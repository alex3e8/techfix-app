import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import { signupMockData } from "../data/mockUsers";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: signupMockData.nome,
    email: signupMockData.email,
    senha: signupMockData.senha,
    telefone: signupMockData.telefone,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup(formData);

      const from = location.state?.from || "/";
      const ticketData = location.state?.ticketData;

      if (from === "/payment" && ticketData) {
        navigate("/payment", { state: { ticketData } });
      } else {
        navigate(from);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Determine the context of why user is being asked to signup
  const getContextMessage = () => {
    const from = location.state?.from;
    const ticketData = location.state?.ticketData;

    if (from === "/payment" && ticketData) {
      return {
        title: "Primeiro, crie sua conta",
        message:
          "Você está a um passo de finalizar seu reparo. Crie sua conta para continuar com o pagamento.",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: "🔧",
      };
    }

    if (from === "/portal") {
      return {
        title: "Acompanhe seus reparos",
        message:
          "Crie uma conta para acessar o portal e ver o status de todas as suas solicitações.",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        icon: "📋",
      };
    }

    return {
      title: "Crie sua conta",
      message: "Cadastre-se para começar a usar a Inspirat.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      icon: "👋",
    };
  };

  const context = getContextMessage();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Context Bridge Message */}
        <div
          className={`${context.bgColor} border ${context.borderColor} rounded-xl p-5 mb-8 flex items-start`}
        >
          <span className="text-2xl mr-4">{context.icon}</span>
          <div>
            <h3 className={`font-semibold ${context.textColor} mb-1`}>
              {context.title}
            </h3>
            <p className={`text-sm ${context.textColor} opacity-90`}>
              {context.message}
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-2xl">🔧</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Criar sua conta</h2>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nome completo"
            value={formData.nome}
            onChange={(value) => handleChange("nome", value)}
            required
            placeholder="João Silva"
            disabled={loading}
          />

          <FormInput
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            required
            placeholder="seu@email.com"
            disabled={loading}
          />

          <FormInput
            label="Telefone"
            value={formData.telefone}
            onChange={(value) => handleChange("telefone", value)}
            placeholder="(11) 99999-9999"
            disabled={loading}
          />

          <FormInput
            label="Senha"
            type="password"
            value={formData.senha}
            onChange={(value) => handleChange("senha", value)}
            required
            placeholder="••••••"
            disabled={loading}
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={loading}
            className="mb-4"
          >
            {loading ? "Criando conta..." : "Cadastrar"}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              state={location.state} // Pass along the context state
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
