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
    <div className="div-style1 relative mx-auto mt-12 max-w-sm sm:max-w-lg md:max-w-2xl">
      <button
        className="absolute top-5 right-5 z-10 h-12 w-12 rounded-full bg-black/60 transition-all hover:rotate-90"
        onClick={resetSelectedProject}
      >
        <IoClose color={"white"} className="h-8 w-8 align-middle" />
      </button>
      <div className="img-frame z-0 h-80 rounded-2xl drop-shadow-lg md:m-6 md:mb-7">
        <Image
          src={project.images[0]}
          alt="Project image"
          height={320}
          width={320}
        />
      </div>
      <div className="m-6">
        <h1 className="mb-4 md:mb-6">{project.title}</h1>
        <div
          className={`${markdownStyle.markdown}`}
          dangerouslySetInnerHTML={{ __html: project.body || "" }}
        />
      </div>
    </div>
  );
}
