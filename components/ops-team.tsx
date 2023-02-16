import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";
import { MemberInCMS } from "../types/member-in-cms";

interface Props {
  allOpsData: MemberInCMS[];
}

export default function OpsTeam({ allOpsData }: Props) {
  return (
    <section
      id="operations"
      className="mx-auto grid max-w-5xl grid-rows-2 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-1"
    >
      <div className="pt-32">
        <h2>
          <AnimatedEm emClassName="bg-red-400/50 bottom-0 -left-4">
            Operations
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Operations Department oversees the operations of the organization
          and manages event, ad hoc projects, recruitment, and member welfare.
        </p>
      </div>
      <div className="relative flex w-full flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -right-12 h-20 w-20 rounded-full bg-red-400/50"
          y={[0, 200]}
          end="bottom+=160 top"
        />
        {extractPortraits(allOpsData)}
      </div>
    </section>
  );
}
