import Quote from "./sections/Quote";
import Partners from "./sections/Partners";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";
import MetaCrisis from "./sections/Metacrisis";
import Principles from "./sections/Principles";


export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-4 -mt-24 overflow-hidden sm:p-4 lg:p-24 xl:p-28">
      <Hero />
      <Partners />
      <MetaCrisis/>
      <Principles/>
      <Quote />
      <CTA />
    </main>
  );
}
