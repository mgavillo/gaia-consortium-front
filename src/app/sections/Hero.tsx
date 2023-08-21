import EmailForm from "@/components/EmailForm";
import Bg02 from "../../../public/bg02.svg";
import hologram from "../../../public/holograms.svg";
import holograms from "../../../public/hologramss.svg";
import Image from "next/image";
import Partners from "./Partners";

export default function Hero() {
  return (
    <section id="Gaia-consortium" className="justify-start flex-row">
      {/* <Image
        src={Bg02}
        alt=""
        width={5000}
        className="absolute -z-50 -top-[600px] -right-[600px] blur-[200px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      /> */}
      <div className="flex flex-col gap-16 w-[850px] h-full justify-center py-20 mt-56 md:mt-0">
        <h1 className="bg-gradient-to-bl from-lightBlue via-skyBlue to-darkBlue bg-clip-text text-transparent">
          Gaia Consortium
        </h1>
        <p>
          We&apos;re a group of science and tech organizations collaborating to create a universal system for decentralized
          planetary-scale modeling, decision-making, and automation. Our goal is to help humanity address 21st-century
          challenges like climate change and AI alignment, fostering a positive future for our planet.
        </p>
        <span className="w-full md:w-96">
          <EmailForm />
        </span>
      </div>
      <div className="absolute -z-40 right-0 top-0 -mr-0 w-full flex items-center justify-end h-full -mt-[350px] md:mt-0 md:-mr-[200px]">
        <Image className=" scale-150 md:scale-100" src={holograms} alt="hologram of the globe"  />
        {/* <Image
          src={Bg02}
          alt=""
          width={5000}
          className="absolute inset-0 w-full h-full"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}
      </div>
      <div className="absolute bottom-0 w-screen left-0 right-0 -ml-4">{/* <Partners/> */}</div>
    </section>
  );
}
