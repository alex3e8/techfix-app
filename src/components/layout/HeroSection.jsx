import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { appConfig } from "../../data/appConfig";
import { servicesList } from "../../data/services";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ Atendimento Remoto via AnyDesk
            </span>
            <span className="bg-green-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              🏠 Atendimento Presencial sob consulta
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Seu Computador com Problemas?
            <br />
            <span className="text-blue-200">Nós Resolvemos</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Mais de 15 anos de experiência em suporte técnico. Instalação de
            softwares, remoção de vírus, análise de desempenho e organização de
            arquivos.
          </p>

          {/* Experience Badge */}
          <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <span className="text-2xl mr-3">⭐</span>
            <span className="font-semibold">
              Mais de 15 anos de experiência
            </span>
            <span className="text-2xl ml-3">⭐</span>
          </div>

          {/* Pricing Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex justify-center items-center gap-8">
              <div>
                <span className="text-4xl font-bold">R$ 50</span>
                <span className="text-blue-200 text-sm block">
                  por atendimento
                </span>
              </div>
              <div className="w-px h-10 bg-white/30"></div>
              <div>
                <span className="text-2xl font-bold">30min - 1h</span>
                <span className="text-blue-200 text-sm block">
                  duração média
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solicitar"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Solicitar Atendimento Agora
            </Link>
            <Link
              to={isAuthenticated ? "/portal" : "/login"}
              state={{ from: "/portal" }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Acompanhar Solicitação
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {servicesList.map((service) => (
              <div key={service.id} className="text-center p-4">
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-blue-200 text-sm font-medium">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
