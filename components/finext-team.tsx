import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";
import { MemberInCMS } from "../types/member-in-cms";

interface Props {
  allExteFinData: MemberInCMS[];
}

export default function FinExtTeam({ allExteFinData }: Props) {
  return (
    <section
      id="finance-and-externals"
      className="mx-auto grid max-w-5xl grid-rows-2 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-1"
    >
      <div>
        <h2>
          <AnimatedEm
            emClassName="bg-amber-300/50 bottom-0 -left-4"
            trigger="90%"
          >
            Finance and Externals
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Finance Externals Department manages the finances of the
          organization and maintains communication with external entities such
          as other organizations, companies, and clients.
        </p>
      </div>
      <div className="relative flex w-full flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -right-6 h-20 w-20 rounded-full bg-amber-300/50"
          y={[-100, 200]}
        />
        {extractPortraits(allExteFinData)}
      </div>
    </section>
  );
}
