// src/contexts/AuthContext/index.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../../firebase/firebase"; // импорт из firebase.ts

// Типы для контекста
interface LocalUser {
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: LocalUser | null;
  userLoggedIn: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<LocalUser | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // Load current user from localStorage (simple local auth)
    try {
      const raw = localStorage.getItem("myapp_current_user");
      if (raw) {
        const user: LocalUser = JSON.parse(raw);
        setCurrentUser(user);
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
    } catch (err) {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }, []);

  // Local (dev) auth actions using localStorage. Not secure — for local/dev only.
  const signIn = async (email: string, password: string) => {
    // simulate async
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          const rawUsers = localStorage.getItem("myapp_users");
          const users: LocalUser[] = rawUsers ? JSON.parse(rawUsers) : [];
          const found = users.find((u) => u.email === email);
          if (!found) {
            return reject(new Error("User not found"));
          }
          if (found.password !== password) {
            return reject(new Error("Invalid password"));
          }
          localStorage.setItem("myapp_current_user", JSON.stringify(found));
          setCurrentUser(found);
          setUserLoggedIn(true);
          return resolve();
        } catch (e) {
          return reject(new Error("Sign in failed"));
        }
      }, 300);
    });
  };

  const signUp = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          const rawUsers = localStorage.getItem("myapp_users");
          const users: LocalUser[] = rawUsers ? JSON.parse(rawUsers) : [];
          const exists = users.some((u) => u.email === email);
          if (exists) {
            return reject(new Error("User already exists"));
          }
          const newUser: LocalUser = { email, password };
          users.push(newUser);
          localStorage.setItem("myapp_users", JSON.stringify(users));
          localStorage.setItem("myapp_current_user", JSON.stringify(newUser));
          setCurrentUser(newUser);
          setUserLoggedIn(true);
          return resolve();
        } catch (e) {
          return reject(new Error("Sign up failed"));
        }
      }, 300);
    });
  };

  const logout = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        localStorage.removeItem("myapp_current_user");
        setCurrentUser(null);
        setUserLoggedIn(false);
        resolve();
      }, 100);
    });
  };

  const value: AuthContextType = {
    currentUser,
    userLoggedIn,
    loading,
    signIn,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
