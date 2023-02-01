import AnimatedEm from "./animated-em";
import { OffsetGridElement } from "../types/offset-grid-element";

interface Props {
  elements: OffsetGridElement[];
}

export default function OffsetGrid({ elements }: Props) {
  const bgColors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-emerald-300",
    "bg-amber-300",
  ];
  return (
    <div
      className="
			mt-6 mb-14 grid grid-cols-1 grid-rows-4 gap-8
			sm:mb-32 sm:grid-cols-2 sm:grid-rows-2
			md:mb-40 md:gap-16
		"
    >
      {elements.map(({ heading, text, icon }, index) => {
        const bgColor = bgColors[index % bgColors.length];
        return (
          <div
            key={index}
            className="
						div-style1 relative w-80 overflow-hidden px-6 py-4
						sm:w-72 sm:even:top-1/2
						md:w-80 md:px-12 md:py-8
						lg:w-96
					"
          >
            <div
              className="
							mb-1 flex items-center gap-5 text-lg font-semibold
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
