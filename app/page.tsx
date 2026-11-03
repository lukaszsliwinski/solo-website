import NavBar from "@/components/NavBar";
import Landing from "@/sections/Landing";
import Bio from "@/sections/Bio";
import Music from "@/sections/Music";
import Links from "@/sections/Links";

export default function Home() {
  return (
    <main className="w-screen flex flex-col flex-1 items-center justify-center text-theme-light paper">
      <NavBar />
      <Landing />
      <Bio />
      <Music />
      <Links />
    </main>
  );
}
