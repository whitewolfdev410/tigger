"use client";

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3Button } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import MigrationButton from './buttons/migrationbutton';

const chains = [mainnet]
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

interface Props {
    setShowModal: (showModal: boolean) => void
}

const MigrationModal: React.FC<Props> = ({setShowModal}) => {
    return (
        <div className={`${!showModal&&'hidden'} fixed top-0 left-0 w-[100vw] h-[100vh] flex bg-black/20 backdrop-blur-md`}>
            <WagmiConfig config={wagmiConfig}>
                <div className="m-auto bg-white rounded-lg text-4 shadow-lg w-[40vh] h-[50vh] flex flex-col">
                    <Web3Modal projectId={projectId} ethereumClient={ethereumClient}/>
                    <p onClick={()=>{setShowModal(false)}} className="text-black text-[40px] mr-3 text-right cursor-pointer">x</p>
                    <p className="text-black text-center text-lg mb-10">Migrate Tokens</p>

                    <div className="mx-auto">
                        <Web3Button/>
                    </div>
                    
                    <MigrationButton
                        ethereumClient={ethereumClient}
                    />
                </div>
            </WagmiConfig>
        </div>
    )
}

export default MigrationModal