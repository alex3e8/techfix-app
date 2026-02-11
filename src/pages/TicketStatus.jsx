import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import StatusBadge from "../components/ui/StatusBadge";
import { useTickets } from "../hooks/useTickets";
import useAuth from "../hooks/useAuth";
import {
  FaArrowLeft,
  FaCalendar,
  FaDollarSign,
  FaPhone,
  FaEnvelope,
  FaPaperclip,
  FaClock,
  FaUser,
} from "react-icons/fa";
import { appConfig } from "../data/appConfig";

const TicketStatus = () => {
  const { id } = useParams();
  const { getTicketById, addUpdate } = useTickets();
  const { user } = useAuth();
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const ticket = getTicketById(id || "");

  if (!ticket) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Solicitação Não Encontrada
          </h1>
          <p className="text-gray-600 mb-6">
            A solicitação que você está procurando não existe ou foi removida.
          </p>
          <Link
            to="/portal"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Voltar ao Portal
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 60) return `${diffMinutes} minutos atrás`;
    if (diffHours < 24) return `${diffHours} horas atrás`;
    return `${diffDays} dias atrás`;
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    setSending(true);
    addUpdate(ticket.id, newMessage, "cliente");
    setNewMessage("");

    setTimeout(() => {
      setSending(false);
    }, 1000);
  };

  const statusDescriptions = {
    enviado:
      "Sua solicitação foi recebida e está aguardando análise pela nossa equipe.",
    "em-analise":
      "Nossos técnicos estão analisando seu problema e preparando uma solução.",
    "em-andamento":
      "O trabalho de reparo começou. Forneceremos atualizações regulares sobre o progresso.",
    "aguardando-pecas":
      "Estamos aguardando entrega de peças. Entraremos em contato quando chegarem.",
    resolvido:
      "Seu dispositivo foi reparado e está pronto para retirada/entrega.",
    fechado: "Esta solicitação foi concluída e fechada.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link
              to="/portal"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <FaArrowLeft className="mr-2" />
              Voltar ao Portal
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Detalhes da Solicitação</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {ticket.id}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {ticket.marcaDispositivo} {ticket.modeloDispositivo}
                </p>
                <div className="flex items-center text-gray-500">
                  <FaCalendar className="mr-2" />
                  <span>Enviado em {formatDate(ticket.dataCriacao)}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <StatusBadge status={ticket.status} />
                <p className="text-gray-600 text-sm mt-2">
                  {statusDescriptions[ticket.status]}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Descrição do Problema
                </h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">
                    {ticket.descricaoProblema}
                  </p>
                </div>

                {ticket.urgencia && (
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium text-blue-800">
                          Nível de Urgência
                        </div>
                        <div className="text-blue-700 capitalize">
                          {ticket.urgencia}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Atualizações & Linha do Tempo
                </h2>
                <div className="space-y-8">
                  {ticket.atualizacoes.map((update, index) => (
                    <div key={update.id} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center
                          ${
                            update.autor === "suporte"
                              ? "bg-blue-100 text-blue-600"
                              : update.autor === "cliente"
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {update.autor === "suporte"
                            ? "🔧"
                            : update.autor === "cliente"
                              ? "👤"
                              : "🤖"}
                        </div>
                        {index < ticket.atualizacoes.length - 1 && (
                          <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-xl p-5">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-gray-900 capitalize">
                              {update.autor === "suporte"
                                ? "Suporte TechFix"
                                : update.autor === "cliente"
                                  ? "Você"
                                  : "Sistema"}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatTimeAgo(update.data)}
                            </div>
                          </div>
                          <p className="text-gray-700">{update.mensagem}</p>
                          <div className="text-xs text-gray-500 mt-2">
                            {formatDate(update.data)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Message */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Adicionar uma Mensagem
                  </h3>
                  <div className="space-y-4">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Digite sua mensagem aqui... (ex: detalhes adicionais, perguntas)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <FaPaperclip className="mr-2" />
                        Anexar Arquivo
                      </button>
                      <button
                        onClick={handleSendMessage}
                        disabled={sending || !newMessage.trim()}
                        className={`px-6 py-2 rounded-lg font-medium ${
                          sending || !newMessage.trim()
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {sending ? "Enviando..." : "Enviar Mensagem"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Customer Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Informações do Cliente
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Nome</div>
                      <div className="font-medium text-gray-900">
                        {ticket.nomeCliente}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">E-mail</div>
                      <div className="font-medium text-gray-900">
                        {ticket.email}
                      </div>
                    </div>
                  </div>
                  {ticket.telefone && (
                    <div className="flex items-center">
                      <FaPhone className="text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Telefone</div>
                        <div className="font-medium text-gray-900">
                          {ticket.telefone}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Device Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Detalhes do Dispositivo
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">
                      Tipo de Dispositivo
                    </div>
                    <div className="font-medium text-gray-900 capitalize">
                      {ticket.tipoDispositivo}
                    </div>
                  </div>
                  {ticket.marcaDispositivo && (
                    <div>
                      <div className="text-sm text-gray-500">Marca</div>
                      <div className="font-medium text-gray-900">
                        {ticket.marcaDispositivo}
                      </div>
                    </div>
                  )}
                  {ticket.modeloDispositivo && (
                    <div>
                      <div className="text-sm text-gray-500">Modelo</div>
                      <div className="font-medium text-gray-900">
                        {ticket.modeloDispositivo}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Cost & Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Custo & Ações
                </h2>
                <div className="space-y-6">
                  {ticket.custoEstimado && (
                    <div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <FaDollarSign className="mr-2" />
                        <span>Custo Estimado</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        R$ {ticket.custoEstimado}
                      </div>
                    </div>
                  )}

                  {ticket.custoReal && (
                    <div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <FaDollarSign className="mr-2" />
                        <span>Custo Real</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        R$ {ticket.custoReal}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Support Contact */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-bold mb-6">Precisa de Ajuda?</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-blue-200 mb-1">
                      Ligar para o Suporte
                    </div>
                    <a
                      href={`tel:${appConfig.contact.phone}`}
                      className="text-xl font-bold hover:underline"
                    >
                      {appConfig.contact.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">E-mail</div>
                    <a
                      href={`mailto:${appConfig.contact.email}`}
                      className="font-medium hover:underline"
                    >
                      {appConfig.contact.email}
                    </a>
                  </div>
                  <div className="pt-4 border-t border-blue-400">
                    <p className="text-sm text-blue-200">
                      Referência: <span className="font-bold">{ticket.id}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketStatus;
