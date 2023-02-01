import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";
import { MemberInCMS } from "../types/member-in-cms";

interface Props {
  allCommsData: MemberInCMS[];
}

export default function CommsTeam({ allCommsData }: Props) {
  return (
    <section
      id="communications"
      className="mx-auto grid max-w-5xl grid-rows-2 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-1"
    >
      <div className="md:order-2">
        <h2>
          <AnimatedEm emClassName="bg-blue-400 bottom-0 left-4">
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
      <div className="relative flex w-full flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -left-2 h-10 w-10 rounded-full bg-blue-400"
          y={[-100, 200]}
          end="bottom+=160 top"
        />
        {extractPortraits(allCommsData)}
      </div>
    </section>
  );
}
