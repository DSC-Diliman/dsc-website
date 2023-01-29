import Image from "next/image";
import { ProjectInCMS } from "../types/project-in-cms";
import markdownStyle from "/components/Markdown.module.scss";

interface Props {
  project: ProjectInCMS;
}

export default function ProjectShowcase({ project }: Props) {
  return (
    <>
      <div className="md:mx-6 md:mt-6 img-frame h-80 md:rounded-3xl">
        <Image src={project.images[0]} alt="Project image" fill />
      </div>
      <div className="m-3 md:m-6">
        <h1>{project.title}</h1>
        <div
          className={markdownStyle.markdown}
          dangerouslySetInnerHTML={{ __html: project.body || "" }}
        />
      </div>
    </>
  );
}