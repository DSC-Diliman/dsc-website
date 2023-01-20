import Description from '../components/description'
import Layout from "../components/layout-default"
import Mission from '../components/mission'
import Socials from '../components/socials'
import Vision from '../components/vision'

export default function About() {
  return (
    <>
			<Description />
			<Vision />
			<Mission />
			<Socials />
    </>
  )
}

About.getLayout = page => (
  <Layout title="About">
    {page}
  </Layout>
)