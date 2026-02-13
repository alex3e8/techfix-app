import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RequestFormComponent from "../components/tickets/RequestFormComponent";
import { requestFormMockData } from "../data/mockTickets";

const RequestForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [loading, setLoading] = useState(false);

  // Prefill with user data if logged in, otherwise use mock data
  const prefilledData = isAuthenticated
    ? {
        nomeCliente: user.nome,
        email: user.email,
        telefone: user.telefone,
        ...requestFormMockData,
      }
    : requestFormMockData;

  const handleSubmit = async (formData) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (isAuthenticated) {
        // If logged in, go to payment
        navigate("/payment", { state: { ticketData: formData } });
      } else {
        // If not logged in, go to login with redirect back to payment
        navigate("/login", {
          state: {
            from: "/payment",
            ticketData: formData,
          },
        });
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
              <span className="text-4xl">🔧</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Obtenha Suporte Técnico Especializado
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conte-nos sobre seu problema tecnológico e retornaremos em até 2-4
              horas com uma solução.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-10">
                <RequestFormComponent
                  onSubmit={handleSubmit}
                  loading={loading}
                  prefilledData={prefilledData}
                />
              </div>

              <div className="md:w-1/3 bg-gradient-to-b from-blue-50 to-blue-100 p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Por que Escolher a Inspirat?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-blue-700">
                        Diagnóstico e orçamento gratuitos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-blue-700">
                        Técnicos certificados
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-blue-700">
                        1 ano de garantia nos reparos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-blue-700">
                        Garantia: sem conserto, sem custo
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
