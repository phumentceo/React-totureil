import React, { createContext, useState } from "react";

// Create the Authentication Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "user" && password === "password") {
          const userData = { id: 1, name: "John Doe", email: "john.doe@example.com" };
          setUser(userData);
          resolve(userData);
        } else {
          reject("Invalid username or password");
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (

    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>

  );
};

export default AuthContext;
