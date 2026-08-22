import Image from "next/image";
import { Container } from "./UI/Container";

import {
  MapPinCheck,
  CalendarCheck,
  ShieldCheck,
  Headphones,
  Search,
  ArrowRight,
} from "lucide-react";
import { Typewriter } from "./UI/Typewriter";

const features = [
  {
    title: "Handpicked Destinations",
    icon: <MapPinCheck />,
  },
  {
    title: "Flexible Bookings",
    icon: <CalendarCheck />,
  },
  {
    title: "Secure Payments",
    icon: <ShieldCheck />,
  },
  {
    title: "Expert Travel Support",
    icon: <Headphones />,
  },
];

const destinations = ["Spain", "Bali", "Pattaya", "Paris", "Kochi"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "solo",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    title: "couples",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    title: "family",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "friends",
  },
];

export const People = () => {
  return (
    <div className="relative w-full -bottom-90 sm:-bottom:150 lg:-bottom-90 7xl:-bottom-140">
      <Container>
        <div className="rounded-3xl sm:rounded-4xl h-auto w-full bg-white shadow-lg">
          <div className="h-auto w-full relative">
            {/* Search */}
            <div className="shadow-lg rounded-full w-[90%] md:w-[80%] lg:w-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 text-slate-500 flex items-center">
              <button className="p-3 sm:p-4 rounded-full shrink-0">
                <Search size={20} className="sm:w-[22px] sm:h-[22px]" />
              </button>

              <div className="flex-1 min-w-0 text-sm sm:text-base">
                <Typewriter words={destinations} />
              </div>

              <button className="bg-black p-3 sm:p-4 rounded-full text-white cursor-pointer shrink-0">
                <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" />
              </button>
            </div>

            {/* Heading */}
            <div className="py-8 sm:py-10 pt-12 sm:pt-14 px-4 text-2xl sm:text-3xl font-thin font-jakarta text-center">
              Choose your people
            </div>

            {/* People Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-4 sm:gap-6 lg:gap-8 h-auto lg:h-60 px-4 sm:px-6 lg:px-8">
              {images.map((img) => {
                return (
                  <div
                    key={img.title}
                    className="group cursor-pointer flex-1 w-full h-40 sm:h-72 lg:h-full rounded-2xl shadow-people relative overflow-hidden flex items-end"
                  >
                    <Image
                      className="absolute object-cover group-hover:scale-105 transition duration-300"
                      fill
                      src={img.src}
                      alt={img.title}
                    />

                    <div className="bg-linear-to-t from-black via-black/50 to-black-30 w-full h-1/4 relative flex justify-center items-end pb-4 sm:pb-5 capitalize text-white font-bold text-xl sm:text-2xl">
                      <p>{img.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="p-4 sm:p-6 rounded-b-3xl sm:rounded-b-4xl grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 sm:gap-4 lg:gap-8 justify-around items-center">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 flex-1 shadow-people rounded-2xl flex gap-3 sm:gap-5 px-4 sm:px-6 justify-center items-center text-sm sm:text-base"
              >
                <p className="shrink-0">{f.icon}</p>
                <p>{f.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
