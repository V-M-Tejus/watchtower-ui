import { useState } from "react";
import Button from "../components/Button";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Placeholder for register functionality
    alert(`Registering user: ${username}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="text-accent">Login</a>
        </p>
      </div>
    </div>
  );
}
