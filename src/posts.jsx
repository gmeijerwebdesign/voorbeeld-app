import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const functiegroepen = [
  "Procesoperator",
  "Machine operator",
  "Productiemedewerker",
  "Magazijn-/heftruckwerk",
  "Monteur",
  "Leidinggevende",
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
  const [searchJob, setSearchJob] = useState("");
  const [postcode, setPostcode] = useState("");
  const [distance, setDistance] = useState("20km");

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6">
          <h2 className="text-purple-500 font-bold text-xl">VIND JOUW BAAN</h2>
          <input
            type="text"
            placeholder="Procesoperator"
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            className="w-full p-2 rounded text-gray-900 bg-white"
          />
          <input
            type="text"
            placeholder="Plaats of postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="w-full p-2 rounded text-gray-900 bg-white"
          />
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
          <div>
            <h3 className="text-purple-500 font-bold mb-2">FUNCTIEGROEP</h3>
            {functiegroepen.map((group) => (
              <label key={group} className="flex items-center gap-2 mb-1">
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
            <select className="p-2 rounded text-gray-900">
              <option>Sorteren op</option>
            </select>
          </div>

          {vacatures.map((job, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-purple-500 px-3 py-1 rounded-tr-lg font-bold">
                VACATURE
              </div>
              <h3 className="text-purple-500 font-bold text-xl mt-4">
                {job.title}
              </h3>
              <div className="flex gap-4 text-gray-300 mt-2 mb-4">
                <span>{job.location}</span>
                <span>{job.shift}</span>
                <span>{job.group}</span>
                <span>{job.salary}</span>
              </div>
              <p className="text-gray-200">{job.description}</p>

              {/* Gear shape icon can be added as SVG if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vacatures;
