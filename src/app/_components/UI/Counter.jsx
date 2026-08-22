"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({ value, className }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true, // animate only once
    margin: "-100px",
  });

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
