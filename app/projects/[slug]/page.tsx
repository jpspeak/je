import React from "react";
import ProjectModal from "./components/ProjectModal";
import { getProject } from "@/sanity/query/project";

async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await getProject({ slug });

  return (
    <>
      <ProjectModal project={project} />
    </>
  );
}

export default Project;
