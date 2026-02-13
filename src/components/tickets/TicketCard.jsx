import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";
import { servicesList } from "../../data/services";

const TicketCard = ({ ticket }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getServiceTitle = (serviceId) => {
    const service = servicesList.find((s) => s.id === serviceId);
    return service ? service.title : "Atendimento Remoto";
  };

  const getLatestUpdate = () => {
    if (ticket.atualizacoes?.length > 0) {
      const latest = ticket.atualizacoes[ticket.atualizacoes.length - 1];
      return {
        message: latest.mensagem,
        date: new Date(latest.data).toLocaleDateString("pt-BR"),
      };
    }
    return null;
  };

  const latestUpdate = getLatestUpdate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{ticket.id}</h3>
            <p className="text-gray-600 mt-1">
              {getServiceTitle(ticket.tipoServico)}
            </p>
          </div>
          <StatusBadge status={ticket.status} />
        </div>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3">
          Descrição do Problema
        </h4>
        <p className="text-gray-700 line-clamp-3 mb-6">
          {ticket.descricaoProblema}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600">💰</span>
            </div>
            <div>
              <div className="text-sm">Valor</div>
              <div className="font-medium">R$ 50,00</div>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600">📅</span>
            </div>
            <div>
              <div className="text-sm">Solicitado</div>
              <div className="font-medium">
                {formatDate(ticket.dataCriacao)}
              </div>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600">🖥️</span>
            </div>
            <div>
              <div className="text-sm">Atendimento</div>
              <div className="font-medium">Remoto (AnyDesk)</div>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600">⏱️</span>
            </div>
            <div>
              <div className="text-sm">Duração</div>
              <div className="font-medium">30min - 1h</div>
            </div>
          </div>
        </div>

        {latestUpdate && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">💬</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-sm text-blue-800 font-medium">
                  Última Atualização
                </div>
                <div className="text-blue-700 mt-1">{latestUpdate.message}</div>
                <div className="text-blue-600 text-xs mt-2">
                  {latestUpdate.date}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link
            to={`/solicitacao/${ticket.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            Ver Detalhes Completos
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <div className="text-sm text-gray-500">
            Atualizado{" "}
            {formatDate(
              ticket.atualizacoes[ticket.atualizacoes.length - 1]?.data ||
                ticket.dataCriacao,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
