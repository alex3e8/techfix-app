import React, { useState, useEffect } from "react";
import { servicesList, servicesConfig } from "../../data/services";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

const RequestFormComponent = ({ onSubmit, loading, prefilledData }) => {
  const [formData, setFormData] = useState({
    serviceType: "",
    problemDescription: "",
    name: prefilledData?.nomeCliente || "",
    email: prefilledData?.email || "",
    phone: prefilledData?.telefone || "",
    preferredDate: "",
    preferredTime: "",
    anydeskAvailable: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceType) {
      newErrors.serviceType = "Selecione o tipo de serviço";
    }
    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = "Descreva o problema ou necessidade";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Transform data to match what the app expects
    const ticketData = {
      nomeCliente: formData.name,
      email: formData.email,
      telefone: formData.phone,
      tipoDispositivo: "computador",
      tipoServico: formData.serviceType,
      descricaoProblema: formData.problemDescription,
      urgencia: "media",
      dataPreferida: formData.preferredDate,
      horarioPreferido: formData.preferredTime,
      anydeskDisponivel: formData.anydeskAvailable,
      valor: servicesConfig.price,
    };

    onSubmit(ticketData);
  };

  // Get service title by id
  const getServiceTitle = (id) => {
    const service = servicesList.find((s) => s.id === id);
    return service ? service.title : id;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Tipo de Serviço <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.serviceType}
          onChange={(e) => handleChange("serviceType", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione o serviço desejado</option>
          {servicesList.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title} - R$ 50
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
        )}
      </div>

      <FormInput
        label="Nome completo"
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
        required
        placeholder="Seu nome completo"
        error={errors.name}
      />

      <FormInput
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(value) => handleChange("email", value)}
        required
        placeholder="seu@email.com"
        error={errors.email}
      />

      <FormInput
        label="Telefone (WhatsApp)"
        value={formData.phone}
        onChange={(value) => handleChange("phone", value)}
        required
        placeholder="(11) 99999-9999"
        error={errors.phone}
      />

      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Descreva o problema ou o que precisa ser feito{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.problemDescription}
          onChange={(e) => handleChange("problemDescription", e.target.value)}
          placeholder="Ex: Meu computador está muito lento, aparece mensagem de vírus, preciso instalar o pacote Office..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.problemDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.problemDescription}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Data preferencial"
          type="date"
          value={formData.preferredDate}
          onChange={(value) => handleChange("preferredDate", value)}
        />
        <FormInput
          label="Horário preferencial"
          type="time"
          value={formData.preferredTime}
          onChange={(value) => handleChange("preferredTime", value)}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={formData.anydeskAvailable}
            onChange={(e) => handleChange("anydeskAvailable", e.target.checked)}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-sm text-gray-700">
            Tenho o AnyDesk instalado ou posso instalar rapidamente
          </span>
        </label>
        <p className="text-xs text-gray-500 mt-2 ml-7">
          Caso não tenha, enviaremos instruções simples de instalação por
          e-mail.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Valor do atendimento:</span>
          <span className="text-2xl font-bold text-blue-600">R$ 50,00</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          * Duração média de 30 minutos a 1 hora. Se necessário mais tempo,
          avisaremos previamente.
        </p>
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={loading}
        className="py-4 text-lg"
      >
        {loading ? "Enviando..." : "Solicitar Atendimento"}
      </Button>
    </form>
  );
};

export default RequestFormComponent;
