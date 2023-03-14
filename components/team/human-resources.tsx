import AnimatedUnderline from "../animations/animated-underline";
import ParallaxObject from "../animations/parallax-object";
import extractPortraits from "../../lib/extractPortraits";
import { MemberInCMS } from "../../types/member-in-cms";

interface Props {
  allHRData: MemberInCMS[];
}

export default function HumanResources({ allHRData }: Props) {
  return (
    <section
      id="communications"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 left-4 bg-blue-400/50">
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
        <ParallaxObject
          className="absolute -left-2 h-10 w-10 rounded-full bg-blue-400/50"
          y={[-100, 200]}
          end="bottom+=160 top"
        />
        {extractPortraits(allHRData)}
      </div>
    </section>
  );
}
