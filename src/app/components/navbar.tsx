"use client";

import { useState } from "react";
import MigrationModal from "./migration-modal"

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <div className="w-full flex flex-row px-48">
            <img src="tigger.png" className="w-16"/>
            <p className="my-auto text-2xl font-bold">Tigger</p>
            <p onClick={()=>{setShowModal(!showModal)}} className="my-auto ml-auto text-xl cursor-pointer">Migrate</p>

            {showModal && (
                <MigrationModal 
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}

export default Navbar