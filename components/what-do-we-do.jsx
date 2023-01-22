import { GiMicrophone, GiMagnifyingGlass } from "react-icons/gi"
import { BsWrench } from "react-icons/bs"
import { ImLab } from "react-icons/im"
import OffsetGrid from "./offset-grid"
import Link from "next/link"

export default function WhatDoWeDo() {
	const offsetGridContents =
		[
			{
				heading: "Speaker Sessions",
				text: "Hear from esteemed speakers as they share their insights, experience, and wisdom.",
				icon: <GiMicrophone 
					size={150}
					color="red"
					className="absolute -bottom-2 md:bottom-4 -right-5 z-0 opacity-10"
				/>,
			},
			{
				heading: "Internal",
				text: "Get a glimpse of how our organization operates!",
				icon: <GiMagnifyingGlass
					size={150}
					color="blue"
					className="absolute -bottom-2 md:bottom-4 -right-5 z-0 opacity-10"
				/>,
			},
			{
				heading: "Workshops",
				text: "Get a chance to learn new skills through hands-on workshops and study jams.",
				icon: <BsWrench
					size={150}
					color="green"
					className="absolute -bottom-2 md:bottom-4 -right-5 z-0 opacity-10"
				/>,
			},
			{
				heading: "Tech Solutions",
				text: "Use the skills you learn in our events to solve community problems through projects!",
				icon: <ImLab
					size={150}
					color="yellow"
					className="absolute -bottom-2 md:bottom-4 -right-5 z-0 opacity-30"
				/>,
			},
		]

	return (
		<section className="
			px-4 pt-12 pb-10 bg-gray-200 flex flex-col items-center justify-center
			sm:pb-16
			md:px-10 md:shadow-above
		">
			<h1 className="text-center mb-1 sm:mb-4">What do we do in GDSC UP Diliman?</h1>
			<OffsetGrid elements={offsetGridContents} />
			<Link href="/team">
				<button className="btn-style2-red">Check out our teams!</button>
			</Link>
		</section>
	)
}