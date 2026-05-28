"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);

  const ringX = useSpring(x, { stiffness: 160, damping: 16 });
  const ringY = useSpring(y, { stiffness: 160, damping: 16 });
  const ringScale = useSpring(scale, { stiffness: 220, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) scale.set(2.4);
    };
    const out = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) scale.set(1);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y, scale]);

  return (
    <>
      {/* Lagged outer ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Direct-follow inner dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
