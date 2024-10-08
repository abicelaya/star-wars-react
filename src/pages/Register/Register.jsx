import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import skyStars from "../../images/sky_stars.webp";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
        <form onSubmit={handleRegister} className="w-full max-w-xs">
          <h2 className="text-2xl mb-4 text-white">Register</h2>
          {error && <p className="text-yellow-200 text-center mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full mb-4 text-white bg-neutral-800"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full mb-4 text-white bg-neutral-800"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full mb-4 text-white bg-neutral-800"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered w-full mb-4 text-white bg-neutral-800"
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
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="mt-4 text-center text-stone-400">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-200 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
