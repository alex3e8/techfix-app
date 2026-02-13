import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "5511999999999"; // Replace with actual number
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os serviços da Inspirat.",
  );
  const whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 transform hover:scale-110 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="Contato via WhatsApp"
      >
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/25">
            <FaWhatsapp className="text-3xl" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap">
              Fale conosco no WhatsApp
              <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </button>

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-white text-2xl" />
                <div>
                  <h3 className="text-white font-bold">Atendimento Inspirat</h3>
                  <p className="text-green-100 text-sm">
                    Online • Respondemos rápido
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-sm">👋</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm">
                      Olá! Como podemos ajudar você hoje?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Atendimento de Segunda a Sexta, 9h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md"
                >
                  Iniciar Conversa no WhatsApp
                </a>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Atendimento sigiloso • Clique para abrir o WhatsApp Web
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 px-4 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>⚡ Resposta em até 15min</span>
                <span>💬 15+ anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
