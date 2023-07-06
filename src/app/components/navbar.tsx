"use client";

import { useEffect, useState } from "react";
import MigrationModal from "./migration-modal"

const Navbar = () => {
    const [showModal, setShowModal] = useState(true)
    
    return (
        <div className="w-full flex flex-row px-48">
            <img src="tigger.png" className="w-16"/>
            <p className="my-auto text-2xl font-bold">Tigger</p>
            <p onClick={()=>{setShowModal(true)}} className="my-auto ml-auto text-xl cursor-pointer">Migrate</p>

            {showModal && (
                <MigrationModal 
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default Navbar