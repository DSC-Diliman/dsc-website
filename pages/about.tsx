import Head from "next/head";
import Description from "../components/about/description";
import Mission from "../components/about/mission";
import Vision from "../components/about/vision";

export default function About() {
  return (
    <>
      <Head>
        <title>About | GDSC UPD</title>
      </Head>
      <Description />
      <Vision />
      <Mission />
    </>
  );
}
