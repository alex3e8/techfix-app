import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  const handleStatusClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      // Store the intended destination
      window.location.href = "/login?redirect=/portal";
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Problemas com Tecnologia?
          <br />
          <span className="text-blue-200">Nós Temos a Solução</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          Suporte técnico especializado para todos os seus dispositivos. Reparos
          rápidos, confiáveis e sem complicações.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/solicitar"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Obter Ajuda Agora
          </Link>
          <Link
            to={isAuthenticated ? "/portal" : "/login"}
            state={{ from: "/portal" }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Verificar Status
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-200 text-sm">Suporte Disponível</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold mb-2">2-4</div>
            <div className="text-blue-200 text-sm">Horas para Responder</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-blue-200 text-sm">Satisfação</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold mb-2">1 Ano</div>
            <div className="text-blue-200 text-sm">Garantia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
