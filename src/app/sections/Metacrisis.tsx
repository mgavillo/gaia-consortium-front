import Bg01 from "../../../public/bg01.svg";
import Image from "next/image";


export default function MetaCrisis() {
  return (
    <section id="Metacrisis" className="md:p-24 ">
      <Image src={Bg01} alt="" className="absolute -left-[700px] -top-[800px] blur-[2100px] -z-40 scale-150 opacity-50" width={8000} />
      <h2>the Metacrisis</h2>
      <p className="px-24 md:w-2/3 md:px-0 w-full text-justify text-xl">
        Think of the Metacrisis as a collision of global crises <span className=" italic font-bold">– ecological, psychological, cultural, economic –</span> that combine
        to create total risk for our species and planet. What awaits us on the other side of the Metacrisis – if we survive it:
        a Third Attractor where our global system is intentionally and wisely managed at every scale, creating lasting prosperity
        and resilience for all.
      </p>
    </section>
  );
}
