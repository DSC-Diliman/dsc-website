import Link from "next/link"
import EventListView from "../components/eventlistview"

export default function UpcomingEvents({ eventsArray }) {
	return (
		<section className="
			py-4 pt-10 pb-14
			md:px-10 md:py-20
		">
			<div className="
				mx-auto flex flex-col items-center
				md:max-w-2xl
			">
				<h1 className="mb-4 text-center">Upcoming Events</h1>
				<div className="div-style1 w-full overflow-hidden mt-10 mb-20">
					<EventListView
						className="px-2 sm:px-8 max-h-80"
						eventsArray={eventsArray}
					/>
				</div>
				<Link href="/events">
					<button className="btn-style2-red">Check out our events!</button>
				</Link>
			</div>
		</section>
	)
}