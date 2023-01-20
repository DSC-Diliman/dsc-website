import Link from "next/link"
import Em from "../components/em"
import indexHeroStyle from "/components/IndexHero.module.scss"

export default function Landing() {
	return (
		<section className="relative flex flex-row items-center min-h-screen pt-10 sm:pt-0">
			<div className={indexHeroStyle["mobile-hero"]}/>
			<div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-60 sm:backdrop-filter-none sm:bg-transparent p-8 md:pl-20 md:pr-10 md:pt-24 md:pb-10 w-full sm:w-1/2">
				<div className="max-w-xl mx-auto">
					<h1 className="mb-2 md:mb-10 text-2xl md:text-5xl">
						<Em emClassName="bg-red-300 right-4 bottom-2">Grow. Learn. Connect.</Em>
					</h1>

					<p className="mb-4 md:mb-10">The <b>GDSC UP Diliman Chapter</b> is part of a global community of over 1500 universities.</p>

					<Link href="/about">
						<button className="btn-style2-red">Learn More</button>
					</Link>
				</div>
			</div>
			<div className={`hidden sm:block ${indexHeroStyle.hero}`}>
				<div>
					<div />
				</div>
				<div />
			</div>
		</section>
	)
}