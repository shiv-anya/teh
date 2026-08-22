"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ children, visibleSlides = 4, gap = 32 }) {
  const trackRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);

  const totalSlides = children.length;

  useEffect(() => {
    const calculateWidth = () => {
      if (!trackRef.current) return;

      const firstChild = trackRef.current.children[0];

      if (!firstChild) return;

      setSlideWidth(firstChild.offsetWidth + gap);
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [gap]);

  const next = () => {
    setActiveIndex((prev) => Math.min(prev + 1, totalSlides - visibleSlides));
  };

  const prev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;

    if (distance > 50) {
      next();
    }

    if (distance < -50) {
      prev();
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-2 align-self-end mb-6">
        <button
          onClick={prev}
          className="p-1 bg-black/30 backdrop-blur-sm text-white hover:text-blue-200 rounded-full cursor-pointer transition duration-300"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={next}
          className="p-1 bg-black/30 backdrop-blur-sm text-white hover:text-blue-200 rounded-full cursor-pointer transition duration-300"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div
        className="w-full max-h-[300px] h-40 md:h-[25vh] xl:h-[50vh]"
        style={{
          overflow: "hidden",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          ref={trackRef}
          animate={{
            x: -(activeIndex * slideWidth),
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          style={{
            display: "flex",
            gap,
          }}
          className="h-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
