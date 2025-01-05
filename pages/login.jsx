import { useState } from "react";
import Button from "../components/Button";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Placeholder for login functionality
    alert(`Logging in as ${username}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <p className="text-center text-sm mt-4">
          Don’t have an account? <a href="/register" className="text-accent">Register</a>
        </p>
      </div>
    </div>
  );
}
