import { fetchBalance } from "@wagmi/core"
import { EthereumClient } from "@web3modal/ethereum"
import { useState } from "react"
import { useAccount, useBalance, useContractWrite, usePrepareContractWrite } from 'wagmi'
import ERC20 from "../../../blockchain/abi/ERC20.json"

interface Props {
    ethereumClient: EthereumClient
}

const MigrationButton: React.FC<Props> = ({ethereumClient}) => {
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
        <button onClick={()=>{write?.()}} className="bg-[#3396FF] rounded px-5 py-2 transition-all hover:bg-[#479ffd] mt-auto">
            Migrate
        </button>
    )
}

export default MigrationButton