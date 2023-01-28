import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
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
          // start: "top 70%",
          end: "+=100",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <p className={className} ref={ref}>
      {children}
    </p>
  );
}
