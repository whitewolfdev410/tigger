import Links from "./components/links";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col xl:items-center xl:justify-between hero bg-[#F27C38]">
      <Navbar/>
      <div className="flex flex-col xl:flex-row gap-20 justify-between p-5 xl:p-24">
        <div className="text-xl mt-20 flex flex-col">
          <p className="text-3xl mb-5">INTRODUCTION</p>
          <p>Tigger is a new crypto meme token that draws inspiration from the lovable character from the Winnie the Pooh cartoon. Just like the animated Tigger, this token is energetic, enthusiastic, and full of life. Tigger brings his trademark love of fun and adventure to the Ethereum space, providing a unique and entertaining twist on the world of cryptocurrencies.</p>
          <p className="mt-5 mb-20 hidden xl:block">CA: 0xc58a9c076B45D219FA6632882F708DE090178897</p>
          <p className="mt-5 mb-20 block xl:hidden">CA: 0xc58a....8897</p>
          <Links></Links>
        </div>
        <img className="max-w-[80vw] mx-auto" src="tigger.png"/>
      </div>
    </div>
  )
}
