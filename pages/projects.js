import Layout from '../components/layout-default'
import { getProjects } from '../lib/posts'

export default function Projects({ allProjectsData }) {
  return (
    <>
      <h1>
        Projects
      </h1>
      <ul>
        {allProjectsData.map(projectData => (
          <li key={projectData.id}>
            {projectData.title}
            <br />
            {projectData.date}
            <br />
            {projectData.summary}
          </li>
        ))}
      </ul>
    </>
  )
}

Projects.getLayout = page => (
  <Layout title="Projects">
    {page}
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {
      allProjectsData: getProjects()
    }
  }
}