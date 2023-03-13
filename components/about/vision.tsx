import AnimatedText from "../animated-text";
import AnimatedObject from "../animated-object";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Vision() {
  return (
    <section
      id="vision"
      className="overflow-hidden bg-gray-200 px-10 py-10 md:p-10"
    >
      <div className="mx-auto max-w-3xl sm:grid md:gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 text-2xl font-black text-[#7c100f] sm:mt-5">
            VISION
          </h1>
          <p className="mb-6 text-3xl font-medium">
            Uplifting communities through{" "}
            <span className="relative z-0">
              <motion.span
                whileInView={{ width: ["0%", "100%"] }}
                className="absolute left-4 bottom-0 -z-10 h-3 origin-left bg-amber-300/50"
                transition={{ duration: 1.5 }}
              />
              technology
            </span>
          </p>
          <p className="mb-8 text-base">
            Our organization envisions itself as a community of tech enthusiasts
            who are passionate about uplifting communities through technology
            and innovation.
          </p>
          <AnimatedObject
            className="img-frame div-style1 mx-auto w-full sm:w-96"
            fromVars={{
              x: -100,
              opacity: 0,
            }}
            toVars={{
              x: 0,
              opacity: 1,
            }}
            scrub={2}
          >
            <Image
              src="/images/vision-3.png"
              alt="Vision image 3"
              height={384}
              width={384}
            />
          </AnimatedObject>
        </div>
        <div className="hidden lg:block">
          <AnimatedObject
            className="img-frame div-style1 ml-auto mb-16 h-64 w-56"
            fromVars={{
              x: 100,
              opacity: 0,
            }}
            toVars={{
              x: 0,
              opacity: 1,
            }}
            scrub={2}
          >
            <Image
              src="/images/vision-1.png"
              alt="Vision image 1"
              height={256}
              width={256}
            />
          </AnimatedObject>
          <AnimatedObject
            className="img-frame div-style1 ml-6 mb-16 block h-64 w-80"
            fromVars={{
              x: 100,
              opacity: 0,
            }}
            toVars={{
              x: 70,
              opacity: 1,
            }}
            scrub={1}
          >
            <Image
              src="/images/vision-2.png"
              alt="Vision image 2"
              width={320}
              height={(413 / 717) * 320}
            />
          </AnimatedObject>
          <div className="mt-20 mr-20 ml-auto max-w-min space-y-6 text-5xl font-medium">
            <AnimatedText className="text-red-600">Empower.</AnimatedText>
            <AnimatedText className="text-blue-600">Enlighten.</AnimatedText>
            <AnimatedText className="text-amber-700">Create.</AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
