"use client";
import { useEffect, useRef, useState } from "react";
// import EmailForm from "./EmailForm";
import Button from "./Button";
export default function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  function onLinkClick(e: React.MouseEvent, target: string) {
    console.log("LINK CLICKED")
    let el = document.getElementById(target);
    e.preventDefault(); // Stop Page Reloading
    if (!el) return;
    // const top = el.getBoundingClientRect().top - 96
    // window.scroll({-96})
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={`w-screen fixed z-50 top-0 border-b-2 border-gray-900 font-bold text-xl`}>
      {/* <div className="w-full h-8 bg-darkBlue text-center"> We are searching funding, click here</div> */}
      <div className="w-full h-20 bg-black/80 backdrop-blur-md flex flex-row justify-between items-center px-8">
        <div className="w-96">
          <a onPointerDown={(e) => onLinkClick(e, "Gaia-consortium")} className="cursor-pointer">
            Gaia Consortium
          </a>
        </div>

        <div className="lg:hidden relative">
          <button className="navbar-burger flex items-center text-skyBlue p-3" onPointerDown={() => setIsHamburgerOpen(true)}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="flex-row gap-8 hidden lg:flex">
          <a onPointerDown={(e) => onLinkClick(e, "Partners")} className=" cursor-pointer">
            Partners
          </a>
          <a onPointerDown={(e) => onLinkClick(e, "Metacrisis")} className="cursor-pointer">
            Metacrisis
          </a>
          <a onPointerDown={(e) => onLinkClick(e, "Principles")} className="cursor-pointer">
            Principles
          </a>
        </div>
        <div className=" w-96 font-normal text-base hidden lg:flex justify-end">
          <a href="https://forms.gle/hR4zdNmVaYD7EXZQ9" target="_blank">
            <Button text="Get Involved" />
          </a>
        </div>
      </div>
      {isHamburgerOpen && (
        <div className="bg-black rounded-md p-4 absolute inset-0 -right-12 flex flex-col gap-16 w-screen h-screen">
          <button
            className="w-full text-right font-normal px-8 py-2 text-skyBlue"
            onPointerDown={() => setIsHamburgerOpen(false)}>
            X
          </button>
          <div className="flex-col gap-8 flex lg:hidden  ">
            <a
              onPointerDown={(e) => {
                setIsHamburgerOpen(false);
                onLinkClick(e, "Gaia-consortium");
              }}
              className="cursor-pointer">
              Gaia Consortium
            </a>
            <a
              onPointerDown={(e) => {
                setIsHamburgerOpen(false);
                onLinkClick(e, "Partners");
              }}
              className=" cursor-pointer">
              Partners
            </a>
            <a
              onPointerDown={(e) => {
                setIsHamburgerOpen(false);
                onLinkClick(e, "Metacrisis");
              }}
              className="cursor-pointer">
              Metacrisis
            </a>
            <a
              onPointerDown={(e) => {
                setIsHamburgerOpen(false);
                onLinkClick(e, "Principles");
              }}
              className="cursor-pointer">
              Principles
            </a>
          </div>
          <span className="font-normal w-full">
            <a href="https://forms.gle/hR4zdNmVaYD7EXZQ9" target="_blank">
              <Button text="Get Involved" />
            </a>
          </span>
        </div>
      )}
    </nav>
  );
}
