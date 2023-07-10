import Links from "./components/links";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Middlelist from "./components/middlelist";
import Tokenomics from "./components/Tokenomics";
export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col xl:items-center xl:justify-between hero pb-4 bg-[url('/image/BGbg.png')]">
        <Navbar />
        <Content />
        <Middlelist />
      </div>
    </div>
  );
}
