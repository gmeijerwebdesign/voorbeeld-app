import React from "react";
import { CgDice5 } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const functiegroepen = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const vestigingen = ["Arnhem", "Breda", "Den Bosch", "Eindhoven"];

  const processJobsLinks = [
    "Over ProcessJobs",
    "Onze vestigingen",
    "Nieuws",
    "Contact",
    "Werken bij ProcessJobs",
  ];

  const newsletterLinks = [
    "Aanmelden nieuwsbrief",
    "Ik zoek werk",
    "Ik zoek personeel",
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="sm:max-w-7xl sm:mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-purple-500 font-bold mb-4">FUNCTIEGROEPEN</h4>
          <ul className="space-y-2 text-sm">
            {functiegroepen.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-purple-500 font-bold mb-4">VESTIGINGEN</h4>
          <ul className="space-y-2 text-sm">
            {vestigingen.map((locatie) => (
              <li key={locatie}>{locatie}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-purple-500 font-bold mb-4">
            ALTIJD OP DE HOOGTE
          </h4>
          <ul className="space-y-2 mb-4 text-sm">
            {newsletterLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
          <div className="flex gap-2 text-sm">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded hover:bg-purple-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded hover:bg-purple-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded hover:bg-purple-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded hover:text-purple-500 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-purple-500 font-bold mb-4">PROCESSJOBS</h4>
          <ul className="space-y-2 mb-4 text-sm">
            {processJobsLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
          <p>info@processjobs.nl</p>
          <p className="flex items-center gap-2">
            <FaWhatsapp /> WhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="flex items-center gap-2">
          <CgDice5 className="w-6 h-6 text-purple-500 " />
          <span className="font-semibold text-white">ProcessJobs</span>
          <span className="ml-4">Privacy • Disclaimer</span>
        </div>
        <div className="mt-4 md:mt-0 text-purple-500 font-semibold">
          we'll make it work
        </div>
      </div>
    </footer>
  );
}

export default Footer;
