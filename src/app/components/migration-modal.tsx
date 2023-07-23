"use client";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import {
  configureChains,
  createConfig,
  useAccount,
  useDisconnect,
} from "wagmi";
import { mainnet } from "wagmi/chains";
import MigrationButton from "./buttons/migrationbutton";
import { useEffect, useState } from "react";

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const MigrationModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  
  const chains = [mainnet];
  const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  const { isConnected, isConnecting, isDisconnected, status, address } = useAccount();    
  const { disconnect } = useDisconnect();
  const [walletAddress, setWalletAddress] = useState('');
  useEffect(() => {
    if (isConnected && address) {
      const truncatedAddress = `${address.substring(0, 5)}.....${address.substring(address.length-5, address.length-1)}`;
      setWalletAddress(truncatedAddress);
    }
  }, [isConnected, address]);


  return (
    <div
      className={`${
        !showModal && "hidden"
      } fixed top-0 left-0 w-[100vw] h-[100vh] flex bg-black/20 backdrop-blur-md`}
    >
      <div className="m-auto rounded-lg text-4 md:w-[840px] w-[90vw] md:h-[488px] flex flex-col bg-[url(/image/migration-modal-bg.png)] bg-cover bg-no-repeat bg-center">
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient}  />
        <p className="relative text-white text-center text-2xl md:text-5xl font-medium Orbitron mt-[60px]">
          Migrate Your Tokens
        </p>
        <div className="md:w-[680px] h-[132px] mt-[8%] bg-[#FFFFFF]/10 m-auto rounded-2xl">
          <div className="flex items-center justify-between px-9 py-9">
            <div className="relative flex items-center">
              <img src="/image/connect-modal-icon.png" />
              <div className="mx-5 text-20 w-[204px]">
                {!isConnected
                  ? "Connect Your Wallet"
                  : walletAddress}
              </div>
              <div className="absolute opacity-[0] flex mx-auto md:w-[400px] web3-button">
                  <Web3Button />
              </div>
            </div>
            {isConnected && (
              <div>
                <button
                  onClick = {()=>disconnect()}
                  className="font-black text-[#FF3B2F]"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex  mb-[60px] md:m-auto justify-between gap-5 md:gap-0 mx-auto mt-10 md:mt-0">
          <div>
            <MigrationButton />
          </div>
          <div>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="text-4 py-4 px-5 md:px-20 align-center Orbitron font-black text-black rounded-lg bg-white/100 cursor-pointer"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationModal;
