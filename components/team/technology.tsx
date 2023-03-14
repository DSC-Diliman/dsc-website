import AnimatedUnderline from "../animations/animated-underline";
import AnimatedCircle from "../animations/animated-circle";
import extractPortraits from "../../lib/extract-portraits";

import { Member } from "../../types/member";

interface Props {
  allTechData: Member[];
}

export default function Technology({ allTechData }: Props) {
  return (
    <section
      id="technology"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 left-4 bg-emerald-500/50">
            Technology
          </AnimatedUnderline>
        </h2>
        <p className="mt-4">
          The Technology Department handles most of the organizational functions
          that require specialized knowledge in programming and technology.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <AnimatedCircle className="-left-12 h-20 w-20 bg-emerald-500/50 lg:-left-24" />
        <AnimatedCircle className="-bottom-12 right-24 h-6 w-6 bg-emerald-500/50" />
        {extractPortraits(allTechData)}
      </div>
    </section>
  );
}
