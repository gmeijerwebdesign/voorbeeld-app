import React from "react";
import { CgDice5 } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
  const pClass = "flex text-xl ";
  const iconClass = "relative top-2 text-purple-500 text-bold";
  return (
    <div className="bg-linear-to-r from-gray-900  to-gray-600 ">
      <div className="max-w-7xl mx-auto px-4 py-4 ">
        <div className="flex justify-between text-white">
          <h1 className="flex items-center text-5xl gap-3">
            <CgDice5 className="text-purple-500" />
            ProcessJobs
          </h1>
          <div className="flex items-center gap-4">
            <p className={pClass}>
              Ik zoek werk
              <MdOutlineKeyboardArrowDown className={iconClass} />
            </p>
            <p className={pClass}>
              Ik zoek personeel
              <MdOutlineKeyboardArrowDown className={iconClass} />
            </p>
            <p className={pClass}>
              Over ons
              <MdOutlineKeyboardArrowDown className={iconClass} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
