import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(token && user) {
      return { token };
    }

    return {};
  })
  
  const signIn = useCallback( async ({ email, password}) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    
    const { token } = response.data;
    localStorage.setItem('token', token);
    setData({ token });

  }, []);
  
  const signOut = useCallback(() => {
    localStorage.removeItem('token');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };