import Link from "next/link";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";


import { getAllProjects } from "../../functions/getAllProjects";

export default function ProjectsPage({ projects }) {
  return (
    <Layout title={"My Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-32 md:pt-4">
        <Link
          href="/"
          className="flex items-center space-x-4 font-semibold pb-10 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
        >
          
          <span>{"<<<"} Back to Home</span>
        </Link>

        {/* Projects.. */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
