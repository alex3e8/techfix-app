import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePayment } from "../hooks/usePayment";
import { useTickets } from "../hooks/useTickets";
import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import { servicesConfig } from "../data/services";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { processPayment, processing } = usePayment();
  const { addTicket } = useTickets();
  const [formData, setFormData] = useState({
    paymentMethod: "pix", // Default to PIX for simplicity
  });

  const ticketData = location.state?.ticketData;
  const servicePrice = servicesConfig.price;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Process payment (simplified for R$50 fixed price)
      await processPayment({
        method: formData.paymentMethod,
        amount: servicePrice,
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

  if (!ticketData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nenhum dado de solicitação
          </h2>
          <p className="text-gray-600 mb-6">
            Por favor, inicie uma solicitação primeiro.
          </p>
          <Button onClick={() => navigate("/solicitar")}>
            Voltar para Solicitação
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
              <h1 className="text-2xl font-bold text-white">Pagamento</h1>
              <p className="text-blue-100 mt-1">
                Finalize sua solicitação de atendimento
              </p>
            </div>

            <div className="p-8">
              {/* Service Summary */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Resumo do atendimento
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Serviço:</span> Atendimento
                    Remoto
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Duração:</span> 30min - 1h
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-blue-200">
                  <span className="font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {servicePrice},00
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Simplified Payment Methods */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-4">
                    Forma de pagamento *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:border-blue-300 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={formData.paymentMethod === "pix"}
                        onChange={(e) =>
                          handleChange("paymentMethod", e.target.value)
                        }
                        className="mr-3"
                      />
                      <span className="text-2xl mr-3">⚡</span>
                      <div>
                        <span className="font-medium">PIX</span>
                        <p className="text-xs text-gray-500">
                          Pagamento instantâneo
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer hover:border-blue-300 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === "credit"}
                        onChange={(e) =>
                          handleChange("paymentMethod", e.target.value)
                        }
                        className="mr-3"
                      />
                      <span className="text-2xl mr-3">💳</span>
                      <div>
                        <span className="font-medium">Cartão de Crédito</span>
                        <p className="text-xs text-gray-500">
                          Até 4x sem juros
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Credit Card Fields - Only show if credit selected */}
                {formData.paymentMethod === "credit" && (
                  <div className="space-y-4 mb-6">
                    <FormInput
                      label="Número do cartão"
                      placeholder="4111 1111 1111 1111"
                      required
                    />
                    <FormInput
                      label="Nome no cartão"
                      placeholder="Como está no cartão"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormInput
                        label="Validade"
                        placeholder="MM/AA"
                        required
                      />
                      <FormInput label="CVV" placeholder="123" required />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Número de parcelas
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                        <option value="1">1x de R$ 50,00</option>
                        <option value="2">2x de R$ 25,00</option>
                        <option value="3">3x de R$ 16,66</option>
                        <option value="4">4x de R$ 12,50</option>
                      </select>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={processing}
                  className="py-4 text-lg"
                >
                  {processing ? "Processando..." : "Confirmar Pagamento"}
                </Button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  Pagamento 100% seguro. Atendimento garantido ou seu dinheiro
                  de volta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
