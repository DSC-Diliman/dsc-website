import AnimatedUnderline from "../animations/animated-underline";
import ParallaxObject from "../animations/parallax-object";
import extractPortraits from "../../lib/extract-portraits";
import { Member } from "../../types/member";

interface Props {
  allExteFinData: Member[];
}

export default function FinanceAndExternals({ allExteFinData }: Props) {
  return (
    <section
      id="finance-and-externals"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 -left-4 bg-amber-300/50">
            Finance and Externals
          </AnimatedUnderline>
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