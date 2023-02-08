import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";
import { MemberInCMS } from "../types/member-in-cms";

interface Props {
  allTechData: MemberInCMS[];
}

export default function TechTeam({ allTechData }: Props) {
  return (
    <section
      id="technology"
      className="mx-auto grid max-w-5xl grid-rows-2 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-1"
    >
      <div className="pt-32 md:order-2">
        <h2>
          <AnimatedEm emClassName="bg-emerald-500 bottom-0 left-4">
            Technology
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Technology Department handles most of the organizational functions
          that require specialized knowledge in programming and technology.
        </p>
      </div>
      <div className="relative flex w-full flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -left-24 h-20 w-20 rounded-full bg-emerald-500"
          y={[0, 200]}
          end="bottom+=160 top"
        />
        <ParallaxObject
          className="absolute bottom-0 right-24 h-6 w-6 rounded-full bg-emerald-500"
          y={[0, 50]}
          end="bottom+=200 top"
        />
        {extractPortraits(allTechData)}
      </div>
    </section>
  );
}
