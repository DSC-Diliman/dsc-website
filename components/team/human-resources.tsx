import AnimatedUnderline from "../animations/animated-underline";
import AnimatedCircle from "../animations/animated-circle";
import extractPortraits from "../../lib/extract-portraits";

import { Member } from "../../types/member";

interface Props {
  allHRData: Member[];
}

export default function HumanResources({ allHRData }: Props) {
  return (
    <section
      id="human-resources"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 left-4 bg-emerald-400/50">
            Human Resources
          </AnimatedUnderline>
        </h2>
        <p className="mt-4">
          The Human Resources Department is in charge of the well being of the
          members within the organization as well as the recruitment of aspiring
          members that are fit for the organization. This division fosters the
          relationships between members and ensures that all of the people
          within the organization can perform at their best.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <AnimatedCircle className="top-6 -left-12 lg:-left-24 h-16 w-16 bg-emerald-400/50" />
        <AnimatedCircle className="-bottom-20 left-20 h-10 w-10 bg-emerald-400/50" />
        {extractPortraits(allHRData)}
      </div>
    </section>
  );
}
