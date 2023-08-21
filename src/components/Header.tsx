"use client";
import { useEffect, useRef, useState } from "react";
import EmailForm from "./EmailForm";
export default function Header() {
  function onLinkClick(e: React.MouseEvent, target: string) {
    let el = document.getElementById(target);
    e.preventDefault(); // Stop Page Reloading
    if (!el) return;
    // const top = el.getBoundingClientRect().top - 96
    // window.scroll({-96})
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`w-screen fixed z-50 top-0 border-b-2 border-gray-900 font-bold text-xl`}>
      {/* <div className="w-full h-8 bg-darkBlue text-center"> We are searching funding, click here</div> */}
      <div className="w-full h-20 bg-black/80 backdrop-blur-md flex flex-row justify-between items-center px-8">
        <div className="w-96">
          <a onClick={(e) => onLinkClick(e, "Gaia-consortium")} className="cursor-pointer">
            Gaia Consortium
          </a>
        </div>
        <div className="flex flex-row gap-8">
          <a onClick={(e) => onLinkClick(e, "Partners")} className=" cursor-pointer">
            Partners
          </a>
          <a onClick={(e) => onLinkClick(e, "Metacrisis")} className="cursor-pointer">
            Metacrisis
          </a>
          <a onClick={(e) => onLinkClick(e, "Principles")} className="cursor-pointer">
            Principles
          </a>
        </div>
        <div className=" w-96 font-normal text-base">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
