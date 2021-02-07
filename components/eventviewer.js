import React, { useState } from "react"
import Calendar from "react-calendar"
import Link from "next/link"
import EventListView from "./eventlistview";

export default function EventViewer({ eventsArray }) {
  const [activeDay, setActiveDay] = useState(new Date())
  const [displayedEvents, setEventsArray] = useState(eventsArray)

  function handleDateChange(date) {
    console.log("active date changed to:", date)
    setActiveDay(date)
  }

  function handeStartDateChange({ activeStartDate, view }) {
    if (view === "month") {
      console.log(activeStartDate.getFullYear(), activeStartDate.getMonth())
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-center">
      <div className="hidden md:block div-style1 p-6 mr-8 flex-none">
        <Calendar
          value={activeDay}
          // tileClassName={({ date, view }) => {
          //   if (view === "month") {
          //   }
          // }}
          onActiveStartDateChange={handeStartDateChange}
          onClickDay={handleDateChange}
        />
      </div>
      <div className="flex-1 max-w-2xl">
        <h1 className="mb-4">Upcoming Events</h1>
        <Link href="/events">
          <button className="btn-style2-red mb-6">Check out our events!</button>
        </Link>
        <div className="div-style1 overflow-hidden">
          <EventListView
            eventsArray={eventsArray}
          />
        </div>
      </div>
    </div>
  )
}