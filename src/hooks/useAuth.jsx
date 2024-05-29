// src/hooks/useAuth.js
import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  return { isAuthenticated, login };
}
