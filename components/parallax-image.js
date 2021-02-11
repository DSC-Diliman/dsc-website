import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxImage({ children, src, className }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.style.backgroundImage = `url(${src})`

    gsap.fromTo(ref.current, {
      backgroundPosition: "50% 100%"
    }, {
      backgroundPosition: "50% 0",
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        scrub: true
      }
    })
  })

  return <div className={`bg-center ${className}`} ref={ref}>{children}</div>
}