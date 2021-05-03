import markdownStyle from "/components/Markdown.module.scss"

export default function ProjectShowcase({ project }) {
  return (<>
    <div className="md:mx-6 md:mt-6 img-frame h-80 md:rounded-3xl"><img src={project.images[0]} /></div>
    <div className="m-3 md:m-6">
      <h1>{project.title}</h1>
      <div className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: project.content }} />
    </div>
  </>)
}