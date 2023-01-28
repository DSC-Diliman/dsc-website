import { getEvents } from "../lib/posts";
import Landing from "../components/landing";
import WhatDoWeDo from "../components/what-do-we-do";
import UpcomingEvents from "../components/upcoming-events";
import Head from "next/head";

export default function Home({ eventsArray }) {
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
      eventsArray: getEvents([
        "title",
        "date",
        "dateEnd",
        "eventType",
        "location",
        "locationURL",
      ]),
    },
  };
}
