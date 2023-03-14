import AnimatedUnderline from "../animations/animated-underline";
import AnimatedCircle from "../animations/animated-circle";
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
        <AnimatedCircle className="-right-24 h-20 w-20 bg-red-400/50" />
        {extractPortraits(allOpsData)}
      </div>
    </section>
  );
}
