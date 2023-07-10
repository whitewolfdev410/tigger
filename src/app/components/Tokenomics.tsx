"use client";
import BuyButton from "./buttons/Buybotton";
import { useEffect, useState } from "react";
import MigrationModal from "./migration-modal";

const Tokenomics = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full flex flex-row justify-between bg-no-repeat px-5 mt-[78px] xl:px-48">
      <div className="flex"></div>
      <div>
        <div>
          <p className="text-[64px] text-white Orbitron">Tokenomics</p>
        </div>
        <div>
          <svg
            width="120"
            height="8"
            viewBox="0 0 120 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="-6.10352e-05"
              width="120"
              height="8"
              rx="4"
              fill="url(#paint0_linear_11_134)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_134"
                x1="0"
                y1="-6.10352e-05"
                x2="1.06195"
                y2="15.9291"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FE8C00" />
                <stop offset="1" stop-color="#F83600" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="my-4 text-white Manrope">
          <ol className="text-white text-base">
            <li className="mt-3">Total Supply: 100,000,000 $TIGGER</li>
            <li className="mt-3">Buys & Sells will be taxed 0%</li>
            <li className="mt-3">LP Burned</li>
            <li className="mt-3">Ownership Renounced</li>
          </ol>
        </div>
        <div className="mt-10 text-white">
          <BuyButton bgColor={'white'} ftColor="black"/>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
