import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../images/ralph_mcquarrie_04.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-end text-white"
      style={{
        backgroundImage: `url(${starWars})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-end p-6 w-1/3">
        <h1 className="text-4xl mb-4">Bienvenido a nuestra aplicación</h1>
        <p className="text-lg mb-6">
          Aquí podrás encontrar todas las naves disponibles y gestionar tus
          preferencias.
        </p>
        <div className="flex justify-center w-full">
          <Link
            to="/starships"
            className="bg-yellow-500 text-black text-lg py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Acceder a las naves
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
