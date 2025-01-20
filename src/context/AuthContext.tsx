// @ts-nocheck
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  authToken: string | null;
  avatar: string | null;
  isLoggedIn: boolean;
  setAuthToken: (token: string | null) => void;
  setAvatar: (avatar: string | null) => void;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // ตรวจสอบค่าใน localStorage ทุกครั้งที่ component ทำงาน
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
      const decoded: any = JSON.parse(atob(storedToken.split('.')[1]));
      setAvatar(decoded.avatar);
      setIsLoggedIn(true); // เมื่อมี authToken ให้ตั้งสถานะเป็น logged in
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, avatar, isLoggedIn, setAuthToken, setAvatar, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
