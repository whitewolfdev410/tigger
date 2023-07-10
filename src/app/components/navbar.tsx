"use client";

import { useEffect, useState } from "react";
import MigrationModal from "./migration-modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full fixed flex z-10 flex-row justify-between Orbitron px-5 mt-14 xl:px-48">
      <div>
        <img src="/image/logo 1.png" />
      </div>
      <div className="flex">
        <p className="my-auto ml-auto pointer-events-auto text-xl text-gray-400 hover:text-white/100 cursor-pointer uppercase">
          Home
        </p>
        <p className="my-auto ml-auto hover:text-white/100 px-20 text-xl text-white/60 cursor-pointer uppercase">
          Tocenomics
        </p>
        <p className="my-auto ml-auto hover:text-white/100  text-xl text-white/60 cursor-pointer uppercase">
          Whiteprper
        </p>
      </div>
      <div>
        <span className="px-6 bg-white/[16%] items-center flex h-12 rounded-lg my-auto ml-auto text-xl text-white cursor-pointer uppercase">
          contact us
        </span>
      </div>
      {showModal && <MigrationModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Navbar;
