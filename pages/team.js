import Layout from "../components/layout-default"

export default function Team() {
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <div className="test2">test</div>
    </>
  )
}

Team.getLayout = page => (
  <Layout title="Team">
    {page}
  </Layout>
)