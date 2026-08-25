"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./UI/Container";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 py-[clamp(1rem,1.25rem,2rem)] w-full bg-linear-to-b from-black/70 via-black/30 to-transparent text-white">
      <Container>
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-[clamp(1rem,5vw,1.2rem)] whitespace-nowrap">
              Travel Empire Holidays
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-[clamp(0.25rem,2vw,2rem)] items-center font-bold bg-black/30 backdrop-blur-sm py-[clamp(0.75rem,3vw,0.80rem)] px-[clamp(1.5rem,3vw,2rem)] rounded-full">
            <li className="text-sm cursor-pointer">Explore Destinations</li>

            <li className="text-sm cursor-pointer">Tour Packages</li>
          </ul>

          {/* Desktop CTA */}
          <a className="hidden lg:block cursor-pointer py-[clamp(0.75rem,3vw,0.80rem)] px-[clamp(1.5rem,3vw,2rem)] rounded-full bg-black/30 backdrop-blur-sm font-bold text-sm transition duration-300 whitespace-nowrap">
            Connect To Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-[clamp(0.25rem,0.5rem,0.62rem)] rounded-full bg-black/30 backdrop-blur-sm cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute w-[98%] left-1/2 -translate-x-1/2 lg:hidden mt-4 p-[clamp(0.75rem,3vw,2rem)] rounded-2xl bg-black/40 backdrop-blur-md">
            <ul className="flex flex-col gap-[clamp(0.25rem,2vw,1rem)]">
              <li>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition cursor-pointer"
                >
                  Explore Destinations
                </button>
              </li>

              <li>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition cursor-pointer"
                >
                  Tour Packages
                </button>
              </li>

              <li>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-white/10 text-sm font-semibold transition cursor-pointer"
                >
                  Connect To Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};
