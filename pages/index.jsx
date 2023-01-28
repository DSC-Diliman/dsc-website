import Layout from "../components/layout-default";
import { getEvents } from "../lib/posts";
import Landing from "../components/landing";
import WhatDoWeDo from "../components/what-do-we-do";
import UpcomingEvents from "../components/upcoming-events";

export default function Home({ eventsArray }) {
  return (
    <>
      <Landing />
      <WhatDoWeDo />
      <UpcomingEvents eventsArray={eventsArray} />
    </>
  );
}

Home.getLayout = (page) => (
  <Layout
    footerChildren={
      <p className="text-xs italic">Oblation photo by Mila D. Aguilar.</p>
    }
  >
    {page}
  </Layout>
);

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
