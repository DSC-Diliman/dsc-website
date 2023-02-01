import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getProjects } from "../lib/posts";
import Masonry from "react-masonry-css";
import Link from "next/link";
import masonryStyle from "/components/Masonry.module.scss";
import ButtonClose from "../components/button-close";
import ProjectShowcase from "../components/project-showcase";
import Image from "next/image";
import Head from "next/head";
import { isArrayOfProjectsInCMS, ProjectInCMS } from "../types/project-in-cms";
import markdownToHtml from "../lib/markdownToHtml";
import titleToId from "../lib/titleToId";

Modal.setAppElement("#__next");

interface Props {
  allProjectsData: ProjectInCMS[];
}

export default function Projects({ allProjectsData }: Props) {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<ProjectInCMS | null>(
    null
  );

  function closeModal() {
    router.push(router.pathname, undefined, { scroll: false });
  }

  useEffect(() => {
    if (router.query.id) {
      const result = allProjectsData.find(
        (project) => titleToId(project.title) === router.query.id
      );
      setSelectedProject(result === undefined ? null : result);
    } else {
      setSelectedProject(null);
    }
  }, [router.query.id, allProjectsData]);

  return (
    <>
      <Head>
        <title>Projects | GDSC UPD</title>
      </Head>
      <Modal
        isOpen={!!selectedProject}
        onRequestClose={closeModal}
        contentLabel="Project modal"
        className="div-style1 absolute inset-x-4 mx-auto my-4 max-w-3xl overflow-y-auto bg-white md:inset-x-10 md:my-10"
        style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
        overlayClassName="fixed bg-black/50 inset-0"
        parentSelector={() => document.querySelector("#__next") as HTMLElement}
      >
        <ButtonClose onClick={closeModal} />
        {selectedProject ? <ProjectShowcase project={selectedProject} /> : null}
      </Modal>
      <div className="w-full px-4 pt-12 pb-3 text-center md:px-10 md:pt-24 md:pb-6">
        <h1 className="my-4">Projects</h1>
        <p>Click on the images to view our completed projects!</p>
      </div>
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 md:px-10">
        {allProjectsData.length ? (
          <Masonry
            className={masonryStyle["projects-masonry"]}
            breakpointCols={{ default: 4, 768: 3, 640: 2 }}
          >
            {allProjectsData.map((projectData, index) => (
              <div key={index}>
                <Link
                  href={`/projects?id=${titleToId(projectData.title)}`}
                  as={`/projects/${titleToId(projectData.title)}`}
                  scroll={router.pathname != "/projects"}
                  shallow={true}
                >
                  <p className="absolute bottom-0 w-full bg-gradient-to-t from-black px-4 py-3 text-white">
                    {projectData.title}
                  </p>
                  <Image
                    src={projectData.thumbnail}
                    alt="Project thumbnail"
                    height={384}
                    width={384}
                  />
                </Link>
              </div>
            ))}
          </Masonry>
        ) : (
          <p className="text-center text-3xl">Under construction</p>
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
