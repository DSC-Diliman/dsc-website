import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedObject({ children, className, fromVars, toVars, scrub = true }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom bottom",
        // start: "top 70%",
        end: "+=100",
        scrub
      }
    })
  })

  return <div className={className} ref={ref}>{children}</div>
}