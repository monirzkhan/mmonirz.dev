
import projects from "./projects";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-12 bg-[#0b1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            A selection of projects that demonstrate my technical skills,
            creativity, and problem-solving abilities.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-12">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;