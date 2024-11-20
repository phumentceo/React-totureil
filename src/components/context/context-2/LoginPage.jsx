import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

const LoginPage = () => {
  const { login, user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      alert("Login successful!");
    } catch (err) {
      setError(err);
    }
  };

  if (user) {
    return <p className=" text-center">Welcome, {user.name}!</p>;
  }

  return (
    <div className=" container">
    <form className=" w-50 rounded-3 mx-auto px-5 py-5 border" onSubmit={handleLogin}>
      <h2 className=" text-center">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className=" mb-3">
        <label>Username:</label>
        <input
          type="text"
          className=" form-control shadow-none"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className=" mb-3">
        <label>Password:</label>
        <input
          type="password"
          className=" form-control shadow-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className=" btn btn-success ">Login</button>
    </form>
    </div>
  );
};

export default LoginPage;
