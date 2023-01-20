import getEventColor from '../lib/eventColor'
import DateFormatter from './dateformatter'
import TimeFormatter from './timeformatter'

export default function EventListView({ eventsArray, className }) {
  return (
    <div className={`overflow-y-auto overscroll-contain scroll-y ${className}`}>
      {
        eventsArray &&
				eventsArray.map((currEvent, index) => (
					<div key={index} className="py-2 sm:py-4 scroll-start border-b-2 border-gray-100">
						<p className="sm:mb-2 text-sm">
							<DateFormatter dateTime={currEvent.date} />
						</p>
						<div className="flex items-stretch">
							<div className="flex-none w-14 sm:w-16">
								<p className="text-sm sm:text-base font-medium">
									<TimeFormatter dateTime={currEvent.date} />
								</p>
								<p className="text-xs sm:text-sm">
									<TimeFormatter dateTime={currEvent.dateEnd} />
								</p>
							</div>
							<div className={"flex-none w-1 mx-4 rounded-full " + getEventColor(currEvent.eventType)} />
							<div className="flex-auto">
								<p className="text-xs sm:text-sm">{currEvent.eventType}</p>
								<p className="text-base sm:text-lg">{currEvent.title}</p>
							</div>
							<p className="self-center ml-1 sm:ml-4">{currEvent.location}</p>
						</div>
					</div>
				))
      }
    </div>
  )
}