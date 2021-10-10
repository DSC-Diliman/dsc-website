import Layout from "../components/layout-default";

export default function Error404() {
  return (
    <>
      <div className="mx-10 flex flex-col md:flex-row justify-center items-center pt-24">
        <div>
          <p className="text-9xl md:text-10xl lg:text-xxl font-bold text-white text-shadow-xl">404</p>
          <p className="text-xl lg:text-5xl font-bold lg:mb-4">Oops!</p>
          <p className="">The page cannot be found</p>
        </div>
        <div>
          <img
            src="/images/oops.png"
            alt="Oops!"
            width={509}
            height={509}
          />
        </div>
      </div>
    </>
  )
}

Error404.getLayout = page => (
  <Layout title="404">
    {page}
  </Layout>
)