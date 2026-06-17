import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Landing />
      <Navbar />
      
      <Hero />
    </div>
  );
}