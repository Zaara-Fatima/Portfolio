import React from 'react'
import { Icons } from '../assets/assets.jsx'
import { SkillCard } from './SkillCard.jsx';

const skills = [
  {
    icon: "screen_search_desktop",
    title: "UX Research",
    text: "Finding the why behind the what.",
  },
  { icon:"web",
     title: "Wireframing", 
     text: "Structure before the surface." },
  {
    icon: "arrow_selector_tool",
    title: "Prototyping",
    text: "Making ideas feel real, early.",
  },
  {
    icon: "code_xml",
    title: "Frontend Development",
    text: "Accessible, responsive, delightfully fast.",
  },
  {
    icon: "database",
    title: "Backend & APIs",
    text: "Reliable systems that connect it all.",
  },
  {
    icon: "component_exchange",
    title: "Design Systems",
    text: "Consistency built to scale.",
  },
];

export const Skills = () => {
  return (
    <section className="w-full flex flex-col gap-2 bg-black p-6">
        <div className="flex items-center gap-2">
        <span className="bg-[#C6F27B] rounded-full h-2 w-2" />
        <h3 className="text-[#9BA1A6] text-sm font-medium">
          Skills & tools
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#F3F4F1] text-3xl">
            From first sketch to full stack.
        </h1>
        <p className="text-[#9BA1A6] text-lg">
          One connected process. Research, design, and engineering working together.
        </p>
      </div>
      <div>
        <ul className='grid grid-cols-2 gap-3 items-start'>
          {skills.map((skill)=>(
            <li className='bg-[#23272a] border-[#494c4e] border  p-2 rounded-2xl' key={skill.title}>
              <SkillCard icon={skill.icon} title={skill.title} text={skill.text}/>
            </li>
          ))}
        </ul>
      </div>
      <div >
        <p className='uppercase text-[#9BA1A6]'>Tools of the trade</p>
      <ul className='flex gap-2 text-[#F3F4F1]'>
        <li>Figma <Icons.figma className="w-8 h-8 text-green-500 p-1"/></li>
        <li>React<Icons.react className="w-8 h-8 text-green-500 p-1"/></li>
        <li>JavaScript<Icons.javaScript className="w-8 h-8 text-green-500 p-1"/></li>
        <li>Vercel<Icons.vercel className="w-8 h-8 text-green-500 p-1"/></li>
        <li>Docker<Icons.docker className="w-8 h-8 text-green-500 p-1"/></li>
        <li>MongoDB<Icons.mongoDB
        className="w-8 h-8 text-green-500 p-1"/></li>
        <li>Github Actions<Icons.githubAction
        className="w-8 h-8 text-green-500 p-1"/></li>
      </ul>
      <ul className="flex gap-5 text-[#9BA1A6] md:justify-end">
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Vercel</li>
          </ul>
      </div>
    </section>
  )
}


