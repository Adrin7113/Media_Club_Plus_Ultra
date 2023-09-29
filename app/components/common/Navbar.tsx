"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const location = pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const [drop, setDrop] = useState(false);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-screen h-[100px] flex items-center justify-between px-6 md:px-12 z-50 transition-all ease-in-out duration-500 ${
          scroll && !drop ? "wBE bg-black/50" : ""
        }`}
      >
        <Link href="/">
          <Image
            onClick={() => setDrop(!drop)}
            width={200}
            height={200}
            src="/svg/mediaLogo.svg"
            alt="Mits Media Club Logo"
            className="cursor-pointer"
          />
        </Link>
        <Image
          onClick={() => setDrop(!drop)}
          src="/img/navIcon.png"
          alt="NavIcon"
          width={45}
          height={45}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`wBE bg-black fixed top-0 left-0 overflow-hidden w-screen z-40 transition-all ease-in-out duration-700 flex flex-col items-center ${
          drop ? "h-screen pt-5" : "h-0"
        }`}
      >
        <div className="m-28 mt-[100px] w-[75%] geo flex flex-col gap-5">
          <Link href="/">
            <h1
              className={`${
                location == "/"
                  ? "text-red-600 border-red-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Home
            </h1>
          </Link>
          <Link href="/events">
            <h1
              className={`${
                location == "/events"
                  ? "text-red-600 border-red-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Events
            </h1>
          </Link>
          <Link href="/radio">
            <h1
              className={`${
                location == "/radio"
                  ? "text-red-600 border-red-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Radio
            </h1>
          </Link>
          <Link href="/core">
            <h1
              className={`${
                location == "/core"
                  ? "text-red-600 border-red-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Core
            </h1>
          </Link>
          <a href="mailto:mediaclub@mgits.ac.in">
            <h1
              className={`text-white border-white font-bold text-5xl  w-full border-b-2 pb-5 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Contact
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
