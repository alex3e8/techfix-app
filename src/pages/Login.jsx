import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import { loginMockData } from "../data/mockUsers";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: loginMockData.email,
    senha: loginMockData.senha,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.senha);

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

  // Determine the context of why user is being asked to login
  const getContextMessage = () => {
    const from = location.state?.from;
    const ticketData = location.state?.ticketData;

    if (from === "/payment" && ticketData) {
      return {
        title: "Quase lá!",
        message:
          "Você já preencheu os dados do reparo. Agora faça login para continuar com o pagamento.",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: "🔧",
      };
    }

    if (from === "/portal") {
      return {
        title: "Acompanhe suas solicitações",
        message:
          "Faça login para acessar seu portal e ver o status de todos os seus reparos.",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        icon: "📋",
      };
    }

    return {
      title: "Bem-vindo de volta",
      message: "Entre com seus dados para acessar sua conta.",
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
          <h2 className="text-2xl font-bold text-gray-900">
            Entrar na sua conta
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Não tem uma conta?{" "}
            <Link
              to="/signup"
              state={location.state} // Pass along the context state
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Cadastre-se
            </Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Demo: alex@exemplo.com / 123456
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
