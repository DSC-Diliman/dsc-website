import AnimatedEm from "./animated-em";
import { OffsetGridElement } from "../types/offset-grid-element";

interface Props {
  elements: OffsetGridElement[];
}

export default function OffsetGrid({ elements }: Props) {
	const bgColors = ["bg-red-300", "bg-blue-300", "bg-emerald-300", "bg-amber-300"];
  return (
    <div
      className="
			grid grid-cols-1 grid-rows-4 gap-8 mt-6 mb-14
			sm:grid-cols-2 sm:grid-rows-2 sm:mb-32
			md:gap-16 md:mb-40
		"
    >
      {elements.map(({ heading, text, icon }, index) => {
        const bgColor = bgColors[index % bgColors.length];
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
              <AnimatedEm emClassName={`right-4 bottom-0 ${bgColor}`}>
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
