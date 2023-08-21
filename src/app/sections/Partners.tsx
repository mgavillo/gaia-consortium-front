import dgLogo from "../../../public/DG-Logo.svg";
import timelikeLogo from "../../../public/timelikeLogo.png";
import Image from "next/image";

export default function Partners() {
  return (
    <section id="Partners" className="w-full h-fit gap-8 -mx-24  border-slate-800 bg-opacity-40 p-0 md:p-8">
      <p className=" text-slate-600 tracking-wider text-center italic font-serif">An open alliance between:</p>
      <div className="flex flex-row flex-wrap gap-4 md:gap-12 w-full items-center justify-center">
        <Image src={dgLogo} alt="Logo of Digital gaia" className="h-6 md:h-12 w-auto" />
        <Image src={timelikeLogo} alt="Logo of Timelike" className="h-6 md:h-12 w-auto" />
      </div>
    </section>
  );
}
