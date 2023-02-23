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
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 xl:max-w-md">
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
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
        <ParallaxObject
          className="absolute -right-6 h-20 w-20 rounded-full bg-amber-300/50"
          y={[-100, 200]}
        />
        {extractPortraits(allExteFinData)}
      </div>
    </section>
  );
}
