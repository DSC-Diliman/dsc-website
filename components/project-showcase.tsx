import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { ProjectInCMS } from "../types/project-in-cms";
import markdownStyle from "/components/Markdown.module.scss";

interface Props {
  project: ProjectInCMS;
  resetSelectedProject: () => void;
}

export default function ProjectShowcase({
  project,
  resetSelectedProject,
}: Props) {
  return (
    <div className="div-style1 relative mx-auto mt-12 max-w-2xl">
      <button className="top-5 right-5 absolute h-12 w-12 rounded-full bg-black/60" onClick={() => resetSelectedProject()}>
        <IoClose color={"white"} className="h-8 w-8 align-middle" />
      </button>
      <div className="img-frame h-80 md:m-6 md:rounded-2xl">
        <Image
          src={project.images[0]}
          alt="Project image"
          height={320}
          width={320}
        />
      </div>
      <div className="m-3 md:m-6">
        <h1 className="mb-6">{project.title}</h1>
        <div
          className={`${markdownStyle.markdown}`}
          dangerouslySetInnerHTML={{ __html: project.body || "" }}
        />
      </div>
    </div>
  );
}
