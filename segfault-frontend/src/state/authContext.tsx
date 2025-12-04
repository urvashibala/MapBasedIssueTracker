import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'GUEST' | 'ADMIN';
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  isGuest: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function decodeJWT(token: string): User | null {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(base64));
    return {
      id: payload.sub || payload.id || '',
      name: payload.name || payload.email?.split('@')[0] || 'User',
      email: payload.email || '',
      role: payload.role || 'USER',
    };
  } catch {
    return null;
  }
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = decodeJWT(token);
      setUser(decoded);
    }
    
    const guestTokenId = localStorage.getItem('guestTokenId');
    if (guestTokenId && !user) {
      setUser({
        id: guestTokenId,
        name: 'Guest',
        email: '',
        role: 'GUEST',
      });
    }
    
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    const decoded = decodeJWT(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('guestTokenId');
    setUser(null);
  };

  const isGuest = user?.role === 'GUEST';

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    isGuest,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
