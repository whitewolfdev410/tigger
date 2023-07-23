"use client";

import { useEffect, useState } from "react";
import MigrationModal from "./migration-modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full fixed flex z-10 flex-row justify-between Orbitron px-5 mt-14 xl:px-48">
      <div className="hidden md:block">
        <img src="/image/logo 1.png" />
      </div>
      <div className="hidden md:flex">
        <a className="my-auto ml-auto pointer-events-auto text-sm xl:text-xl text-gray-400 hover:text-white/100 active:border-x-white-400 cursor-pointer uppercase">
          Home
        </a>
        <a className="my-auto ml-auto hover:text-white/100 px-20 text-sm xl:text-xl text-white/60 cursor-pointer uppercase">
          Tokenomics
        </a>
        <a className="my-auto ml-auto hover:text-white/100 text-sm xl:text-xl text-white/60 cursor-pointer uppercase">
          Whitepaper
        </a>
      </div>
      <div className="hidden xl:block">
        <span className="px-6 bg-white/[16%] items-center flex h-12 rounded-lg my-auto ml-auto text-sm xl:text-xl text-white cursor-pointer uppercase">
          Contact Us
        </span>
      </div>
      {showModal && <MigrationModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Navbar;
