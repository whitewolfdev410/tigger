"use client";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button, useWeb3Modal } from "@web3modal/react";
import {
  configureChains,
  createConfig,
  useAccount,
  useDisconnect,
} from "wagmi";
import { mainnet } from "wagmi/chains";
import MigrationButton from "./buttons/migrationbutton";

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
  const { isConnected, isConnecting, isDisconnected, status } = useAccount();    
  const { disconnect } = useDisconnect();
  console.log(isConnected, isConnecting, isDisconnected, status);

  return (
    <div
      className={`${
        !showModal && "hidden"
      } fixed top-0 left-0 w-[100vw] h-[100vh] flex bg-black/20 backdrop-blur-md`}
    >
      <div className="m-auto rounded-lg text-4 w-[840px] h-[488px] flex flex-col bg-[url(/image/migration-modal-bg.png)] ">
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient}  />
        <p className="relative text-white text-center text-5xl font-medium Orbitron mt-[60px]">
          Migrate Your Tokens
        </p>
        <div className="w-[680px] h-[132px] mt-[8%] bg-[#FFFFFF]/10 m-auto rounded-2xl">
          <div className="flex items-center justify-between px-9 py-9">
            <div className="relative flex items-center">
              <img src="/image/connect-modal-icon.png" />
              <div className="mx-5 text-20 w-[204px]">
                {!isConnected
                  ? "Connect Your Wallet"
                  : " Wallet Owner Name. Your Wallet is Connected "}
              </div>
              <div className="absolute opacity-[0] flex mx-auto w-[400px] web3-button">
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
        <div className="flex w-[70%] mb-[60px] m-auto justify-between">
          <div>
            <MigrationButton />
          </div>
          <div>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="text-4 py-4 px-20 align-center Orbitron font-black text-black rounded-lg bg-white/100 cursor-pointer"
            >
              {isConnected ? "CANCEL NOW" : "CANCEL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationModal;
