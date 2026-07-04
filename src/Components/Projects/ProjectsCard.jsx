import { Link } from "react-router";
import {
    FaReact,

    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiJsonwebtokens,
} from "react-icons/si";
import { BsJavascript } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";




const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <BsJavascript></BsJavascript>,
    React: <FaReact className="text-sky-400" />,
    "Express.js": <SiExpress className="text-gray-300" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Firebase: <SiFirebase className="text-yellow-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    JWT: <SiJsonwebtokens className="text-orange-400" />,
    DaisyUI:<SiDaisyui/>
};

const ProjectCard = ({ project }) => {
    const {
        id,
        title,
        image,
        description,
        technologies,
        live,
        github,
    } = project;

    return (
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition-all duration-500 hover:border-indigo-500 hover:shadow-indigo-500/20">

            {/* Left Side */}

            <div className="flex flex-col justify-between p-8">

                <div>

                    <h2 className="text-3xl font-bold text-white mb-5">
                        {title}
                    </h2>

                    <p className="text-gray-300 leading-8">
                        {description}
                    </p>

                    {/* Technology Badges */}

                    <div className="flex flex-wrap gap-3 mt-8">

                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="flex items-center gap-2 rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-gray-200 hover:border-indigo-500 transition"
                            >
                                {iconMap[tech]}
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-10">

                    <Link
                        to={`/project/${id}`}
                        className="rounded-full bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 font-semibold text-white"
                    >
                        More Details →
                    </Link>

                    <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition px-6 py-3 flex items-center gap-2"
                    >
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>

                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white transition px-6 py-3 flex items-center gap-2"
                    >
                        <FaGithub />
                        Client Code
                    </a>

                </div>

            </div>

            {/* Right Side */}

            <div className="overflow-hidden bg-slate-950">

                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-top object-cover transition duration-700 hover:scale-105"
                />

            </div>

        </div>
    );
};

export default ProjectCard;