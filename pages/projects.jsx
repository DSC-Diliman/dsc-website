import Layout from '../components/layout-default'
import { getProjects } from '../lib/posts'
import Masonry from 'react-masonry-css'

export default function Projects({ allProjectsData }) {
  return (
    <>
      <div className="px-10 pt-32 pb-10 w-full text-center">
        <h1>
          Projects
        </h1>
        <p>Click on the images to view our completed projects!</p>
      </div>
      <div className="flex-1 px-10 mx-auto w-full max-w-6xl">
        {allProjectsData ?
          <Masonry
            className="projects-masonry"
            breakpointCols={{ default: 4, 768: 3, 640: 2 }}
          >
            {allProjectsData.map((projectData, index) =>
              <div key={index}>
                <p className="absolute bottom-0 px-4 py-3 w-full bg-gradient-to-t from-black text-white">{projectData.title}</p>
                <img src={projectData.thumbnail} className="-z-10" />
              </div>
            )}
          </Masonry>
          : <p className="text-3xl">No Projects Available</p>}
      </div>
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