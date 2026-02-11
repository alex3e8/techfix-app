import React, { useState, useEffect } from "react";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";

const RequestFormComponent = ({
  onSubmit,
  loading = false,
  prefilledData = null,
}) => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    email: "",
    telefone: "",
    tipoDispositivo: "notebook",
    marcaDispositivo: "",
    modeloDispositivo: "",
    descricaoProblema: "",
    urgencia: "media",
    preferenciaContato: "email",
  });

  // Load prefilled data if provided
  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({ ...prev, ...prefilledData }));
    }
  }, [prefilledData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Seu Nome"
          value={formData.nomeCliente}
          onChange={(value) => handleChange("nomeCliente", value)}
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
          placeholder="joao@exemplo.com"
          disabled={loading}
        />
      </div>

      <FormInput
        label="Telefone (Opcional)"
        value={formData.telefone}
        onChange={(value) => handleChange("telefone", value)}
        placeholder="(11) 99999-9999"
        disabled={loading}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Informações do Dispositivo
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Dispositivo *
            </label>
            <select
              value={formData.tipoDispositivo}
              onChange={(e) => handleChange("tipoDispositivo", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              required
              disabled={loading}
            >
              <option value="notebook">Notebook/Computador</option>
              <option value="smartphone">Smartphone</option>
              <option value="tablet">Tablet</option>
              <option value="impressora">Impressora</option>
              <option value="rede">Rede/Roteador</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marca (Opcional)
            </label>
            <input
              type="text"
              value={formData.marcaDispositivo}
              onChange={(e) => handleChange("marcaDispositivo", e.target.value)}
              placeholder="Apple, Dell, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modelo (Opcional)
            </label>
            <input
              type="text"
              value={formData.modeloDispositivo}
              onChange={(e) =>
                handleChange("modeloDispositivo", e.target.value)
              }
              placeholder="iPhone 15, XPS 13, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              disabled={loading}
            />
          </div>
        </div>
      </div>

      <FormInput
        label="Descreva o Problema *"
        value={formData.descricaoProblema}
        onChange={(value) => handleChange("descricaoProblema", value)}
        required
        textarea
        rows={5}
        placeholder="O que está acontecendo? Quando começou? Alguma mensagem de erro?"
        disabled={loading}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Informações Adicionais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qual o nível de urgência? *
            </label>
            <select
              value={formData.urgencia}
              onChange={(e) => handleChange("urgencia", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              required
              disabled={loading}
            >
              <option value="baixa">Baixa - Pode esperar alguns dias</option>
              <option value="media">
                Média - Precisa ser resolvido esta semana
              </option>
              <option value="alta">Alta - Precisa de atenção imediata</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Método de Contato Preferido *
            </label>
            <select
              value={formData.preferenciaContato}
              onChange={(e) =>
                handleChange("preferenciaContato", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              required
              disabled={loading}
            >
              <option value="email">E-mail</option>
              <option value="telefone">Ligação Telefônica</option>
              <option value="sms">Mensagem de Texto</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          fullWidth={false}
          className="px-8 py-3 text-lg"
        >
          {loading ? "Enviando..." : "Enviar Solicitação"}
        </Button>
        <p className="text-gray-500 text-sm mt-3">
          Ao enviar, você concorda em receber comunicações sobre sua
          solicitação.
        </p>
      </div>
    </form>
  );
};

export default RequestFormComponent;
