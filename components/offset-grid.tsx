import AnimatedEm from "./animated-em";
import getNextPrimaryColor from "../lib/getNextPrimaryColor";
import { OffsetGridElement } from "../types/offset-grid-element";

interface Props {
  elements: OffsetGridElement[];
}

export default function OffsetGrid({ elements }: Props) {
  const colorGenerator = getNextPrimaryColor();
  return (
    <div
      className="
			grid grid-cols-1 grid-rows-4 gap-8 mt-6 mb-14
			sm:grid-cols-2 sm:grid-rows-2 sm:mb-32
			md:gap-16 md:mb-40
		"
    >
      {elements.map(({ heading, text, icon }, index) => {
        const color = colorGenerator.next().value;
        return (
          <div
            key={index}
            className="
						relative w-80 div-style1 overflow-hidden px-6 py-4
						sm:even:top-1/2 sm:w-72
						md:w-80 md:px-12 md:py-8
						lg:w-96
					"
          >
            <div
              className="
							mb-1 font-semibold text-lg flex gap-5 items-center
							sm:mb-4 sm:text-xl
						"
            >
              <AnimatedEm emClassName={`right-4 bottom-0 bg-${color}-300`}>
                {heading}
              </AnimatedEm>
            </div>
            <p className="text-sm sm:text-base">{text}</p>
            {icon}
          </div>
        );
      })}
    </div>
  );
}
