"use client";

import Button from "@/components/Button";
import Image from "next/image";
import EmailForm from "@/components/EmailForm";
import { OrSeparator } from "@/components/Separator";
import { useEffect, useState } from "react";
import Bg02 from "../../../public/bg02.svg";
export default function CTA() {
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" && window.innerWidth <= 767.98);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 767.98);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="">
      <h2 className="w-full text-center">Let&apos;s do this together</h2>
      <div className="w-full flex flex-row flex-wrap  md:flex-nowrap gap-12 ">
        <div className="w-full h-56 flex flex-col items-start justify-center rounded-md p-8 bg-slate-800 gap-6 border border-gray-800 bg-opacity-30 min-w-[330px]">
          <h3>Stay Informed</h3>
          <p>Subscribe to our newsletter to get news and updates about the Gaia Consortium</p>
          <EmailForm />
        </div>
        <span className="h-1 w-full md:w-2 md:h-56 relative">
          <div className="bg-gradient-radial from-skyBlue to-darkBlue w-[800px] h-56 rounded-full absolute -ml-[200px] md:-ml-[400px] -mt-[100px] md:mt-0 blur-[400px] opacity-[15%] -z-40" />
          <OrSeparator orientation={isMobile ? "vertical" : "horizontal"} />
        </span>
        <div className="w-full h-56 flex flex-col items-start justify-center rounded-md p-8 gap-6 bg-slate-800 border border-gray-800 bg-opacity-30 min-w-[330px]">
          <h3>Join the Consortium</h3>
          <p>Want to help us build the Consortium, as an individual or organization? </p>
          <div className="w-full flex flex-row justify-end">
            <Button text="Get in touch!" />
          </div>
        </div>
      </div>
    </section>
  );
}
