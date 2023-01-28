import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";

export default function OpsTeam({ allOpsData }) {
  return (
    <section
      id="operations"
      className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8"
    >
      <div className="pt-32">
        <h2>
          <AnimatedEm emClassName="bg-red-400 bottom-0 -left-4">
            Operations
          </AnimatedEm>
        </h2>
        <p className="mt-4">
          The Operations Department oversees the operations of the organization
          and manages event, ad hoc projects, recruitment, and member welfare.
        </p>
      </div>
      <div className="relative w-full flex flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -right-12 w-20 h-20 bg-red-400 rounded-full"
          y={[0, 200]}
          end="bottom+=160 top"
        />
        {extractPortraits(allOpsData)}
      </div>
    </section>
  );
}
