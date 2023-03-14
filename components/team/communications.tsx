import AnimatedUnderline from "../animations/animated-underline";
import AnimatedCircle from "../animations/animated-circle";
import extractPortraits from "../../lib/extract-portraits";

import { Member } from "../../types/member";

interface Props {
  allCommsData: Member[];
}

export default function Communications({ allCommsData }: Props) {
  return (
    <section
      id="communications"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 left-4 bg-blue-400/50">
            Communications
          </AnimatedUnderline>
        </h2>
        <p className="mt-4">
          The Communications Department is in charge of crafting promotional
          plans and publicity materials for the organization’s projects and
          initiatives, and managing all of the organization’s social media
          pages.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <AnimatedCircle className="-left-10 h-10 w-10 bg-blue-400/50 lg:-left-20" />
        {extractPortraits(allCommsData)}
      </div>
    </section>
  );
}
