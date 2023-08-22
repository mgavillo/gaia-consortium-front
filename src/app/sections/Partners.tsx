import dgLogo from "../../../public/DG-Logo.svg";
import timelikeLogo from "../../../public/timelikeLogo.png";
import Image from "next/image";
import buckminsterLogo from "../../../public/buckminsterLogo.svg";

export default function Partners() {
  return (
    <section id="Partners" className="p-0 md:p-8 md:py-24">
      <p className=" text-slate-500 tracking-wider text-center italic">An open alliance between:</p>
      <div className="flex flex-row flex-wrap gap-4 md:gap-12 w-full items-center justify-center">
        <a href="https://www.digitalgaia.earth/" target="_blank">
          <Image src={dgLogo} alt="Logo of Digital gaia" className="h-6 md:h-12 w-auto" />
        </a>
        <a href="http://www.timelikesystems.com/about.html" target="_blank">
          <Image src={timelikeLogo} alt="Logo of Timelike" className="h-6 md:h-12 w-auto" />
        </a>
        <a href="https://www.bfi.org/" target="_blank">
          <Image src={buckminsterLogo} alt="Logo of the Buckminster Fuller Institute" className="h-6 md:h-12 w-auto" />
        </a>
        <a href="https://evolution.ml/" target="_blank" className="h-6 md:text-xl font-bold">
          Evolutionary AI
        </a>
      </div>
    </section>
  );
}
