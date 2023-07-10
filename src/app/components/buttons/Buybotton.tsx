import { WagmiConfig } from "wagmi";
import MigrationModal from "./../migration-modal";
import React, { useState } from "react";
import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
interface Props {
  bgColor: string;
  ftColor: string;
}
const chains = [mainnet];
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const BuyButton: React.FC<Props> = ({ bgColor, ftColor }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className={`bg-${bgColor} !important text-center px-[30px] text-base text-${ftColor} Orbitron px-[30px] font-black py-4 rounded-lg uppercase m-3`}
        onClick={() => setShowModal(true)}
      >
        Buy on Uniswap
      </div>
      <WagmiConfig config={wagmiConfig}>
        {showModal && (
          <MigrationModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </WagmiConfig>
    </>
  );
};

export default BuyButton;
