import React from "react";
import { MdContactSupport, MdMail, MdPhone, MdWhatsapp } from "react-icons/md";

function Topper() {
  const pClass = "flex items-center gap-2";
  return (
    <div className=" text-gray-200 text-sm  bg-[#1d1d1d] tracking-tighter ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-end gap-6 py-2">
          <p className={pClass}>
            <MdMail />
            Info@testbedrijf@gmail.test
          </p>
          <p className={pClass}>
            <MdPhone />
            Contact opnemen
          </p>
          <p className={pClass}>
            <MdWhatsapp />
            Whatsapp
          </p>
          <p className={pClass}>
            <MdContactSupport />
            Mijn jobs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topper;
