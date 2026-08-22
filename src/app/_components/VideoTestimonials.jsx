"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const diarySpreads = [
  {
    page: 1,
    left: {
      name: "Ananya & Rohan",
      destination: "Bali, Indonesia",
      date: "June 2026",
      quote:
        "It didn't feel like a holiday. It felt like a memory we had already lived.",
      video: "/videos/hero_video.mp4",
      poster: "/images/couples.png",
    },
    right: {
      name: "Priya",
      destination: "Paris, France",
      date: "May 2026",
      quote:
        "Every little detail was taken care of. We just had to enjoy the journey.",
      video: "/videos/travel.mp4",
      poster: "/images/family.png",
    },
  },

  {
    page: 2,
    left: {
      name: "Arjun & Meera",
      destination: "Dubai, UAE",
      date: "April 2026",
      quote:
        "From the first call to the flight back home, everything was effortless.",
      video: "/videos/testimonial-3.mp4",
      poster: "/images/dubai.jpg",
    },
    right: {
      name: "Sneha",
      destination: "Rome, Italy",
      date: "March 2026",
      quote:
        "Rome was beautiful, but having someone plan everything made it even better.",
      video: "/videos/testimonial-4.mp4",
      poster: "/images/rome.jpg",
    },
  },

  {
    page: 3,
    left: {
      name: "Rahul",
      destination: "Switzerland",
      date: "February 2026",
      quote: "This was one of those trips you keep talking about years later.",
      video: "/videos/testimonial-5.mp4",
      poster: "/images/switzerland.jpg",
    },
    right: {
      name: "The Sharma Family",
      destination: "Kashmir, India",
      date: "January 2026",
      quote: "Our children still talk about this trip every single day.",
      video: "/videos/testimonial-6.mp4",
      poster: "/images/kashmir.jpg",
    },
  },
];

function DiaryVideo({ testimonial, side, activeVideo, setActiveVideo }) {
  const videoRef = useRef(null);

  const isActive = activeVideo === testimonial.name;

  const handleEnter = async () => {
    setActiveVideo(testimonial.name);

    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      } catch {
        // Browser may block playback until interaction.
      }
    }
  };

  const handleLeave = () => {
    setActiveVideo(null);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {/* Video */}
      <motion.video
        ref={videoRef}
        src={testimonial.video}
        poster={testimonial.poster}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        animate={{
          scale: isActive ? 1.035 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Paper texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.12),transparent_20%,transparent_80%,rgba(0,0,0,.08))]" />

      {/* Dark gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        animate={{
          opacity: isActive ? 1 : 0.8,
        }}
      />

      {/* Play indicator */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-md">
              <Play size={20} fill="white" className="ml-1 text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
          <span>{testimonial.destination}</span>
          <span className="h-px w-5 bg-white/40" />
          <span>{testimonial.date}</span>
        </div>

        <motion.p
          className="max-w-md font-serif text-lg leading-relaxed text-white sm:text-xl"
          animate={{
            y: isActive ? 0 : 4,
          }}
        >
          “{testimonial.quote}”
        </motion.p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-white">
            {testimonial.name}
          </span>

          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1.5 text-white/70"
            >
              <VolumeX size={13} />
              <span className="text-[9px] uppercase tracking-widest">
                Sound off
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Page number */}
      <div
        className={`absolute top-5 ${
          side === "left" ? "left-5" : "right-5"
        } text-[10px] uppercase tracking-[0.2em] text-white/60`}
      >
        {side === "left" ? "01" : "02"}
      </div>
    </motion.div>
  );
}

