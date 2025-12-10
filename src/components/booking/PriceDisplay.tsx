import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

interface PriceDisplayProps {
  price: number;
  className?: string;
}

export function PriceDisplay({ price, className }: PriceDisplayProps) {
  const initialPrice = useRef(price);
  const motionValue = useMotionValue(initialPrice.current);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });

  useEffect(() => {
    motionValue.set(price);
  }, [price, motionValue]);

  return (
    <span className={className}>
      $<motion.span>{springValue.on("change", (latest) => Math.round(latest))}</motion.span>
    </span>
  );
}