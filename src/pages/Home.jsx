import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/layout/HeroSection";
import ServiceCard from "../components/ServiceCard";
import {
  servicos,
  comoFunciona,
  depoimentos,
  perguntasFrequentes,
} from "../data/servicesData";
import { estatisticas } from "../data/homeContent";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consertamos Tudo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De smartphones a servidores, nossos técnicos certificados cuidam
              de todas as suas necessidades tecnológicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <ServiceCard key={index} {...servico} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simples e Sem Complicações
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consertar sua tecnologia nunca foi tão fácil
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comoFunciona.map((passo, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {passo.icone}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {passo.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{passo.descricao}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {passo.detalhes.map((detalhe, i) => (
                    <li key={i}>✓ {detalhe}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/solicitar"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Iniciar Seu Reparo →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((estatistica, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {estatistica.valor}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {estatistica.label}
                </div>
                <div className="text-gray-600 text-sm mt-1">
                  {estatistica.descricao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Confiado por Milhares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos clientes têm a dizer sobre sua experiência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    {depoimento.iniciais}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {depoimento.nome}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {depoimento.dispositivo}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {depoimento.localizacao}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{depoimento.depoimento}"
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-yellow-500">
                    {"★".repeat(depoimento.avaliacao)}
                    {"☆".repeat(5 - depoimento.avaliacao)}
                  </div>
                  <div className="text-gray-400 text-sm">{depoimento.data}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tem dúvidas? Nós temos as respostas
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {perguntasFrequentes.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.pergunta}
                </h3>
                <p className="text-gray-600">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Consertar Sua Tecnologia?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos que confiam na TechFix
            com seus dispositivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solicitar"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Enviar uma Solicitação
            </Link>
            <Link
              to="/login"
              state={{ from: "/portal" }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Verificar Solicitação Existente
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-8">
            Sem necessidade de agendamento • Diagnóstico gratuito • 1 ano de
            garantia em todos os reparos
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
