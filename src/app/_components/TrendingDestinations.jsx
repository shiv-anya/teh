"use client";
import { useEffect, useState } from "react";
import { Container } from "./UI/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export const destinations = [
  {
    name: "Bali",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    cta: "Explore Bali",
    info: "Discover tropical beaches, ancient temples, vibrant culture, lush rice terraces, and unforgettable sunsets across Indonesia's most beloved island paradise.",
  },
  {
    name: "Kerala",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    cta: "Explore Kerala",
    info: "Cruise through serene backwaters, wander tea plantations, enjoy authentic cuisine, and experience nature in God's Own Country. Eat local food and take some souvenir home.",
  },
  {
    name: "Santorini",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    cta: "Explore Santorini",
    info: "Admire whitewashed villages, dramatic cliffs, blue domes, and breathtaking sunsets overlooking the sparkling Aegean Sea.",
  },
  {
    name: "Swiss Alps",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    cta: "Explore Alps",
    info: "Experience snow-capped mountains, crystal lakes, scenic train rides, charming villages, and year-round outdoor adventures.",
  },
  {
    name: "Kyoto",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    cta: "Explore Kyoto",
    info: "Walk through bamboo forests, visit historic shrines, admire cherry blossoms, and immerse yourself in timeless Japanese culture.",
  },
  {
    name: "Maldives",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    cta: "Explore Maldives",
    info: "Relax in overwater villas, swim in turquoise lagoons, snorkel coral reefs, and enjoy luxurious island escapes.",
  },
  {
    name: "Iceland",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    cta: "Explore Iceland",
    info: "Witness northern lights, volcanic landscapes, powerful waterfalls, black sand beaches, and extraordinary natural wonders.",
  },
  {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    cta: "Explore Dubai",
    info: "Enjoy futuristic skylines, luxury shopping, desert adventures, world-class dining, and iconic architectural marvels.",
  },
  {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    cta: "Explore Paris",
    info: "Discover romantic streets, historic landmarks, charming cafés, renowned museums, and timeless French elegance.",
  },
  {
    name: "Banff",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
    cta: "Explore Banff",
    info: "Explore turquoise lakes, towering mountains, pristine forests, wildlife encounters, and unforgettable Canadian landscapes.",
  },
];

const DestinationContent = ({ destination }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="space-y-6"
        >
          <motion.h2
            className="text-[clamp(1.8rem,5vw,2.5rem)] font-bold text-white uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {destination.name}
          </motion.h2>

          <p className="text-white/80 leading-relaxed">{destination.info}</p>
        </motion.div>
      </AnimatePresence>
      <button className="w-fit my-5 bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
        Explore
      </button>
    </div>
  );
};

const DestinationCarousel = ({ items, activeIndex, onSelect, next, prev }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="relative h-58 md:h-[500px] w-full">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;

          if (offset > 3) return null;

          return (
            <motion.button
              key={item.name}
              onClick={() => onSelect(index)}
              className="absolute top-1/2 overflow-hidden rounded-3xl cursor-pointer"
              animate={{
                x: offset * 165,
                y: "-50%",
                scale: offset === 0 ? 1 : 0.9,
                zIndex: 10 - offset,
              }}
              initial={{ y: "-50%", zIndex: 10 - offset }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div
                className={`relative overflow-hidden rounded-3xl ${
                  offset === 0 ? "h-52 w-[300px]" : "h-48 w-[240px]"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold text-lg">
                    {item.name}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
      <div className="h-10 mb-5">
        <button
          className="bg-white/20 cursor-pointer text-white hover:text-blue-300 transition duration-300 rounded-full p-2 backdrop-blur-lg mr-4"
          onClick={prev}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          className="bg-white/20 cursor-pointer text-white hover:text-blue-300 transition duration-300 rounded-full p-2 backdrop-blur-lg"
          onClick={next}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export const TrendingDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="md:h-screen h-auto max-h-[700px] my-[clamp(1.6rem,5vw,4rem)]">
      <Container className="h-full">
        <div className="h-full flex flex-col gap-[clamp(0.25rem,2vw,2rem)]">
          <div className="flex gap-[clamp(0.25rem,2vw,1.25rem)] flex-col w-full">
            <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-jakarta capitalize">
              Top 10 <span className="text-blue-400">destinations</span>
            </h2>
            <p className="text-xl">Enjoy famous destinations trips with us</p>
          </div>
          <AnimatePresence mode="wait">
            <div
              className="flex-1 w-full h-full flex flex-col md:flex-row relative rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${destinations[activeIndex].img})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black/80 z-0"></div>
              <div className="w-full pt-8 md:pt-0 md:w-[40%] h-full relative">
                <DestinationContent destination={destinations[activeIndex]} />
              </div>
              <div className="w-full px-8 md:px-0 md:w-[60%] h-full">
                <DestinationCarousel
                  items={destinations}
                  activeIndex={activeIndex}
                  onSelect={(index) => setActiveIndex(index)}
                  next={() => {
                    setActiveIndex((prev) =>
                      (prev + 1) % destinations.length === 0 ? 0 : prev + 1
                    );
                  }}
                  prev={() => {
                    setActiveIndex((prev) => (prev - 1 === -1 ? 0 : prev - 1));
                  }}
                />
              </div>
            </div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
