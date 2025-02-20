import React from "react";
import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { mainnet } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import Navbar from "../components/navbar";

import Middlelist from "../components/middlelist";
import Content from "../components/content";

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between hero pb-4 bg-[url('/image/BGbg.png')]">
        <Navbar />
        <Content />
        <Middlelist />
      </div>
    </div>
  );
};

export default Home;
