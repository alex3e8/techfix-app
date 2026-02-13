import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../contexts/AuthContext";
import Button from "../ui/Button";
import logo from "../../assets/logo-inspirat.svg";

const Header = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Don't show header on confirmation pages
  if (location.pathname.includes("/confirmacao/")) {
    return null;
  }

  const isPortal = location.pathname === "/portal";
  const isLoggedIn = !!user;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="inspirat Logo"
              className="h-10 w-auto md:h-12 transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className={`font-medium ${
                      location.pathname === "/"
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solicitar"
                    className={`font-medium ${
                      location.pathname === "/solicitar"
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Solicitar Ajuda
                  </Link>
                </li>
                {isLoggedIn && (
                  <li>
                    <Link
                      to="/portal"
                      className={`font-medium ${
                        isPortal
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      Minhas Solicitações
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            {/* Desktop Auth Section */}
            <div className="relative">
              {!isLoggedIn ? (
                <div className="flex space-x-3">
                  <Link to="/login">
                    <Button variant="outline" className="px-4 py-2 text-sm">
                      Entrar
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary" className="px-4 py-2 text-sm">
                      Cadastrar
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-3 focus:outline-none"
                  >
                    <div className="text-right hidden lg:block">
                      <div className="text-sm font-medium text-gray-900">
                        {user.nome.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-blue-600 text-lg md:text-xl" />
                    </div>
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Meu Perfil
                      </Link>
                      <Link
                        to="/portal"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Minhas Solicitações
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button and Auth Icon */}
          <div className="flex items-center space-x-3 md:hidden">
            {!isLoggedIn ? (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 px-3 py-2"
                >
                  Entrar
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                >
                  Cadastrar
                </Link>
              </div>
            ) : (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center focus:outline-none"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUserCircle className="text-blue-600 text-lg" />
                </div>
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isLoggedIn && isMenuOpen && (
          <div className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 md:hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{user.nome}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileMenuOpen(false);
              }}
            >
              Meu Perfil
            </Link>
            <Link
              to="/portal"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileMenuOpen(false);
              }}
            >
              Minhas Solicitações
            </Link>
            <hr className="my-2 border-gray-200" />
            <button
              onClick={() => {
                logout();
                setIsMenuOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Sair
            </button>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`px-2 py-2 font-medium rounded-lg ${
                  location.pathname === "/"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/solicitar"
                className={`px-2 py-2 font-medium rounded-lg ${
                  location.pathname === "/solicitar"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Ajuda
              </Link>
              {isLoggedIn && (
                <Link
                  to="/portal"
                  className={`px-2 py-2 font-medium rounded-lg ${
                    isPortal
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Minhas Solicitações
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
