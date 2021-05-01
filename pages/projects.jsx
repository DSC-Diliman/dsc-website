import Layout from "/components/layout-default"
import { getProjects } from "/lib/posts"
import Masonry from "react-masonry-css"
import Link from "next/link";
import masonryStyle from "/components/Masonry.module.scss"

export default function Projects({ allProjectsData }) {
  return (
    <>
      <div className="px-10 pt-32 pb-6 w-full text-center">
        <h1 className="my-4">
          Projects
        </h1>
        <p>Click on the images to view our completed projects!</p>
      </div>
      <div className="flex-1 px-10 mx-auto w-full max-w-6xl">
        {allProjectsData ?
          <Masonry
            className={masonryStyle["projects-masonry"]}
            breakpointCols={{ default: 4, 768: 3, 640: 2 }}
          >
            {allProjectsData.map((projectData, index) =>
              <div key={index}>
                <Link
                  href={{
                    pathname: "/projects/[id]",
                    query: { id: projectData.id },
                  }}
                >
                  <a>
                    <p className="absolute bottom-0 px-4 py-3 w-full bg-gradient-to-t from-black text-white">{projectData.title}</p>
                    <img src={projectData.thumbnail} className="-z-10" />
                  </a>
                </Link>
              </div>
            )}
          </Masonry>
          : <p className="text-3xl text-center">No Projects Available</p>}
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