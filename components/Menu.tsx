"use client";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`z-10 ml-5 px-10 py-5  top-44 w-1/5 fixed bg-slate-400/20 rounded-3xl flex-col text-center transition-all duration-300 ease-in-out transform ${
        showMenu ? "h-52" : "h-16"
      }`}
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      <h2 className="text-xl cursor-default">Points in Time</h2>
      <div
        className={`transition-opacity duration-300 ease-in-out transform mt-4 ${
          showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className={`${showMenu ? "block" : "hidden"} text-wrap w-3/8 space-y-5`}>
          <Link href={"#meteorite"} className="block w-full text-center">
            The First Meteorite Impact
          </Link>
          <Link href={"#frozen"} className="block w-full text-center">
            The Deep Freeze
          </Link>
          <Link href={"#moon"} className="block w-full text-center">
            The First Moon Landing
          </Link>
        </div>
      </div>
    </div>
  );
}