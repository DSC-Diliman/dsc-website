import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  className?: string;
  emClassName?: string;
  trigger?: string;
}

export default function AnimatedEm({
  children,
  className,
  emClassName,
  trigger = "60%",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        width: "0%",
        scrollTrigger: {
          trigger: ref.current,
          start: `top ${trigger}`,
          end: "+=100",
          scrub: 1,
        },
      });
    }
  });

  return (
    <span className={`relative z-0 whitespace-nowrap ${className}`}>
      <span className={`absolute -z-10 h-3 w-full ${emClassName}`} ref={ref} />
      {children}
    </span>
  );
}
