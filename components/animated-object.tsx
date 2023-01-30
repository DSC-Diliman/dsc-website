import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: JSX.Element;
  className: string;
  fromVars: gsap.TweenVars;
  toVars: gsap.TweenVars;
  scrub?: number | boolean;
}

export default function AnimatedObject({
  children,
  className,
  fromVars,
  toVars,
  scrub = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom bottom",
          end: "+=100",
          scrub,
        },
      });
    }
  });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
