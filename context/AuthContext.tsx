'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { AuthUser, getUser, isAuthenticated, logout as authLogout, saveUser } from '@/lib/auth';

interface AuthContextType {
  user: AuthUser | null;
  isLoggedIn: boolean;
  setLoggedIn: (user: AuthUser) => void;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  setLoggedIn: () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setUser(getUser());
    setIsLoggedIn(isAuthenticated());
  }, []);

  const setLoggedIn = (newUser: AuthUser) => {
    saveUser(newUser);
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const signOut = async () => {
    await authLogout();
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setLoggedIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
