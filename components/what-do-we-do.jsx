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
				icon: <GiMicrophone />,
			},
			{
				heading: "Internal",
				text: "Get a glimpse of how our organization operates!",
				icon: <GiMagnifyingGlass />,
			},
			{
				heading: "Workshops",
				text: "Get a chance to learn new skills through hands-on workshops and study jams.",
				icon: <BsWrench />,
			},
			{
				heading: "Tech Solutions",
				text: "Use the skills you learn in our events to solve community problems through projects!",
				icon: <ImLab />,
			},
		]

	return (
		<section className="
			px-4 pt-12 pb-6 bg-gray-200 flex flex-col items-center justify-center
			sm:pb-16
			md:px-10 md:shadow-above
		">
			<h1 className="text-center mb-4">What do we do in GDSC UP Diliman?</h1>
			<OffsetGrid elements={offsetGridContents} />
			<Link href="/team">
				<button className="btn-style2-red">Check out our teams!</button>
			</Link>
		</section>
	)
}