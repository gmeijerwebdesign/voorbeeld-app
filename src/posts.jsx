import React, { useState } from "react";
import { FaCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const functiegroepen = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const vacatures = [
  {
    title: "Teamleider Voedingsmiddelenindustrie",
    location: "'s-Hertogenbosch",
    shift: "Dagdienst",
    group: "Leidinggevende",
    salary: "€3500 - 4400 bruto p.m.",
    description:
      "Ben jij een motiverende leider die energie krijgt van een dynamische productieomgeving? ...",
  },
  {
    title: "Machine Operator 2-Ploegendienst",
    location: "Aalst",
    shift: "2 ploegendienst",
    group: "Machine operator",
    salary: "€3160 - 3611 bruto p.m.",
    description:
      "Wil jij aan de slag als Procesoperator bij een traditionele, oer-Hollandse fabriek? ...",
  },
];

function Vacatures() {
  const [distance, setDistance] = useState("20km");

  return (
    <div className=" bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      ></div>

      <div className="relative sm:max-w-7xl sm:mx-auto px-4 sm:px-6 py-6 sm:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6 text-gray-800">
          <h2 className="text-purple-500 font-bold text-2xl">VIND JOUW BAAN</h2>
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
          <select
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-20 p-2 rounded text-gray-900 bg-white"
          >
            <option value="10km">10km</option>
            <option value="20km">20km</option>
            <option value="30km">30km</option>
          </select>

          {/* Functiegroepen */}
          <div className="text-white">
            <h3 className="text-purple-500 font-bold mb-2 text-2xl">
              FUNCTIEGROEP
            </h3>
            {functiegroepen.map((group) => (
              <label
                key={group}
                className="flex items-center gap-2 mb-1 text-sm"
              >
                <input type="checkbox" className="accent-purple-500" />
                <span>{group}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Vacatures list */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <span>{vacatures.length} vacatures</span>
            <select className="p-2 rounded text-white">
              <option>Sorteren op</option>
            </select>
          </div>

          {vacatures.map((job, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg relative overflow-hidden text-sm"
            >
              <Link to="/single-vacature">
                <div className="absolute top-0 left-0 bg-purple-500 px-3 py-1 rounded-tr-lg font-bold">
                  VACATURE
                </div>
                <h3 className="text-purple-500 font-bold text-md text-xl mt-4">
                  {job.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-300 mt-2 mb-4">
                  <span className="font-extrabold flex items-center gap-2">
                    <FaCircle className="text-[8px] text-purple-500" />
                    {job.location}
                  </span>
                  <span className="hidden sm:flex">
                    <span className="font-extrabold flex items-center gap-2">
                      <FaCircle className="text-[8px] text-purple-500" />
                      {job.shift}
                    </span>
                  </span>
                  <span className="font-extrabold flex items-center gap-2">
                    <FaCircle className="text-[8px] text-purple-500" />
                    {job.group}
                  </span>
                  <span className="hidden sm:flex">
                    <span className="font-extrabold flex items-center gap-2">
                      <FaCircle className="text-[8px] text-purple-500" />
                      {job.salary}
                    </span>
                  </span>
                </div>
                <p className="text-gray-200">{job.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vacatures;
