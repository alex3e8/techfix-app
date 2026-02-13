import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { appConfig } from "../../data/appConfig";
import { servicesList } from "../../data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const cnpj = "24.614.440/0001-05";

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TF</span>
              </div>
              <span className="text-white font-bold text-xl">inspirat</span>
            </div>
            <p className="text-sm mb-4">
              Suporte técnico especializado com mais de 15 anos de experiência.
              Atendimento remoto e presencial sob consulta.
            </p>
            <div className="flex space-x-3">
              <a
                href={`https://wa.me/${appConfig.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
              <a
                href={`mailto:${appConfig.contact.email}`}
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="E-mail"
              >
                <FaEnvelope className="text-white text-xl" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/solicitar"
                    state={{ service: service.id }}
                    className="text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">{appConfig.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaWhatsapp className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-sm">{appConfig.contact.whatsapp}</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">{appConfig.contact.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Seg-Sex, 9h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/solicitar"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Solicitar Atendimento
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Acompanhar Solicitação
                </Link>
              </li>
              <li>
                <Link
                  to="/portal"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Portal do Cliente
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with CNPJ */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span>
                © {currentYear} inspirat Suporte Técnico. Todos os direitos
                reservados.
              </span>
              <span className="text-gray-500">|</span>
              <span className="font-mono">CNPJ: {cnpj}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">
                Mais de 15 anos de experiência
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-blue-400">
                Atendimento presencial sob consulta
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
