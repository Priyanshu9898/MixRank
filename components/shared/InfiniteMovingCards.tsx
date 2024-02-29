import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

import TestimonialCard from './TestimonialCard'; 
import { Testimonial } from "@/types";

interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:pause"
        )}
      >
        {items.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </ul>
    </div>
  );
};
