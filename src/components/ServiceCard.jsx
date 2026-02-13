import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon, color, features, id }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div
            className={`w-14 h-14 ${colorClasses[color]} rounded-2xl flex items-center justify-center text-3xl mr-4 flex-shrink-0`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">R$ 50 • 30min - 1h</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-500">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/solicitar"
          state={{ service: id }}
          className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Solicitar Este Serviço
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
