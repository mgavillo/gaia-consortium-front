import Bg01 from "../../../public/bg01.svg";
import Image from "next/image";


export default function MetaCrisis() {
  return (
    <section id="Metacrisis" className="md:p-24  ">
      <Image src={Bg01} alt="" className="absolute -left-[700px] -top-[100px] blur-[1100px] -z-40" width={8000} />
      <h2>the Metacrisis</h2>
      <p className=" w-full md:w-1/2 text-center">
        Think of the Metacrisis as a collision of global crises – ecological, psychological, cultural, economic – that combine
        to create total risk for our species and planet. What awaits us on the other side of the Metacrisis – if we survive it:
        a Third Attractor where our global system is intentionally and wisely managed at every scale, creating lasting prosperity
        and resilience for all.
      </p>
    </section>
  );
}
