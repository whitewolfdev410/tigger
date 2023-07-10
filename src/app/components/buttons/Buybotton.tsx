import Link from "next/link";
import MigrationModal from "./../migration-modal";
import React, { useState } from "react";

interface Props {
  bgColor: string;
  ftColor: string;
}

const BuyButton: React.FC<Props> = ({ bgColor, ftColor }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`bg-${bgColor} text-center px-[30px] text-base text-${ftColor} Orbitron px-[30px] font py-4 rounded-lg uppercase m-3`}
        onClick={() => setShowModal(true)}
      >
        Buy on Uniswap
      </button>
      {showModal && <MigrationModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default BuyButton;