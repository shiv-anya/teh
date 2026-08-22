"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "./UI/Container";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Adventure",
    description: "Thrilling experiences for the adrenaline seekers.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Nature",
    description: "Discover breathtaking landscapes and hidden wonders.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Spiritual",
    description: "Find peace, purpose and a deeper connection.",
    image:
      "https://images.unsplash.com/photo-1576239474622-286656a6a38b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Beaches",
    description: "Relax on pristine shores and sunny islands.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Culture & Heritage",
    description: "Explore traditions, history and local experiences.",
    image:
      "https://images.unsplash.com/photo-1543715474-751a0df77ffc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
  },
  {
    id: 6,
    title: "Luxury & Leisure",
    description: "Indulge in comfort and unforgettable experiences.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Themes = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="mt-[45rem] sm:mt-[35rem] lg:mt-0">
      <Container>
        {/* Heading */}
        <div className="flex gap-2 sm:gap-3 flex-col mb-8 sm:mb-10">
          <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-jakarta capitalize font-semibold tracking-wide">
            Explore by <span className="text-blue-400">themes</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl">
            Choose according to your mood
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:gap-4 gap-3 sm:gap-4"
        >
          {cards.map((card) => {
            const isHovered = hoveredId === card.id;
            const isBlurred = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  zIndex: isHovered ? 2 : 0,
                  y: isHovered ? -30 : 0,
                  filter: isBlurred ? "blur(1px)" : "blur(0px)",
                  borderColor: "rgba(255,255,255,1)",
                  borderWidth: isHovered ? "4px" : "0px",
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  relative
                  overflow-hidden
                  h-52
                  sm:h-64
                  md:h-72
                  lg:h-70
                  rounded-2xl
                  lg:flex-1
                  shadow-2xl
                  cursor-pointer
                  p-2
                "
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="absolute object-cover"
                />

                <div className="relative flex gap-2 w-full h-full items-end justify-center">
                  <p className="p-1 px-2 sm:px-3 text-[10px] sm:text-xs text-white bg-black/50 backdrop-blur-sm w-fit rounded-full text-center">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
