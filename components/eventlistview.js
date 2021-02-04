export default function EventListView({ eventData }) {
  return (
    <div className="px-8 max-h-md w-auto overflow-y-scroll scroll-y">
      {eventData.map(currEvent => (
        <div className="py-2 scroll-start border-b-2 border-gray-100">
          <p className="mb-2 text-sm">mmmm dd, yyyy</p>
          <div className="flex items-stretch">
            <div>
              <p className="text-lg">8:00 AM</p>
              <p className="text-sm">10:00 AM</p>
            </div>
            <div className="w-1 bg-blue-pr mx-4 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">Event type</p>
              <p className="text-lg">Event title</p>
            </div>
            <p className="self-center mx-4">Event Location</p>
          </div>
        </div>
      ))}
    </div>
  )
}