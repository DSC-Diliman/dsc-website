import Image from "next/image"
import Layout from "../components/layout";

export default function error404() {
  return (
    <Layout title="404">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <p className="text-9xl md:text-10xl lg:text-xxl font-bold text-white text-shadow-xl">404</p>
          <p className="text-xl lg:text-5xl font-bold lg:mb-4">Oops!</p>
          <p className="">The page cannot be found</p>
        </div>
        <div>
          <Image
            src="/images/oops.png"
            alt="Oops!"
            width={509}
            height={509}
          />
        </div>
      </div>
    </Layout>
  )
}