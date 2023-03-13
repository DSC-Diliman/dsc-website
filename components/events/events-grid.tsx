import { EventInCMS } from "../../types/event-in-cms";
import { useState } from "react";
import EventCard from "./event-card";
import { eventColors } from "../../lib/eventColors";

interface Props {
  eventsData: EventInCMS[];
  openModal: (e: EventInCMS) => void;
}

type EventType =
  | "Speaker Sessions"
  | "Internal"
  | "Workshops"
  | "Tech Solutions";

export default function EventsGrid({ eventsData, openModal }: Props) {
  const [categoriesToShow, setCategoriesToShow] = useState([
    "Speaker Sessions",
    "Internal",
    "Workshops",
    "Tech Solutions",
  ]);

  function toggleCategory(categoryToToggle: string) {
    setCategoriesToShow((oldCategoriesToShow) => {
      const newCategoriesToShow = [...oldCategoriesToShow];
      if (newCategoriesToShow.includes(categoryToToggle)) {
        const index = newCategoriesToShow.indexOf(categoryToToggle);
        newCategoriesToShow.splice(index, 1);
      } else {
        newCategoriesToShow.push(categoryToToggle);
      }
      return newCategoriesToShow;
    });
  }

  const categories: EventType[] = [
    "Speaker Sessions",
    "Internal",
    "Workshops",
    "Tech Solutions",
  ];

  const eventsToShow = eventsData
    .filter((e) => categoriesToShow.includes(e.eventType))
    .map((e, index) => <EventCard e={e} key={index} openModal={openModal} />);

  const categorySelectionButtons = categories.map((category, index) => (
    <div
      key={index}
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 drop-shadow-md transition-all hover:scale-110 hover:cursor-pointer"
      onClick={() => toggleCategory(category)}
    >
      {categoriesToShow.includes(category) ? (
        <div
          className={`h-4 w-4 rounded-full ${eventColors["light-bg"][category]}`}
        />
      ) : (
        <div
          className={`h-4 w-4 rounded-full border-2 border-solid ${eventColors["light-border"][category]}`}
        />
      )}
      <p>{category}</p>
    </div>
  ));

  return (
    <div className="sm:px-12">
      <div className="mb-12 flex flex-wrap place-content-center gap-4 md:gap-8">
        {categorySelectionButtons}
      </div>
      {eventsToShow.length > 0 ? (
        <div className="auto-grid-base mx-auto grid max-w-6xl auto-rows-fr gap-12">
          {eventsToShow}
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center">
          <p className="text-xl">We have no events to show...</p>
        </div>
      )}
    </div>
  );
}
