import { getEvents } from "../lib/posts";
import Landing from "../components/home/landing";
import WhatDoWeDo from "../components/home/what-do-we-do";
import UpcomingEvents from "../components/events/upcoming-events";
import Head from "next/head";
import { Event } from "../types/event";

interface Props {
  eventsArray: Event[];
}

export default function Home({ eventsArray }: Props) {
  return (
    <>
      <Head>
        <title>GDSC UP Diliman</title>
      </Head>
      <Landing />
      <WhatDoWeDo />
      <UpcomingEvents eventsArray={eventsArray} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      eventsArray: JSON.parse(JSON.stringify(getEvents())),
    },
  };
}
