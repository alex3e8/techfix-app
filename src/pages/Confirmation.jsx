import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { appConfig } from "../data/appConfig";

const Confirmation = () => {
  const { id } = useParams();

  const etapas = [
    {
      icon: <FaEnvelope className="text-blue-600 text-xl" />,
      title: "Confirmação Enviada",
      description:
        "Verifique seu e-mail para detalhes do ticket e próximos passos",
      time: "Imediatamente",
      status: "concluido",
    },
    {
      icon: <FaClock className="text-blue-600 text-xl" />,
      title: "Análise da Solicitação",
      description: "Nossa equipe analisa seu problema e prepara uma solução",
      time: "Em até 2-4 horas",
      status: "ativo",
    },
    {
      icon: <FaPhone className="text-blue-600 text-xl" />,
      title: "Diagnóstico & Orçamento",
      description:
        "Entramos em contato com opções de solução e preços transparentes",
      time: "Em até 24 horas",
      status: "pendente",
    },
    {
      icon: <FaCheckCircle className="text-blue-600 text-xl" />,
      title: "Reparo & Conclusão",
      description:
        "Seu dispositivo é consertado com atualizações regulares durante o processo",
      time: "Prazo variável",
      status: "pendente",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Solicitação Enviada com Sucesso!
            </h1>
            <p className="text-xl text-gray-600">
              Recebemos sua solicitação e entraremos em contato em breve.
            </p>
          </div>

          {/* Ticket Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Seu Número de Solicitação
                </h3>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-4">
                    <span className="text-2xl font-bold">
                      {id || "SOL-2024-001"}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Guarde este número para referência
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portal"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow text-center"
                >
                  Acompanhar Sua Solicitação
                </Link>
                <Link
                  to="/"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              O que Acontece Agora
            </h2>
            <div className="space-y-8">
              {etapas.map((etapa, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4
                    ${
                      etapa.status === "concluido"
                        ? "bg-green-100"
                        : etapa.status === "ativo"
                          ? "bg-blue-100"
                          : "bg-gray-100"
                    }`}
                  >
                    {etapa.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {etapa.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {etapa.description}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full
                        ${
                          etapa.status === "concluido"
                            ? "bg-green-100 text-green-800"
                            : etapa.status === "ativo"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {etapa.time}
                      </span>
                    </div>
                    {index < etapas.length - 1 && (
                      <div className="h-8 w-0.5 bg-gray-200 ml-6 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                Precisa de Ajuda Imediata?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="mr-4 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">Ligue Agora</div>
                    <div className="text-2xl font-bold">
                      {appConfig.contact.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">
                      Suporte por E-mail
                    </div>
                    <div className="text-lg font-medium">
                      {appConfig.contact.email}
                    </div>
                  </div>
                </div>
                <p className="text-blue-200 text-sm mt-4">
                  Suporte 24/7 disponível. Por favor, referencie seu número de
                  solicitação ao entrar em contato.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                Seu Reparo Está Protegido
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaShieldAlt className="mr-4 text-green-200" />
                  <div>
                    <div className="text-sm text-green-200">Garantia</div>
                    <div className="text-lg font-medium">
                      {appConfig.warranty.period}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-green-200">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Todas as peças e mão de obra cobertas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Garantia: sem conserto, sem custo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Suporte de acompanhamento por 90 dias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
