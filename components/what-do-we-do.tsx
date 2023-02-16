import { GiMicrophone, GiMagnifyingGlass } from "react-icons/gi";
import { BsWrench } from "react-icons/bs";
import { ImLab } from "react-icons/im";
import OffsetGrid from "./offset-grid";
import Link from "next/link";
import { OffsetGridElement } from "../types/offset-grid-element";

export default function WhatDoWeDo() {
  const offsetGridContents: OffsetGridElement[] = [
    {
      heading: "Speaker Sessions",
      text: "Hear from esteemed speakers as they share their insights, experience, and wisdom.",
      icon: (
        <GiMicrophone
          size={150}
          color="red"
          className="absolute -bottom-2 right-4 z-0 opacity-10 md:bottom-4"
        />
      ),
    },
    {
      heading: "Internal",
      text: "Get a glimpse of how our organization operates!",
      icon: (
        <GiMagnifyingGlass
          size={150}
          color="blue"
          className="absolute -bottom-2 right-4 z-0 opacity-10 md:bottom-4"
        />
      ),
    },
    {
      heading: "Workshops",
      text: "Get a chance to learn new skills through hands-on workshops and study jams.",
      icon: (
        <BsWrench
          size={150}
          color="green"
          className="absolute -bottom-2 right-4 z-0 opacity-10 md:bottom-4"
        />
      ),
    },
    {
      heading: "Tech Solutions",
      text: "Use the skills you learn in our events to solve community problems through projects!",
      icon: (
        <ImLab
          size={150}
          color="yellow"
          className="absolute -bottom-2 right-4 z-0 opacity-20 md:bottom-4"
        />
      ),
    },
  ];

  return (
    <section
      className="
			flex flex-col items-center justify-center bg-gray-200 px-4 pt-12 pb-10
			sm:pb-16
			md:px-10 md:shadow-above
		"
    >
      <h1 className="mb-1 text-center sm:mb-4">
        What do we do in GDSC UP Diliman?
      </h1>
      <OffsetGrid elements={offsetGridContents} />
      <Link href="/team">
        <button className="btn-style2-default">Check out our teams!</button>
      </Link>
    </section>
  );
}
