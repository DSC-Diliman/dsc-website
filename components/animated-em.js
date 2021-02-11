import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function EmAnimated({ children, className, emClassName }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      width: "0%",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 60%",
        end: "+=100",
        scrub: 1
      }
    })
  })

  return <span className={`relative whitespace-nowrap z-0 ${className}`}><div className={`absolute -z-10 w-full h-3 ${emClassName}`} ref={ref} />{children}</span>
}