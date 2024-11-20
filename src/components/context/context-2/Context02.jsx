import React from "react";
import { AuthProvider } from "./AuthContext";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const Context02 = () => {
  return (
    <AuthProvider>
      <div>
        <h1 className=" text-center mb-5">React Authentication with Context</h1>
        <LoginPage />
        <Dashboard />
      </div>
    </AuthProvider>
  );
};

export default Context02;
