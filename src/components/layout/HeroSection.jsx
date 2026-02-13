import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { servicesConfig } from "../../data/services";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 inline-block bg-blue-500 px-4 py-2 rounded-full text-sm font-semibold">
          ⚡ Atendimento Remoto via AnyDesk
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Seu Computador com Problemas?
          <br />
          <span className="text-blue-200">Nós Resolvemos Remotamente</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          Instalação de softwares, remoção de vírus, análise de desempenho e
          organização de arquivos. Tudo isso sem sair de casa.
        </p>

        <div className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
          <div className="flex justify-center items-center gap-8">
            <div>
              <span className="text-3xl font-bold">R$ 50</span>
              <span className="text-blue-200 text-sm block">
                por atendimento
              </span>
            </div>
            <div className="w-px h-10 bg-blue-400"></div>
            <div>
              <span className="text-2xl font-bold">30min - 1h</span>
              <span className="text-blue-200 text-sm block">duração média</span>
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
          <div className="text-center p-4">
            <div className="text-2xl mb-2">🖥️</div>
            <div className="text-blue-200 text-sm">Instalação de Softwares</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">🛡️</div>
            <div className="text-blue-200 text-sm">Remoção de Vírus</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-blue-200 text-sm">Análise de Desempenho</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl mb-2">📁</div>
            <div className="text-blue-200 text-sm">Organização de Arquivos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
