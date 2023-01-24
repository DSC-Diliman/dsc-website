import { useRouter } from "next/router"
import { useEffect } from "react"
import Modal from "react-modal"
import Layout from "/components/layout-default"
import { getProjectById, getProjectIds } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import ButtonClose from "../../components/button-close"
import ProjectShowcase from "../../components/project-showcase"

Modal.setAppElement("#__next")

export default function ProjectPage({ project }) {
  const router = useRouter()

  function closeModal() {
    router.push("/projects")
  }

  useEffect(() => {
    router.prefetch("/projects")
  }, [])

  return (<>
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Project modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
      parentSelector={() => document.querySelector("#__next")}
    >
      <ButtonClose onClick={closeModal} />
      <ProjectShowcase project={project} />
    </Modal>
  </>)
}

ProjectPage.getLayout = page => (
  <Layout title="Project">
    {page}
  </Layout>
)

export async function getStaticProps({ params: { id } }) {
  const project = getProjectById(id)
  const content = await markdownToHtml(project.content || '')

  return {
    props: { project: { ...project, content } }
  }
}

export async function getStaticPaths() {
  return {
    paths: getProjectIds().map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}