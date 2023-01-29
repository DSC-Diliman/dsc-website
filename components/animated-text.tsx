import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  className: string;
}

export default function AnimatedText({ children, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          scrollTrigger: {
            trigger: ref.current,
            start: "bottom bottom",
            end: "+=100",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
        }
      );
    }
  }, []);

  return (
    <p className={className} ref={ref}>
      {children}
    </p>
  );
}
