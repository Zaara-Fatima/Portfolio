import React from "react";
import { ProjectCards } from "./ProjectCards";
import { projectImgs } from "../assets/assets.jsx";

const projects = [
  {
    title: "Repo2Post - The Linkedin Saver",
    stacks: [
      "AISassApp",
      "NodeJS",
      "MongoDB",
      "GeminiAPI",
      "System Design",
      "Docker",
    ],
    year: "2026",
    img: projectImgs[0],
    description:
      "Most developers struggle to clearly explain their projects when sharing them professionally. To solve this, I built Repo2Post — an AI-powered web app that analyzes a GitHub repository and generates a structured, easy-to-read LinkedIn post based on the actual codebase",
    url: "https://repo2post.onrender.com/",
  },
  {
    title: "MyFirstCake - an Ecommerce website ",
    stacks: ["Web App", "Full Stack", "ReactJS", "JavaScript"],
    year: "2025",
    img: projectImgs[1],
    description:
      "Building e-commerce applications from scratch is one of the best ways to practice end-to-end web development",
    url: "https://my-first-cake-cs3t.vercel.app/",
  },

  {
    title: "Jigsaw Puzzle - First Project",
    stacks: ["ReactJS", "JavaScript", "Vite", "FrontendDev"],
    year: "2024",
    img: projectImgs[2],
    description:
      "I recently put together a lightweight project called Puzzle-Game-JigSaw.\n\nIt\'s a web-based jigsaw puzzle game designed to explore interactive mechanics on the web.",
    url: "https://puzzle-game-jig-saw.vercel.app/",
  },
  {
    title: "Task Tracker-Task Management",
    stacks: [
      "SaaS Platform",
      "JavaScript ",
      "FullStack",
      "Vercel",
    ],
    year: "2025",
    img: projectImgs[3],

    description:
      "Building a project from scratch and taking it all the way to production is always a huge learning experience. I recently completed Task-Tracker, a web app built to handle task management.",
    url: "https://task-tracker-zc7a.vercel.app/",
  },
  {
    title: "Iphone Website-Webclone",
    stacks: ["JavaScript", "ThreeJS", "GSAP"],
    year: "2025",
    img: projectImgs[4],

    description:
      "Building real-world clones is one of the best ways to sharpen complex frontend skills.I recently worked on an iPhone website clone specifically to practice working with 3D web graphics and advanced animations.I also Added Backend to it",
    url: "Coming Soon",
  },
];
export const Featured = () => {
  return (
    <section className="w-full flex flex-col gap-2 bg-black p-6">
      <div className="flex items-center gap-2">
        <span className="bg-[#C6F27B] rounded-full h-2 w-2" />
        <h3 className="text-[#9BA1A6] text-sm font-medium">
          PROJECTS COMPLETED/ 2024-2026
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#F3F4F1] text-3xl">Ideas made tangible</h1>
        <p className="text-[#9BA1A6] text-lg">
          {" "}
          A selection of products I've designed and built. Thoughtful on the
          surface. Solid underneath.
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCards
            key={project.title}
            title={project.title}
            stacks={project.stacks}
            description={project.description}
            year={project.year}
            img={project.img}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};
