import Link from "next/link"
import getEventColor from '../lib/eventColor'
import DateFormatter from './dateformatter'
import TimeFormatter from './timeformatter'

export default function EventListView({ eventsArray, className }) {
  return (
    <div className={`overflow-y-auto overscroll-contain scroll-y ${className}`}>
      {
        eventsArray &&
				eventsArray.map((currEvent, index) => (
					<div key={index} className="py-6 scroll-start border-b-2 border-gray-100">
						<p className="sm:mb-2 text-sm">
							<DateFormatter dateTime={currEvent.date} />
						</p>
						<div className="flex items-center">
							<div className="w-18 sm:w-20">
								<p className="text-sm sm:text-base font-medium">
									<TimeFormatter dateTime={currEvent.date} />
								</p>
								<p className="text-xs sm:text-sm">
									<TimeFormatter dateTime={currEvent.dateEnd} />
								</p>
							</div>
							<div className={`w-1 h-12 mx-4 rounded-full ${getEventColor(currEvent.eventType)}`} />
							<div className="flex-auto">
								<p className="text-xs sm:text-sm">{currEvent.eventType}</p>
								<p className="text-base sm:text-lg font-bold">{currEvent.title}</p>
							</div>
							{
								currEvent.locationURL ?
									<Link href={currEvent.locationURL}>
										<p className="cursor-pointer hover:underline">{currEvent.location}</p>
									</Link>
								:
									<p>{currEvent.location}</p>
							}
						</div>
					</div>
				))
      }
    </div>
  )
}