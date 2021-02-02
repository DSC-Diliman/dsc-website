import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPosts } from '../lib/posts'

export default function Projects({ allProjectsData }) {
  return (
    <Layout title="Projects">
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
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allProjectsData: getSortedPosts('projects', [
        "title",
        "date",
        "summary",
        "content"
      ])
    }
  }
}