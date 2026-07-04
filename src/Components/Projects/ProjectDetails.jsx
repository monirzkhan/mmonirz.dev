import { Link, useParams } from "react-router";
import projects from "./projects";

import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";

import {
  FaReact,
 
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const iconMap = {
  React: <FaReact className="text-sky-400" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  JWT: <SiJsonwebtokens className="text-orange-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
};

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b1120] text-white py-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Back Button */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-indigo-400 hover:text-indigo-300 transition"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Hero */}

        <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-xl">

          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover object-top"
          />

        </div>

        {/* Title */}

        <div className="mt-12">

          <h1 className="text-5xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 text-gray-300 leading-8 text-lg">
            {project.description}
          </p>

        </div>

        {/* Technologies */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-5 py-3"
              >
                {iconMap[tech]}
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-5 mt-14">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3"
          >
            <FaExternalLinkAlt />
            Live Project
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-indigo-500 hover:bg-indigo-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3"
          >
            <FaGithub />
            Client Repository
          </a>

        </div>

        {/* Challenges */}

        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Challenges Faced
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {project.challenges.map((challenge) => (

              <div
                key={challenge}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 flex gap-4"
              >
                <FaCheckCircle className="text-indigo-400 mt-1" />

                <p>{challenge}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Future */}

        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Future Improvements
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {project.improvements.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 flex gap-4"
              >
                <FaCheckCircle className="text-green-400 mt-1" />

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProjectDetails;