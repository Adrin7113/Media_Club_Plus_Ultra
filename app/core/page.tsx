"use client";

import { useState } from "react";

import Intro from "@/components/core/Intro";
import Cards from "@/components/core/Cards";
import Creators from "@/data/creators.json";
import Current from "@/data/current.json";
import Founders from "@/data/founders.json";
import Previous from "@/data/previous.json";
import Image from "next/image";

export default function Core() {
  const [dropFirst, setDropFirst] = useState(true); /*CURRENT LEADS */
  const [dropSecond, setDropSecond] = useState(false); /*PREVIOUS LEADS */
  const [dropThird, setDropThird] = useState(false); /*FOUNDERS */
  const [dropFourth, setDropFourth] = useState(false); /*WEBSITE CREATORS */
  return (
    <div className="relative min-h-screen w-screen px-6 pb-10 bg-black">
      <Intro />
      <div className="pt-4"></div>
      <div className="h-[50px] flex my-5">
        <div className="w-[90%] h-full border-b-[1px] border-red-600 geo">
          <h1 className="text-2xl md:text-3xl text-red-600 font-bold geo">
            CORE TEAM &apos;23
          </h1>
        </div>
        <div className="w-[10%] h-full flex border-b-[1px] md:border-b-0 border-red-600 justify-end geo">
          <Image
            width={500}
            height={500}
            src="/core/drop.svg"
            alt="DropDown"
            className={`h-6 w-6 transition-all ease-in-out duration-500 cursor-pointer ${
              dropFirst ? "rotate-180" : ""
            }`}
            onClick={() => setDropFirst(!dropFirst)}
          />
        </div>
      </div>
      <div
        className={`${
          dropFirst ? "dropDownActive" : "dropDown"
        } overflow-hidden`}
      >
        <Cards data={Current} />
      </div>
      <div className="h-[50px] flex my-5">
        <div className="w-[90%] h-full border-b-[1px] border-red-600 geo">
          <h1 className="text-2xl md:text-3xl text-red-600 font-bold geo">
            2022 LEADS
          </h1>
        </div>
        <div className="w-[10%] h-full flex border-b-[1px] md:border-b-0 border-red-600 justify-end geo">
          <Image
            width={500}
            height={500}
            src="/core/drop.svg"
            alt="DropDown"
            className={`h-6 w-6 transition-all ease-in-out duration-500 cursor-pointer ${
              dropSecond ? "rotate-180" : ""
            }`}
            onClick={() => setDropSecond(!dropSecond)}
          />
        </div>
      </div>
      <div
        className={`${
          dropSecond ? "dropDownActive" : "dropDown"
        } overflow-hidden`}
      >
        <Cards data={Previous} />
      </div>
      <div className="h-[50px] flex my-5">
        <div className="w-[90%] h-full border-b-[1px] border-red-600 geo">
          <h1 className="text-2xl md:text-3xl text-red-600 font-bold geo">
            CLUB FOUNDERS
          </h1>
        </div>
        <div className="w-[10%] h-full flex border-b-[1px] md:border-b-0 border-red-600 justify-end geo">
          <Image
            width={500}
            height={500}
            src="/core/drop.svg"
            alt="DropDown"
            className={`h-6 w-6 transition-all ease-in-out duration-500 cursor-pointer ${
              dropThird ? "rotate-180" : ""
            }`}
            onClick={() => setDropThird(!dropThird)}
          />
        </div>
      </div>
      <div
        className={`${
          dropThird ? "dropDownActive" : "dropDown"
        } overflow-hidden`}
      >
        <Cards data={Founders} />
      </div>
      <div className="h-[50px] flex my-5">
        <div className="w-[90%] h-full border-b-[1px] border-red-600 geo">
          <h1 className="text-2xl md:text-3xl text-red-600 font-bold geo">
            WEBSITE CREATORS
          </h1>
        </div>
        <div className="w-[10%] h-full flex border-b-[1px] md:border-b-0 border-red-600 justify-end geo">
          <Image
            width={500}
            height={500}
            src="/core/drop.svg"
            alt="DropDown"
            className={`h-6 w-6 transition-all ease-in-out duration-500 cursor-pointer ${
              dropFourth ? "rotate-180" : ""
            }`}
            onClick={() => setDropFourth(!dropFourth)}
          />
        </div>
      </div>
      <div
        className={`${
          dropFourth ? "dropDownActive" : "dropDown"
        } overflow-hidden`}
      >
        <Cards data={Creators} />
      </div>
    </div>
  );
}
