import { fetchBalance } from "@wagmi/core"
import { EthereumClient } from "@web3modal/ethereum"
import { useState } from "react"
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite } from 'wagmi'
import ERC20 from "../../../blockchain/abi/ERC20.json"


const MigrationButton = () => {
    const {data, isError, isLoading} = useBalance({
        address: useAccount().address as `0x${string}`,
        token: (process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? "") as `0x${string}`
    })

    const {config} = usePrepareContractWrite({
        address: (process.env.NEXT_PUBLIC_TOKEN_ADDRESS ?? "") as `0x${string}`,
        abi: ERC20.abi,
        functionName: "transfer",
        args: [process.env.NEXT_PUBLIC_MIGRATION_WALLET_ADDRESS, data?.value]
    })

    const {write} = useContractWrite(config)

    return (
        <button onClick={()=>{write?.()}} className="bg-gradient-to-r from-[#FE8C00] to-[#F83600] whitespace-nowrap rounded px-5 py-2 md:w-[240px] h-[56px] text-4 hover:bg-[#479ffd] mt-auto uppercase Orbitron">
            Migrate Now
        </button>
    )
}

export default MigrationButton