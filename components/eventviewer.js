import React, { useState } from "react"
import Calendar from "react-calendar"
import Link from "next/link"
import EventListView from "./eventlistview";

export default function EventViewer({ eventData }) {
  const [activeDay, setActiveDay] = useState(new Date())

  function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth();
  }

  function handleDateChange(date) {
    setActiveDay(date)
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center">
      <div className="hidden md:block div-style1 p-6 flex-none md:mr-8">
        <Calendar
          value={activeDay}
          // tileClassName={({ date, view }) => {
          //   if (view === "month") {
          //   }
          // }}
          onClickDay={handleDateChange}
        />
      </div>
      <div className="space-y-6 flex-1 max-w-2xl">
        <h1>Upcoming Events</h1>
        <Link href="/events">
          <button className="btn-style2-red">Check out our events!</button>
        </Link>
        <div className="div-style1 overflow-hidden">
          <EventListView
            eventData={
              ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
            }
          />
        </div>
      </div>
    </div>
  )
}