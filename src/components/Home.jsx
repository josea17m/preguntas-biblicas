/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ setName }) => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-10 w-screen h-screen text-center">
      <h1 className="uppercase w-full bg-[#004e72] text-white py-10">
        Reto Bíblico
      </h1>

      <Link
        to="partida"
        className="bg-[#0195da] w-1/2 h-20 flex justify-center shadow-xl duration-300"
      >
        <p className="relative top-1/3">Jugar</p>
      </Link>

      <input
        className="bg-slate-800 outline-none p-10 text-white"
        type="text"
        placeholder="Ingresa un nombre"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Home;
