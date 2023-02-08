import { useRouter } from "next/router";
import { useEffect } from "react";
import Modal from "react-modal";
import { getProjectById, getProjectIds } from "../../lib/posts";
import markdownToHtml from "../../lib/markdownToHtml";
import ButtonClose from "../../components/button-close";
import ProjectShowcase from "../../components/project-showcase";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { isProjectInCMS, ProjectInCMS } from "../../types/project-in-cms";
import { ParsedUrlQuery } from "querystring";

Modal.setAppElement("#__next");

interface Props {
  project: ProjectInCMS;
}

export default function ProjectPage({ project }: Props) {
  const router = useRouter();

  function closeModal() {
    router.push("/projects");
  }

  useEffect(() => {
    router.prefetch("/projects");
  });

  return (
    <>
      <Head>
        <title>Project | GDSC UPD</title>
      </Head>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Project modal"
        className="div-style1 absolute inset-x-4 mx-auto my-4 max-w-3xl overflow-y-auto bg-white md:inset-x-10 md:my-10"
        style={{ content: { maxHeight: "calc(100% - 5rem)" } }}
        overlayClassName="fixed bg-black/50 inset-0"
        parentSelector={() => document.querySelector("#__next") as HTMLElement}
      >
        <ButtonClose onClick={closeModal} />
        <ProjectShowcase project={project} />
      </Modal>
    </>
  );
}

interface SafeParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as SafeParams;
  const project = getProjectById(id);

  if (isProjectInCMS(project)) {
    const body = await markdownToHtml(project.body || "");
    const projectInProps = JSON.parse(JSON.stringify({ ...project, body }));
    return {
      props: { project: projectInProps },
    };
  } else {
    return {
      props: {},
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getProjectIds().map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};
