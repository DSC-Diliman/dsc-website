import AnimatedEm from "../animated-em";
import ParallaxObject from "../parallax-object";
import extractPortraits from "../../lib/extractPortraits";
import { MemberInCMS } from "../../types/member-in-cms";

interface Props {
  allCommsData: MemberInCMS[];
}

export default function CommsTeam({ allCommsData }: Props) {
  return (
    <section
      id="communications"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedEm emClassName="bg-blue-400/50 bottom-0 left-4">
            Communications
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Communications Department is in charge of crafting promotional
          plans and publicity materials for the organization’s projects and
          initiatives, and managing all of the organization’s social media
          pages.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <ParallaxObject
          className="absolute -left-2 h-10 w-10 rounded-full bg-blue-400/50"
          y={[-100, 200]}
          end="bottom+=160 top"
        />
        {extractPortraits(allCommsData)}
      </div>
    </section>
  );
}
