import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p className=" text-center mt-4">You must log in to view the dashboard.</p>;
  }

  return (
    <div className=" container-fluid">
      <h2>Dashboard</h2>
      <p>Welcome,{user.name}! Your email is {user.email}.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
