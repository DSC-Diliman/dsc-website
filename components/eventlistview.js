import DateFormatter from './dateformatter'
import TimeFormatter from './timeformatter'

export default function EventListView({ eventData }) {
  return (
    <div className="px-8 max-h-xl w-auto overflow-y-auto overscroll-contain scroll-y">
      {eventData.map((currEvent, index) => (
        <div key={index} className="py-4 scroll-start border-b-2 border-gray-100">
          <p className="mb-2 text-sm">
            <DateFormatter dateTime={currEvent.dateStartISO} />
          </p>
          <div className="flex items-stretch">
            <div>
              <p className="text-lg">
                <TimeFormatter dateTime={currEvent.dateStartISO} />
              </p>
              <p className="text-sm">
                <TimeFormatter dateTime={currEvent.dateEndISO} />
              </p>
            </div>
            <div className="w-1 bg-blue-pr mx-4 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">{currEvent.eventType}</p>
              <p className="text-lg">{currEvent.title}</p>
            </div>
            <p className="self-center mx-4">Event Location</p>
          </div>
        </div>
      ))}
    </div>
  )
}