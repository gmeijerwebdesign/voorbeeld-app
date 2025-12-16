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
      <div className="relative sm:max-w-7xl sm:mx-auto px-4 sm:px-6 top-10 sm:top-25">
        <h1 className="text-purple-500 text-2xl sm:text-5xl font-extrabold uppercase">
          Uitdagende banen in de IT-
          <br /> en Software Development
        </h1>

        <div className="py-6 flex flex-col  sm:flex-row gap-2">
          <select className="border rounded px-2 sm:w-55 py-4 bg-white outline-none">
            <option value="all">Functienaam</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
          </select>
          <select className="border rounded px-2 sm:w-55 py-4 bg-white outline-none">
            <option value="all">Dienstverband</option>
            <option value="full">Fulltime</option>
            <option value="part">Parttime</option>
            <option value="bij">Bijbaan</option>
          </select>
          <select className="border rounded px-2 py-4 w-20 bg-white outline-none">
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

        <div className="text-white flex flex-col sm:flex-row gap-2 text-[12px]">
          <div className="flex flex-col ">
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className=" text-purple-500" />
              Oplossing op maat voor jouw project
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className=" text-purple-500" />
              Expertise in moderne technologieën
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className=" text-purple-500" />
              Schaalbare en onderhoudbare code
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className=" text-purple-500" />
              Samenwerking aan langdurige project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
