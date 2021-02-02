import Image from "next/image"
import Layout from "../components/layout"

export default function Team() {
  return (
    <Layout title="Team">
      <div className="test">
        <Image
          src="/images/dsc-logo.png"
          width={439}
          height={214}
        />
      </div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <div className="test2">test</div>
    </Layout>
  )
}
