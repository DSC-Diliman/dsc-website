import Head from "next/head";
import Description from "../components/description";
import Mission from "../components/mission";
import Vision from "../components/vision";

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
