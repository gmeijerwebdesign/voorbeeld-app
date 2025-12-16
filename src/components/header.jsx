import { useState } from "react";
import { CgDice5 } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const pClass = "flex text-[17px] relative cursor-pointer";
  const iconClass = "relative top-2 text-purple-500 font-bold";

  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black sm:bg-linear-to-r from-black to-slate-800 shadow-2xl tracking-tighter">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between text-white items-center">
          <h1 className="flex items-center text-3xl sm:text-4xl  gap-3 font-extrabold">
            <CgDice5 className="text-purple-500" />
            <Link to="/">
              Dev<span className="italic">Bridge</span>
            </Link>
          </h1>

          <div className="hidden sm:flex items-center gap-4 relative text-xs">
            <div
              className="relative"
              onMouseEnter={() => setHovered("werk")}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to="/vacatures">
                <p className={pClass}>
                  Ik zoek werk
                  <MdOutlineKeyboardArrowDown className={iconClass} />
                </p>
              </Link>
              {hovered === "werk" && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-white text-black rounded shadow-lg p-4 z-10">
                  <h3 className="font-bold mb-2">Op zoek naar een baan?</h3>
                  <p>
                    Bekijk onze vacatures en vind een baan die echt bij je past.
                  </p>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setHovered("personeel")}
              onMouseLeave={() => setHovered(null)}
            >
              <Link to="/vacatures">
                <p className={pClass}>
                  Ik zoek personeel
                  <MdOutlineKeyboardArrowDown className={iconClass} />
                </p>
              </Link>
              {hovered === "personeel" && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-white text-black rounded shadow-lg p-4 z-10">
                  <h3 className="font-bold mb-2">Personeel gezocht?</h3>
                  <p>
                    We koppelen zorgvuldig werknemers aan jouw organisatie voor
                    de perfecte match.
                  </p>
                </div>
              )}
            </div>

            <p className={pClass}>Over ons</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
