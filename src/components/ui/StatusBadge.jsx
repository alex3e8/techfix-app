import React from "react";

const StatusBadge = ({ status }) => {
  const statusConfig = {
    enviado: {
      text: "Enviado",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      icon: "📝",
    },
    "em-analise": {
      text: "Em Análise",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: "🔍",
    },
    "em-andamento": {
      text: "Em Andamento",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      icon: "⚙️",
    },
    "aguardando-pecas": {
      text: "Aguardando Peças",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: "📦",
    },
    resolvido: {
      text: "Resolvido",
      color: "bg-green-100 text-green-800 border-green-200",
      icon: "✅",
    },
    fechado: {
      text: "Fechado",
      color: "bg-gray-100 text-gray-800 border-gray-200",
      icon: "🔒",
    },
  };

  const config = statusConfig[status] || {
    text: "Desconhecido",
    color: "bg-gray-100 text-gray-800 border-gray-200",
    icon: "❓",
  };

  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${config.color}`}
    >
      <span className="mr-2">{config.icon}</span>
      {config.text}
    </div>
  );
};

export default StatusBadge;
