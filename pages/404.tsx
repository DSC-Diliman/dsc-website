import Image from "next/image";
import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 | GDSC UPD</title>
      </Head>
      <div className="mx-10 flex flex-col md:flex-row justify-center items-center pt-24">
        <div>
          <p className="text-9xl md:text-10xl lg:text-xxl font-bold text-white text-shadow-xl">
            404
          </p>
          <p className="text-xl lg:text-5xl font-bold lg:mb-4">Oops!</p>
          <p className="">The page cannot be found</p>
        </div>
        <div>
          <Image
            src="/images/oops.png"
            alt="Robot design for 404 page"
            width={509}
            height={509}
          />
        </div>
      </div>
    </>
  );
}