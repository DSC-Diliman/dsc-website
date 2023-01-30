import AnimatedText from "../components/animated-text";
import AnimatedObject from "../components/animated-object";
import AnimatedEm from "../components/animated-em";
import Image from "next/image";

export default function Vision() {
  return (
    <section
      id="vision"
      className="px-4 py-10 md:p-10 bg-gray-200 overflow-hidden"
    >
      <div className="sm:grid grid-cols-1 lg:grid-cols-2 max-w-3xl mx-auto gap-4 md:gap-12">
        <div>
          <h1 className="mb-4 sm:mt-5 text-2xl text-red-700 font-black">
            VISION
          </h1>
          <p className="text-3xl font-medium mb-6">
            Uplifting communities through{" "}
            <AnimatedEm emClassName="bg-amber-300 bottom-0 left-4">
              technology
            </AnimatedEm>
          </p>
          <p className="sm:mb-12">
            Our organization envisions itself as a community of tech enthusiasts
            who are passionate about uplifting communities through technology
            and innovation.
          </p>
          <AnimatedObject
            className="sm:block img-frame div-style1 h-96 w-85"
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
            className="img-frame div-style1 ml-auto w-56 h-64 mb-16"
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
            className="block img-frame div-style1 ml-10 w-80 h-64 mb-16"
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
          <div className="mt-20 mr-20 ml-auto max-w-min text-5xl font-medium space-y-6">
            <AnimatedText className="text-red-400">Empower.</AnimatedText>
            <AnimatedText className="text-blue-400">Enlighten.</AnimatedText>
            <AnimatedText className="text-amber-400">Create.</AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
