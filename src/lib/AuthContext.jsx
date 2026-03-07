import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Estados simplificados: siempre cargado y sin errores
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState({});

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth, 
      isLoadingPublicSettings, 
      authError, 
      appPublicSettings,
      navigateToLogin: () => console.log("Login no requerido") 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);