import React from "react";
import useAuth from "../hooks/useAuth";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
              <h1 className="text-2xl font-bold text-white">Meu Perfil</h1>
              <p className="text-blue-100 mt-1">Gerencie suas informações</p>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-3xl">👤</span>
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {user.nome}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-500 text-sm mt-1">{user.telefone}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informações da conta
                </h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <dt className="text-sm text-gray-500">ID do usuário</dt>
                    <dd className="text-gray-900 font-medium">{user.id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Membro desde</dt>
                    <dd className="text-gray-900 font-medium">
                      {new Date(user.dataCadastro).toLocaleDateString("pt-BR")}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex space-x-4">
                <Link to="/portal">
                  <Button variant="primary">Minhas Solicitações</Button>
                </Link>
                <Button variant="outline" onClick={logout}>
                  Sair da conta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
