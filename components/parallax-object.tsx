import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children?: string;
  className: string;
  y?: [number, number];
  x?: [number, number];
  start?: string;
  end?: string;
}

export default function ParallaxObject({
  children,
  className,
  y = [0, 0],
  x = [0, 0],
  start = "top bottom",
  end = "bottom top",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        {
          y: y[0],
          x: x[0],
        },
        {
          y: y[1],
          x: x[1],
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: start,
            end: end,
            // markers: true,
          },
        }
      );
    }
  });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
