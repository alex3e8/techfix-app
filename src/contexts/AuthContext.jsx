import React, { createContext, useState, useEffect } from "react";
import { registeredUsers } from "../data/mockUsers";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check for saved session on startup
  useEffect(() => {
    localStorage.removeItem("inspirat_user");
    setUser(null);
  }, []);

  const login = (email, password) => {
    setLoading(true);
    // Mock login - find user in mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = registeredUsers.find(
          (u) => u.email === email && u.senha === password,
        );

        if (foundUser) {
          const { senha, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem(
            "inspirat_user",
            JSON.stringify(userWithoutPassword),
          );
          setLoading(false);
          resolve(userWithoutPassword);
        } else {
          setLoading(false);
          reject(new Error("E-mail ou senha inválidos"));
        }
      }, 800); // Simulate network delay
    });
  };

  const signup = (userData) => {
    setLoading(true);
    // Mock signup - create new user
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: `USR-${Date.now().toString().slice(-6)}`,
          ...userData,
          dataCadastro: new Date().toISOString(),
        };

        const { senha, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem(
          "inspirat_user",
          JSON.stringify(userWithoutPassword),
        );
        setLoading(false);
        resolve(userWithoutPassword);
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("inspirat_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
