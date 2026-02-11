import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePayment } from "../hooks/usePayment";
import { useTickets } from "../hooks/useTickets";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import { paymentMockData } from "../data/mockPayment";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { processPayment, processing, paymentMethods } = usePayment();
  const { addTicket } = useTickets();
  const [formData, setFormData] = useState({
    metodo: paymentMockData.metodo,
    numeroCartao: paymentMockData.numeroCartao,
    nomeCartao: paymentMockData.nomeCartao,
    validade: paymentMockData.validade,
    cvv: paymentMockData.cvv,
    parcelas: paymentMockData.parcelas,
  });

  const ticketData = location.state?.ticketData;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Process payment
      await processPayment({
        ...formData,
        valor: 120.0,
        ticketId: ticketData?.id || "SOL-TEMP",
      });

      // Create ticket
      const newTicket = await addTicket(ticketData);

      // Go to confirmation
      navigate(`/confirmacao/${newTicket.id}`);
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
              <h1 className="text-2xl font-bold text-white">Pagamento</h1>
              <p className="text-blue-100 mt-1">
                Finalize sua solicitação de reparo
              </p>
            </div>

            <div className="p-8">
              {/* Resumo do pedido */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Resumo do pedido
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Reparo de dispositivo</p>
                    <p className="text-sm text-gray-500">
                      {ticketData?.tipoDispositivo} -{" "}
                      {ticketData?.marcaDispositivo}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    R$ 120,00
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Método de pagamento */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-4">
                    Forma de pagamento *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handleChange("metodo", method.id)}
                        className={`p-4 border-2 rounded-xl flex flex-col items-center transition-colors ${
                          formData.metodo === method.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <span className="text-2xl mb-2">{method.icon}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {method.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dados do cartão - only show if credit/debit selected */}
                {(formData.metodo === "credit" ||
                  formData.metodo === "debit") && (
                  <div className="space-y-4">
                    <FormInput
                      label="Número do cartão"
                      value={formData.numeroCartao}
                      onChange={(value) => handleChange("numeroCartao", value)}
                      required
                      placeholder="4111 1111 1111 1111"
                      disabled={processing}
                    />

                    <FormInput
                      label="Nome no cartão"
                      value={formData.nomeCartao}
                      onChange={(value) => handleChange("nomeCartao", value)}
                      required
                      placeholder="Como está no cartão"
                      disabled={processing}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormInput
                        label="Validade"
                        value={formData.validade}
                        onChange={(value) => handleChange("validade", value)}
                        required
                        placeholder="MM/AA"
                        disabled={processing}
                      />
                      <FormInput
                        label="CVV"
                        value={formData.cvv}
                        onChange={(value) => handleChange("cvv", value)}
                        required
                        placeholder="123"
                        disabled={processing}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Número de parcelas
                      </label>
                      <select
                        value={formData.parcelas}
                        onChange={(e) =>
                          handleChange("parcelas", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={processing}
                      >
                        <option value="1">1x de R$ 120,00</option>
                        <option value="2">2x de R$ 60,00</option>
                        <option value="3">3x de R$ 40,00</option>
                        <option value="4">4x de R$ 30,00</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={processing}
                    className="py-4 text-lg"
                  >
                    {processing ? "Processando..." : "Finalizar pagamento"}
                  </Button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Pagamento 100% seguro. Seus dados estão protegidos.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
