import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children?: string;
  src: string;
  className: string;
}

export default function ParallaxImage({ children, src, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${src})`;

      gsap.fromTo(
        ref.current,
        {
          backgroundPosition: "50% 100%",
        },
        {
          backgroundPosition: "50% 50",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
          },
        }
      );
    }
  });

  return (
    <div className={`bg-center ${className}`} ref={ref}>
      {children}
    </div>
  );
}
