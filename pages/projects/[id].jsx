import { useRouter } from "next/router"
import { useEffect } from "react"
import Modal from "react-modal"
import Layout from "/components/layout-default"
import { getProjectById, getProjectIds } from "/lib/posts"
import markdownToHtml from "/lib/markdownToHtml"
import markdownStyle from "/components/Markdown.module.scss"

Modal.setAppElement("#__next")

export default function EventPage({ project }) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch("/projects")
  }, [])

  return (<>
    <Modal
      isOpen={true}
      onRequestClose={() => router.back()}
      contentLabel="Event modal"
      className="absolute inset-x-4 md:inset-x-10 mx-auto my-4 md:my-10 max-w-3xl bg-white div-style1 overflow-y-auto"
      style={{ content: { maxHeight: 'calc(100% - 5rem)' } }}
      overlayClassName="fixed bg-black bg-opacity-50 inset-0"
    >
      <div className="md:mx-6 md:mt-6 img-frame h-80 md:rounded-3xl"><img src={project.images[0]} /></div>
      <div className="m-3 md:m-6">
        <h1>{project.title}</h1>
        <div className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>
    </Modal>
  </>)
}

EventPage.getLayout = page => (
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