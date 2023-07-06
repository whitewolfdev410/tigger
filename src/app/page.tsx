import Links from "./components/links";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between hero bg-[#F27C38]">
      <Navbar/>
      <div className="flex flex-row gap-20 justify-between p-24">
        <div className="text-xl mt-20">
          <p className="text-3xl mb-5">INTRODUCTION</p>
          <p>Tigger is a new crypto meme token that draws inspiration from the lovable character from the Winnie the Pooh cartoon. Just like the animated Tigger, this token is energetic, enthusiastic, and full of life. Tigger brings his trademark love of fun and adventure to the Ethereum space, providing a unique and entertaining twist on the world of cryptocurrencies.</p>
          <p className="mt-5 mb-20">CA: 0xc58a9c076B45D219FA6632882F708DE090178897</p>
          <Links></Links>
        </div>
        <img src="tigger.png"/>
      </div>
    </main>
  )
}
