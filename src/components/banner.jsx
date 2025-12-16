import React from "react";
import gif from "../assets/vid.gif";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat shadow-2xl"
      style={{ backgroundImage: `url(${gif})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-7xl mx-auto px-6 top-25">
        <h1 className="text-purple-500 text-5xl font-extrabold uppercase">
          Uitdagende banen in de IT-
          <br /> en Software Development
        </h1>

        <div className="py-6 flex gap-2">
          <select className="border rounded px-2 w-55 py-2 bg-white outline-none">
            <option value="all">Functienaam</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
          </select>
          <select className="border rounded px-2 w-55 py-2 bg-white outline-none">
            <option value="all">Dienstverband</option>
            <option value="full">Fulltime</option>
            <option value="part">Parttime</option>
            <option value="bij">Bijbaan</option>
          </select>
          <select className="border rounded px-2 py-1 bg-white outline-none">
            <option value="2">2 km</option>
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="25">25 km</option>
            <option value="50">50 km</option>
          </select>
          <button className="p-4 bg-purple-500 font-bold text-md rounded hover:bg-purple-700 hover:text-black text-purple-900 transition duration-200 ease-in">
            <Link to="/vacatures">TOON VACATURES</Link>
          </button>
        </div>

        <div className="text-white flex gap-2">
          <div className="flex flex-col">
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Oplossing op maat voor jouw project
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Expertise in moderne technologieën
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Schaalbare en onderhoudbare code
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Samenwerking aan langdurige projecten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
