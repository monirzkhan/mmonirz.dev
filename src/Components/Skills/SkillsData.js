import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinux,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiNetlify,
  
  SiNpm,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    subtitle: "UI & Interaction",
    color: "#4F7CFF",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    subtitle: "APIs & Server Logic",
    color: "#22C55E",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#444444" },
      
    ],
  },

  {
    title: "Database",
    subtitle: "Storage & Data",
    color: "#4F7CFF",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
     
    ],
  },

  {
    title: "Tools & DevOps",
    subtitle: "Infra & Workflow",
    color: "#F59E0B",
    skills: [
      
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ],
  },
];