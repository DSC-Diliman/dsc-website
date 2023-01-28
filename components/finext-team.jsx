import AnimatedEm from "./animated-em";
import ParallaxObject from "./parallax-object";
import extractPortraits from "../lib/extractPortraits";

export default function FinExtTeam({ allExteFinData }) {
  return (
    <section
      id="finance-and-externals"
      className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center max-w-5xl mx-auto gap-8"
    >
      <div>
        <h2>
          <AnimatedEm
            emClassName="bg-yellow-300 bottom-0 -left-4"
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
      <div className="relative w-full flex flex-wrap justify-evenly gap-4">
        <ParallaxObject
          className="absolute -right-6 w-20 h-20 bg-yellow-300 rounded-full"
          y={[-100, 200]}
        />
        {extractPortraits(allExteFinData)}
      </div>
    </section>
  );
}
