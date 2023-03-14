import AnimatedUnderline from "../animations/animated-underline";
import ParallaxObject from "../animations/parallax-object";
import extractPortraits from "../../lib/extract-portraits";
import { Member } from "../../types/member";

interface Props {
  allOpsData: Member[];
}

export default function Operations({ allOpsData }: Props) {
  return (
    <section
      id="operations"
      className="md:mx-auto md:max-w-5xl lg:flex lg:items-center lg:gap-12"
    >
      <div className="max-w-sm px-10 xl:max-w-md">
        <h2>
          <AnimatedUnderline className="bottom-0 -left-4 bg-red-400/50">
            Operations
          </AnimatedUnderline>
        </h2>
        <p className="mt-4">
          The Operations Department oversees the operations of the organization
          and manages event, ad hoc projects, recruitment, and member welfare.
        </p>
      </div>
      <div className="relative mx-auto mt-8 flex w-fit max-w-5xl flex-wrap justify-center gap-8 lg:mt-0">
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