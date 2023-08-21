import dgLogo from "../../../public/DG-Logo.svg"
import timelikeLogo from "../../../public/timelikeLogo.png";
import Image from "next/image";

export default function Partners() {
  return (
    <section id="Partners" className="w-full h-fit gap-8 -mx-24  border-slate-800 bg-opacity-40 px-8 py-8">
      <p className=" text-slate-600 uppercase tracking-wider text-center" >A partnership between sector teams</p>
      <div className="flex flex-row flex-wrap gap-12  w-full items-center justify-center">
        <Image src={dgLogo} alt="Logo of Digital gaia" height={50} />
        <Image src={timelikeLogo} alt="Logo of Timelike" height={50} />
      </div>
    </section>
  );
}