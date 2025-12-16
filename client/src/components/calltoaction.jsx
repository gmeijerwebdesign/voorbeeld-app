import React from "react";
import { Link } from "react-router-dom";

const jobsLeft = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const jobsRight = ["TEST", "TEST-/TESTTEST", "TESTTESTETETSTEST"];

function CallToAction() {
  return (
    <div className=" bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 ">
      <div className=" sm:max-w-7xl sm:mx-auto px-2 sm:px-4 ">
        <div className="sm:max-w-7xl sm:mx-auto">
          <div className="mb-12 text-sm">
            <h2 className="text-2xl sm:text-4xl font-bold text-purple-500 mb-4">
              WIJ ZORGEN VOOR DE JUISTE MATCH!
            </h2>
            <p className="mb-4 text-gray-200 sm:max-w-152.5">
              Een nieuwe baan vinden in de techwereld is niet moeilijk. Maar hoe
              zorg je voor een échte klik tussen jou en je toekomstige
              werkgever? Bij ProcessJobs geloven we in het zorgvuldig koppelen
              van ontwikkelaar en opdrachtgever. We luisteren aandachtig naar
              jouw verhaal en ambities, en naar de wensen van onze
              opdrachtgever. Met onze kennis van de software- en IT-sector
              kunnen we perfect inschatten of we de juiste match kunnen maken.
              Zo zorgen we ervoor dat jij een baan krijgt die je verdient en die
              écht bij je past – uitdagend, leerzaam en op maat voor jouw
              skills.
            </p>
            <p className="mb-6 text-gray-200 sm:max-w-152.5">
              Met onze kennis van alle facetten binnen de proces- en
              maakindustrie kunnen wij uitstekend inschatten of we de juiste
              match kunnen maken. Dit, zodat jij een baan krijgt die je verdient
              en die écht bij je past!
            </p>
            <button className="bg-purple-500 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-green-500 transition">
              <Link to="/vacatures">VACATURES BEKIJKEN</Link>
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-purple-500 mb-6">
              VACATURES PER FUNCTIE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {jobsLeft.map((job) => (
                  <div
                    key={job}
                    className="flex text-sm justify-between items-center border-b border-gray-700 py-2 cursor-pointer hover:text-purple-500 transition"
                  >
                    <Link to="/vacatures">
                      <span className="font-semibold">{job}</span>
                      <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-sm">
                {jobsRight.map((job) => (
                  <div
                    key={job}
                    className="flex lowercase text-sm justify-between items-center border-b border-gray-700 py-2 cursor-pointer hover:text-purple-500 transition"
                  >
                    <Link to="/vacatures">
                      <span className="font-semibold">{job}</span>
                      <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-purple-500 hover:underline text-xs">
                Meer functies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
