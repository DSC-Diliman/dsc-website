import { useState } from "react";
import Modal from "react-modal";
import { getProjects } from "../lib/posts";
import Masonry from "react-masonry-css";
import masonryStyle from "/components/Masonry.module.scss";
import ProjectShowcase from "../components/project-showcase";
import Image from "next/image";
import Head from "next/head";
import { isArrayOfProjectsInCMS, ProjectInCMS } from "../types/project-in-cms";
import markdownToHtml from "../lib/markdownToHtml";

Modal.setAppElement("#__next");

interface Props {
  allProjectsData: ProjectInCMS[];
}

export default function Projects({ allProjectsData }: Props) {
  const [selectedProject, setSelectedProject] = useState<ProjectInCMS | null>(
    null
  );

  function resetSelectedProject() {
    setSelectedProject(null);
  }

  return (
    <>
      <Head>
        <title>Projects | GDSC UPD</title>
      </Head>
      <div className="w-full px-4 text-center md:mt-32">
        <h1>Projects</h1>
        <p className="mt-4">
          Click on the images to view our completed projects!
        </p>
      </div>
      {selectedProject && (
        <>
          <ProjectShowcase
            project={selectedProject}
            resetSelectedProject={resetSelectedProject}
          />
          <h1 className="mt-20 text-center">All Projects</h1>
        </>
      )}
      <div className="mt-12 mx-auto w-full max-w-6xl flex-1 px-4 md:px-10">
        {allProjectsData.length ? (
          <Masonry
            className={masonryStyle["projects-masonry"]}
            breakpointCols={{ default: 4, 768: 3, 640: 2 }}
          >
            {allProjectsData.map((projectData, index) => (
              <div key={index} onClick={() => setSelectedProject(projectData)}>
                {selectedProject?.id === projectData.id && (
                  <div className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
                    Selected
                  </div>
                )}
                <div className="absolute bottom-0">
                  <div className="h-4 w-full bg-gradient-to-t from-black/30" />
                  <p className="w-full bg-gradient-to-t from-black to-black/30 px-4 py-3 text-white">
                    {projectData.title}
                  </p>
                </div>
                <Image
                  src={projectData.thumbnail}
                  alt="Project thumbnail"
                  height={384}
                  width={384}
                />
              </div>
            ))}
          </Masonry>
        ) : (
          <div className="mt-20">
            <p>We have no projects to show...</p>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getProjects();

  if (isArrayOfProjectsInCMS(allProjectsData)) {
    allProjectsData.forEach(async (event, index, events) => {
      events[index].body = await markdownToHtml(event.body || "");
    });
    await Promise.all(allProjectsData);
  }

  return {
    props: { allProjectsData },
  };
}
