import React from "react";
import { Link } from "react-router-dom";
import TicketCard from "../components/tickets/TicketCard";
import StatusBadge from "../components/ui/StatusBadge";
import { useTickets } from "../hooks/useTickets";
import useAuth from "../hooks/useAuth";
import { FaPlus, FaSearch, FaFilter, FaHistory } from "react-icons/fa";

const CustomerPortal = () => {
  const { user } = useAuth();
  const { getActiveTickets, getCompletedTickets, getSummary } = useTickets();

  const activeTickets = getActiveTickets();
  const completedTickets = getCompletedTickets();
  const summary = getSummary();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome & Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getGreeting()}, {user?.nome?.split(" ")[0]}!
          </h1>
          <p className="text-gray-600">
            Bem-vindo ao seu portal de suporte. Aqui você pode acompanhar todas
            as suas solicitações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {summary.active}
              </div>
              <div className="text-gray-600">Solicitações Ativas</div>
              <div className="text-sm text-gray-500 mt-1">
                Sendo trabalhadas
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {summary.completed}
              </div>
              <div className="text-gray-600">Concluídas</div>
              <div className="text-sm text-gray-500 mt-1">
                Prontas/resolvidas
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">2-4</div>
              <div className="text-gray-600">Horas para Responder</div>
              <div className="text-sm text-gray-500 mt-1">Tempo médio</div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Suporte</div>
              <div className="text-sm text-gray-500 mt-1">
                Sempre disponível
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative w-full md:w-96 mb-4 md:mb-0">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar solicitações por ID ou dispositivo..."
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FaFilter className="mr-2" />
                Filtrar
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FaHistory className="mr-2" />
                Histórico
              </button>
            </div>
          </div>
        </div>

        {/* Active Tickets */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Solicitações Ativas
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {activeTickets.length} ativas
            </span>
          </div>

          {activeTickets.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-gray-400 text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma Solicitação Ativa
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Quando você enviar uma solicitação de suporte, ela aparecerá
                aqui com atualizações em tempo real.
              </p>
              <Link
                to="/solicitar"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow"
              >
                Enviar Sua Primeira Solicitação
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          )}
        </div>

        {/* Completed Tickets */}
        {completedTickets.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Solicitações Concluídas
              </h2>
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {completedTickets.length} concluídas
              </span>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Solicitação
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dispositivo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Custo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ação
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {completedTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">
                              {ticket.id}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">
                              {ticket.descricaoProblema.substring(0, 50)}...
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-blue-600">
                                {ticket.tipoDispositivo === "notebook"
                                  ? "💻"
                                  : ticket.tipoDispositivo === "smartphone"
                                    ? "📱"
                                    : ticket.tipoDispositivo === "tablet"
                                      ? "📱"
                                      : ticket.tipoDispositivo === "impressora"
                                        ? "🖨️"
                                        : ticket.tipoDispositivo === "rede"
                                          ? "📶"
                                          : "🔧"}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm text-gray-900 capitalize">
                                {ticket.tipoDispositivo}
                              </div>
                              <div className="text-sm text-gray-500">
                                {ticket.marcaDispositivo}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={ticket.status} />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(ticket.dataCriacao).toLocaleDateString(
                            "pt-BR",
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {ticket.custoReal ? (
                            <div className="font-medium text-green-600">
                              R$ {ticket.custoReal}
                            </div>
                          ) : ticket.custoEstimado ? (
                            <div className="font-medium text-blue-600">
                              R$ {ticket.custoEstimado}
                            </div>
                          ) : (
                            <div className="text-gray-400">—</div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            to={`/solicitacao/${ticket.id}`}
                            className="text-blue-600 hover:text-blue-900 font-medium text-sm"
                          >
                            Ver Detalhes
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Precisa de Ajuda Urgente?
            </h3>
            <p className="text-gray-600 mb-4">
              Entre em contato diretamente com nossa equipe de suporte para
              assistência imediata.
            </p>
            <a
              href="tel:11999999999"
              className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100"
            >
              Ligar para Suporte de Emergência
            </a>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Agendar Retirada
            </h3>
            <p className="text-gray-600 mb-4">
              Agende retirada ou entrega do dispositivo no nosso centro de
              serviço.
            </p>
            <button className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100">
              Agendar Agora
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Verificar Garantia
            </h3>
            <p className="text-gray-600 mb-4">
              Verifique status e cobertura da garantia para seus dispositivos
              reparados.
            </p>
            <button className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-100">
              Verificar Garantia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;
