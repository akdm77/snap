import Body from "./components/layout/Body";
import Navbar from "./components/layout/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white  justify-between ">
      <div className=" text-gray-500 max-w-5xl w-full md:min-w-full bg-white   justify-between font-mono text-sm lg:flex">
        <Navbar/>
        <Body/>
        
      </div>
    </main>
  );
}
