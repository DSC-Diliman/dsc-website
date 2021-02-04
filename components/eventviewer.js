import Link from "next/link";

export default function EventViewer({ eventData }) {
  return (
    <div className="flex flex-row space-x-10">
      <div className="div-style1 p-6">
        calendar here
      </div>
      <div className="space-y-6">
        <h1>Upcoming Events</h1>
        <Link href="/events">
          <button className="btn-style2-red">Check out our events!</button>
        </Link>
        <div className="div-style1 p-4">
          events here
        </div>
      </div>
    </div>
  )
}