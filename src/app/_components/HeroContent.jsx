"use client";

import { ArrowRight, Search, Star } from "lucide-react";
import { Typewriter } from "./UI/Typewriter";
import { useEffect, useState } from "react";

const destinations = ["Spain", "Bali", "Pattaya", "Paris", "Kochi"];

const statistics = [
  "15+ Years Experience",
  "24/7 Expert Travel Support",
  "50+ Happy Travellers",
  "80+ International Trips",
  "100+ Handpicked Destinations",
  "150+ India Tour Packages",
];

const Headlines = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % statistics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  console.log(active);
  return (
    <ul className="flex flex-col gap-2 items-end">
      {statistics.map((stat, i) => (
        <li
          key={i}
          className={`py-2 px-6 rounded-full backdrop-blur-xs text-right text-sm w-fit ${
            active === i
              ? "bg-gray-900/50 border-2 border-gold shadow-line shadow-yellow-400 font-semibold text-white -translate-x-4.5 transition duration-700"
              : "bg-gray-900/30 text-gray-500 font-semibold"
          }`}
        >
          {stat}
        </li>
      ))}
    </ul>
  );
};

export const HeroContext = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex items-end h-full w-2/3">
        <div className="w-full flex flex-col gap-8 pb-16">
          {/* Badge */}
          <div className="bg-black/20 backdrop-blur-sm rounded-full w-fit py-2 px-6 text-gray-300 font-semibold text-xs border-gray-100">
            THE WORLD’S FIRST TRAVEL COMPANY . SINCE 1758
          </div>
          <h2 className="text-6xl text-white font-medium font-eb leading-16">
            This is where your love
            <br /> for travel{" "}
            <span className="italic text-yellow-400">begins.</span>
          </h2>
          <div className="shadow-lg rounded-full w-[80%] bg-white p-1 text-slate-500 flex items-center">
            <button className="p-3 sm:p-4 rounded-full shrink-0">
              <Search size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            <div className="text-gray-500 flex-1 min-w-0 text-sm sm:text-base">
              <Typewriter words={destinations} />
            </div>

            <button className="bg-gray-900 p-3 sm:p-4 rounded-full text-white cursor-pointer shrink-0">
              <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              {[1].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  <Star fill="oklch(85.2% 0.199 91.936)" />
                </span>
              ))}
            </div>
            <div className="font-semibold italic text-sm ml-2 text-gray-100">
              4.6 <span>based on Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-1/3 flex justify-end items-end pb-16">
        <div className="flex justify-end">
          <Headlines />
        </div>
      </div>
    </div>
  );
};
