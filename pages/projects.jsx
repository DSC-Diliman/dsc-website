import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import Layout from "/components/layout-default"
import { getProjects } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import Masonry from "react-masonry-css"
import Link from "next/link";
import masonryStyle from "/components/Masonry.module.scss"
import markdownStyle from "/components/Markdown.module.scss"
import ButtonClose from "../components/button-close"
import ProjectShowcase from "../components/project-showcase"

Modal.setAppElement("#__next")

export default function Projects({ allProjectsData }) {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState(null)

  function closeModal() {
    router.push(router.pathname, undefined, { scroll: false })
  }

  useEffect(() => {
    if (router.query.id) {
      setSelectedProject(allProjectsData.find(
        project => project.id == router.query.id
      ))
    } else {
      setSelectedProject(null)
    }
  }, [router.query.id])

  return (
    <>
      <Modal
        isOpen={!!selectedProject}
        onRequestClose={closeModal}
        contentLabel="Project modal"
        className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
        style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
        overlayClassName="fixed bg-black bg-opacity-50 inset-0"
        parentSelector={() => document.querySelector("#__next")}
      >
        <ButtonClose onClick={closeModal} />
        {selectedProject ? <ProjectShowcase project={selectedProject} /> : null}
      </Modal>
      <div className="px-4 md:px-10 pt-12 md:pt-24 pb-3 md:pb-6 w-full text-center">
        <h1 className="my-4">
          Projects
        </h1>
        <p>Click on the images to view our completed projects!</p>
      </div>
      <div className="flex-1 px-4 md:px-10 mx-auto w-full max-w-6xl">
        {allProjectsData.length ?
          <Masonry
            className={masonryStyle["projects-masonry"]}
            breakpointCols={{ default: 4, 768: 3, 640: 2 }}
          >
            {allProjectsData.map((projectData, index) =>
              <div key={index}>
                <Link
                  href={`/projects?id=${projectData.id}`}
                  as={`/projects/${projectData.id}`}
                  scroll={router.pathname != "/projects"}
                  shallow={true}
                >
                  <a>
                    <p className="absolute bottom-0 px-4 py-3 w-full bg-gradient-to-t from-black text-white">{projectData.title}</p>
                    <img src={projectData.thumbnail} />
                  </a>
                </Link>
              </div>
            )}
          </Masonry>
          : <p className="text-3xl text-center">Under construction</p>}
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
  const allProjectsData = getProjects()
  allProjectsData.forEach(async (event, index, events) => {
    events[index].content = await markdownToHtml(event.content || '')
  })
  await Promise.all(allProjectsData)

  return {
    props: { allProjectsData }
  }
}
