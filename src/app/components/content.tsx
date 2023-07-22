"use client";

import { useEffect, useState } from "react";
import MigrationModal from "./migration-modal";
import MigrationButton from "./buttons/migrationbutton";
import BuyButton from "./buttons/Buybotton";

const Content = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-row px-5 text-white m-auto justify-center">
      <div className="relative ">
        <div className="relative flex justify-center">
          <img src="/image/content-top.png" />
          <svg
            className="absolute mt-5"
            width="900"
            height="586"
            viewBox="0 0 900 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0 181.095H900M0 286.167H900M0 390.387H900M0 494.596H900M0 76.0243H900M279.462 0V586M164.898 0V586M57.2822 0V586M394.026 0V586M508.59 0V586M623.154 0V586M723.821 0V586M838.385 0V586"
              stroke="url(#paint0_radial_33_31)"
              stroke-width="0.5"
            />
            <defs>
              <radialGradient
                id="paint0_radial_33_31"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(450 293) rotate(90) scale(293 450)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="bg-[url('/image/content-bg.png)]">
          <div className="absolute flex top-[448px] text-[64px] justify-center w-full content-bg.png">
            <p className="flex Orbitron">Introductions</p>
          </div>
          <div className="relative w-full -mt-10 justify-center">
            <svg className="m-auto"
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
          <div className="flex w-full flex-row justify-center"></div>
          <div className="flex text-4 justify-center mt-4 Manrope text-center">
            <p className="flex Manrope leading-9 w-[900px]">
              Tigger is a new crypto meme token that draws inspiration from the
              lovable character from the Winnie the Pooh cartoon. Just like the
              animated Tigger, this token is energetic, enthusiastic, and full
              of life. Tigger brings his trademark love of fun and adventure to
              the Ethereum space, providing a unique and entertaining twist on
              the world of cryptocurrencies.
            </p>
          </div>
          <div className="flex justify-center mt-7">
            <BuyButton bgColor="gradient-to-r from-[#FE8C00] to-[#F83600]" ftColor="white" text="Migrate Now"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
