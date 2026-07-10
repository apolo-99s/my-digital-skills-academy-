import { useState } from "react";

const VALID_CODES = [
  "DSA2026",
  "STUDENT01",
  "VIP2026"
];

function Landing({ onEnter }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleAccess = () => {
    const input = code.trim().toUpperCase();

    if (VALID_CODES.includes(input)) {
      setError("");
      onEnter();
    } else {
      setError("Code d'accès invalide");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-96 shadow-2xl">
        <h1 className="text-3xl font-bold mb-2">
          Digital Skills Academy
        </h1>

        <p className="text-gray-400 mb-6">
          Entrez votre code d'accès
        </p>

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access Code"
          className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 outline-none mb-4"
        />

        {error && (
          <p className="text-red-500 mb-3">{error}</p>
        )}

        <button
          onClick={handleAccess}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
        >
          Entrer
        </button>
      </div>
    </div>
  );
}

export default Landing;