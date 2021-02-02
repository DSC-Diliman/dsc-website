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
      <h1>
        About
      </h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <div className="test2">test</div>
    </Layout>
  )
}
