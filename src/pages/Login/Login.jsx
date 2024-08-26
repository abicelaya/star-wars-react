import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import skyStars from "../../images/sky_stars.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${skyStars})`,
      }}
    >
      <div className="card-shape relative">
        <h1 className="text-2xl mb-4 text-white">Login</h1>
        <form onSubmit={handleLogin} className="w-full max-w-xs">
          {error && <p className="text-yellow-200 text-center mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full mb-4 text-stone-400 bg-neutral-800"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full mb-4 text-stone-400 bg-neutral-800"
            required
          />
          <button
            type="submit"
            className={`btn border-none bg-yellow-400 w-full ${
              loading
                ? "bg-custom-yellow cursor-not-allowed"
                : "bg-custom-yellow hover:bg-yellow-300 "
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="mt-4 text-center text-stone-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-300 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