function DiarySpread({ spread, direction, activeVideo, setActiveVideo }) {
  return (
    <motion.div
      key={spread.page}
      className="absolute inset-0"
      initial={{
        rotateY: direction > 0 ? 8 : -8,
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        rotateY: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        rotateY: direction > 0 ? -90 : 90,
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformPerspective: 1800,
      }}
    >
      <div className="grid h-full w-full grid-cols-2">
        {/* LEFT PAGE */}
        <div className="relative overflow-hidden bg-[#f5f1e8]">
          <DiaryVideo
            testimonial={spread.left}
            side="left"
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />

          {/* Inner binding shadow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/15 to-transparent" />
        </div>

        {/* RIGHT PAGE */}
        <div className="relative overflow-hidden bg-[#f5f1e8]">
          <DiaryVideo
            testimonial={spread.right}
            side="right"
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />

          {/* Inner binding shadow */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/15 to-transparent" />
        </div>

        {/* CENTER BINDING */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/15 shadow-[0_0_15px_rgba(0,0,0,.18)]" />
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const [isOpen, setIsOpen] = useState(false);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);

  const dragX = useMotionValue(0);

  const nextPage = () => {
    if (spreadIndex >= diarySpreads.length - 1) return;

    setDirection(1);
    setSpreadIndex((prev) => prev + 1);
    setActiveVideo(null);
  };

  const previousPage = () => {
    if (spreadIndex <= 0) return;

    setDirection(-1);
    setSpreadIndex((prev) => prev - 1);
    setActiveVideo(null);
  };

  const handleDragEnd = (_, info) => {
    const threshold = 80;

    if (info.offset.x < -threshold) {
      nextPage();
    }

    if (info.offset.x > threshold) {
      previousPage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, spreadIndex]);

  return (
    <section className="relative h-fit md:h-auto overflow-hidden bg-[#eee9df] mt-[clamp(1.6rem,5vw,4rem)] px-5 py-24 sm:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#9b9487_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500">
          Real stories from real journeys
        </p>

        <h2 className="font-serif text-[clamp(1.8rem,5vw,2.5rem)] tracking-tight text-slate-900">
          Dear Diary
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          Every journey leaves a story behind.
          <br />
          Here are a few of ours.
        </p>
      </div>

      {/* CLOSED DIARY */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="closed-book"
            initial={{ opacity: 0, y: 30, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              rotateY: -85,
              x: -100,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 mx-auto w-full max-w-[680px]"
            style={{
              perspective: 1500,
            }}
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              whileHover={{
                y: -8,
                rotateZ: -0.5,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative aspect-[1.45/1] w-full overflow-hidden rounded-[4px] bg-[#243a32] text-left shadow-[0_30px_70px_rgba(0,0,0,.22)] cursor-pointer"
            >
              {/* Leather-like cover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.08),transparent_30%),linear-gradient(135deg,#31483f,#182b25)]" />

              {/* Cover border */}
              <div className="absolute inset-5 rounded-[2px] border border-[#d7c6a0]/30 sm:inset-7" />

              {/* Spine */}
              <div className="absolute inset-y-0 left-0 w-5 bg-black/10 sm:w-7" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#e4d6b7]">
                <div className="mb-5 text-[9px] uppercase tracking-[0.5em] opacity-70">
                  Travel stories
                </div>

                <h3 className="font-serif text-5xl sm:text-7xl">Dear Diary</h3>

                <div className="mt-6 h-px w-20 bg-[#d7c6a0]/40" />

                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] opacity-70">
                  Open our memories
                </p>
              </div>

              {/* Hover hint */}
              <motion.div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-[#e4d6b7]/50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                Tap to open
              </motion.div>
            </motion.button>

            {/* Shadow underneath */}
            <div className="absolute -bottom-5 left-[8%] right-[8%] -z-10 h-10 rounded-full bg-black/20 blur-2xl" />
          </motion.div>
        )}

        {/* OPEN BOOK */}
        {isOpen && (
          <motion.div
            key="open-book"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 mx-auto w-full max-w-[1200px]"
          >
            {/* Book */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              style={{ x: dragX }}
              onDragEnd={handleDragEnd}
              className="relative aspect-[1.45/1] w-[80%] mx-auto cursor-grab overflow-hidden rounded-sm bg-[#f5f1e8] shadow-[0_35px_90px_rgba(0,0,0,.25)] active:cursor-grabbing"
            >
              <AnimatePresence mode="popLayout" custom={direction}>
                <DiarySpread
                  spread={diarySpreads[spreadIndex]}
                  direction={direction}
                  activeVideo={activeVideo}
                  setActiveVideo={setActiveVideo}
                />
              </AnimatePresence>
            </motion.div>

            {/* Navigation */}
            <div className="mt-7 flex items-center justify-between">
              <button
                onClick={previousPage}
                disabled={spreadIndex === 0}
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 transition hover:text-slate-900 disabled:pointer-events-none disabled:opacity-20"
              >
                <ChevronLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Previous
              </button>

              <div className="flex items-center gap-3">
                {diarySpreads.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > spreadIndex ? 1 : -1);
                      setSpreadIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      index === spreadIndex
                        ? "w-8 bg-slate-900"
                        : "w-1.5 bg-slate-300"
                    }`}
                    aria-label={`Go to spread ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={spreadIndex === diarySpreads.length - 1}
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 transition hover:text-slate-900 disabled:pointer-events-none disabled:opacity-20"
              >
                Next
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={() => {
                setIsOpen(false);
                setActiveVideo(null);
              }}
              className="absolute -top-12 right-0 text-[10px] uppercase tracking-[0.25em] text-slate-400 transition hover:text-slate-900"
            >
              Close diary
            </button>

            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-slate-400">
              Drag the pages · Hover to watch
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
