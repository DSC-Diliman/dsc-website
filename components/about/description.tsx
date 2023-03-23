import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

export default function Description() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 75]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-10 py-32 text-center">
      <h1 className="text-2xl sm:text-3xl md:mt-0 md:text-4xl">
        What is GDSC-UPD?
      </h1>
      <div className="mb-10 overflow-hidden border-b-2 border-solid border-black">
        <motion.div className="mx-auto w-full" style={{ y }}>
          <Image
            src="/images/about-hero.png"
            alt="Dot in About page"
            width={800}
            height={800}
          />
        </motion.div>
      </div>
      <p className="mb-8 max-w-2xl text-lg md:mb-4 md:max-w-4xl lg:max-w-4xl">
        Ever since its fruition in India, the Developer Student Clubs has grown
        globally and currently has over 1500 chapters spread across over 150
        countries, with the Philippines having 41 of those chapters.
      </p>
      <p className="max-w-2xl text-lg md:max-w-3xl lg:max-w-4xl">
        In other words, the GDSC UP Diliman Chapter is part of a{" "}
        <b>global community</b>.
      </p>
    </section>
  );
}
