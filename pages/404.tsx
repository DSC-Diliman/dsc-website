import Image from "next/image";
import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 | GDSC UPD</title>
      </Head>
      <div className="mx-10 flex flex-col items-center justify-center pt-24 md:flex-row">
        <div>
          <p className="text-shadow-xl text-9xl font-bold text-white md:text-10xl lg:text-xxl">
            404
          </p>
          <p className="text-xl font-bold lg:mb-4 lg:text-5xl">Oops!</p>
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
