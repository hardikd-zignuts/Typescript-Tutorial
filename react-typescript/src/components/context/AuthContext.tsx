import { createContext, useState } from "react";
type ContextChildrenType = {
  children: React.ReactNode;
};
export type AuthType = {
  name: string;
  email: string;
};
type ContextType = {
  user: AuthType | null;
  setUser: React.Dispatch<React.SetStateAction<AuthType | null>>;
};
export const AuthContext = createContext({} as ContextType);

export const AuthProvider = ({ children }: ContextChildrenType) => {
  const [user, setUser] = useState<AuthType | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
