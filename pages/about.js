import Image from "next/image"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout title="About">
      <div className="test">
        <Image
          src="/images/dsc-logo.png"
          width={439}
          height={214}
        />
      </div>
      <div className="flex flex-col flex-nowrap items-center text-center pt-24">
        <h1 className="mb-4 text-4xl">What is DSC-UPD?</h1>
        <p className="mb-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="mb-8 max-w-7xl shadow-2xl overflow-hidden rounded-4xl">
          <Image
            src="/images/oops.png"
            width={1203}
            height={434}
          />
        </div>
        <p className="max-w-3xl text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </Layout>
  )
}
