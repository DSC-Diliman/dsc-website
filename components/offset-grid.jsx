import AnimatedEm from "../components/animated-em"
import { IconContext } from "react-icons"
import getNextPrimaryColor from "../lib/getNextPrimaryColor"

export default function OffsetGrid({ elements }) {
	const colorGenerator = getNextPrimaryColor()
	return (
		<div className="
			grid grid-cols-1 grid-rows-4 gap-8 mt-6 mb-40
			sm:grid-cols-2 sm:grid-rows-2
			md:gap-16
		">
			{elements.map(({ heading, text, icon }, index) => {
				const color = colorGenerator.next().value
				return (
					<div key={index} className="
						relative w-64 div-style1 overflow-hidden p-4
						sm:even:top-1/2
						md:w-80 md:p-11
					">
						<div className="
							mb-1 font-semibold text-lg flex gap-5 items-center
							sm:mb-4 sm:text-xl
						">
							<AnimatedEm emClassName={`right-4 bottom-0 bg-${color}-300`}>{heading}</AnimatedEm>
						</div>
						<p className="text-sm sm:text-base">{text}</p>
						<IconContext.Provider value={
							{
								size: 150,
								color: color,
								className: `absolute bottom-5 -right-5 z-0 opacity-${color === "yellow" ? 30 : 10}`,
							}
						}>
							{icon}
						</IconContext.Provider>
					</div>
				)
			})}
		</div>
	)
}