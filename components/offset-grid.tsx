import AnimatedEm from "./animated-em";
import { OffsetGridElement } from "../types/offset-grid-element";

interface Props {
  elements: OffsetGridElement[];
}

export default function OffsetGrid({ elements }: Props) {
  const bgColors = [
    "bg-red-300/50",
    "bg-blue-300/50",
    "bg-emerald-300/50",
    "bg-amber-300/50",
  ];
  return (
    <div className="mt-6 mb-14 grid grid-cols-1 grid-rows-4 gap-8 md:mb-40 md:grid-cols-2 md:grid-rows-2 md:gap-16">
      {elements.map(({ heading, text, icon }, index) => {
        const bgColor = bgColors[index % bgColors.length];
        return (
          <div
            key={index}
            className="div-style1 relative flex w-96 flex-col justify-center overflow-hidden px-9 py-6 md:w-80 md:px-12 md:py-8 md:even:top-1/2 lg:w-96"
          >
            <div className="mb-1 gap-5 text-lg font-semibold md:mb-4 md:text-xl">
              <AnimatedEm emClassName={`right-4 bottom-0 ${bgColor}`}>
                {heading}
              </AnimatedEm>
            </div>
            <div>
              <p className="text-sm md:text-base">{text}</p>
            </div>
            {icon}
          </div>
        );
      })}
    </div>
  );
}
