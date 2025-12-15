import React from "react";
import img from "../assets/bg.jpg";
import { FaPlus } from "react-icons/fa";
function Banner() {
  return (
    <div
      className="relative h-[90vh]  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Content */}
      <div className="relative max-w-7xl  mx-auto px-6 top-25 ">
        <h1 className=" text-purple-500 text-5xl font-bold uppercase">
          Uitdagende banen in de proces-<br></br> en maakindustrie
        </h1>
        {/* Search */}
        <div className="py-6 flex gap-2">
          <input
            type="text"
            placeholder="Procesoperator"
            className="py-5 px-2 rounded w-62.5 text-md  bg-white"
          />
          <input
            type="text"
            placeholder="Plaats of postcode"
            className="py-5 px-2 rounded w-62.5 text-md  bg-white"
          />
          <select className="border rounded px-2 py-1 bg-white rounded outline-none">
            <option value="2">2 km</option>
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="25">25 km</option>
            <option value="50">50 km</option>
          </select>
          <button className="p-4 bg-purple-500 font-bold text-md rounded hover:bg-purple-700 hover:text-black text-purple-900 transition duration-200 ease-in">
            TOON VACATURES
          </button>
        </div>
        {/* additionals */}
        <div className="text-white flex gap-2">
          <div className="flex flex-col">
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Altijd oprechte aandacht
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Expert binnen de branche
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              Langdurige samenwerkingen
            </p>
            <p className="flex items-center gap-1 font-semibold">
              <FaPlus className="text-sm text-purple-500" />
              De bemiddelaar naar vaste banen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
