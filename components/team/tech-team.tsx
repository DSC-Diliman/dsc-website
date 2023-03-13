import AnimatedEm from "../animated-em";
import ParallaxObject from "../parallax-object";
import extractPortraits from "../../lib/extractPortraits";
import { MemberInCMS } from "../../types/member-in-cms";

interface Props {
  allTechData: MemberInCMS[];
}

export default function TechTeam({ allTechData }: Props) {
  return (
    <section
      id="technology"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 lg:order-2 xl:max-w-md">
        <h2>
          <AnimatedEm emClassName="bg-emerald-500/50 bottom-0 left-4">
            Technology
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Technology Department handles most of the organizational functions
          that require specialized knowledge in programming and technology.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <ParallaxObject
          className="absolute -left-24 h-20 w-20 rounded-full bg-emerald-500/50"
          y={[0, 200]}
          end="bottom+=160 top"
        />
        <ParallaxObject
          className="absolute bottom-0 right-24 h-6 w-6 rounded-full bg-emerald-500/50"
          y={[0, 50]}
          end="bottom+=200 top"
        />
        {extractPortraits(allTechData)}
      </div>
    </section>
  );
}
