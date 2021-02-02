import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.scss"

export default function About() {
  return (
    <Layout title="About">
      <div className={utilStyles.test}>
        <Image
          src="/dsc-logo.png"
          width={439}
          height={214}
        />
      </div>
      <h1>
        About
      </h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <div className={utilStyles.test2}>test</div>
    </Layout>
  )
}
