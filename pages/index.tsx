import { getEvents } from "../lib/posts";
import Landing from "../components/landing";
import WhatDoWeDo from "../components/what-do-we-do";
import UpcomingEvents from "../components/upcoming-events";
import Head from "next/head";
import { EventInCMS } from "../types/event-in-cms";

interface Props {
  eventsArray: EventInCMS[];
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
