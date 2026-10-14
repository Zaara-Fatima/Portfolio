import React from "react";
import { Button } from "../utils/Button";
import { projectImgs } from "../assets/assets";

export const Introduction = () => {
  return (
    <section className="w-full flex flex-col items-center  bg-black p-6 " id="About">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4 p-2 max-w-auto">
          <div className="flex items-center gap-2">
            <span className="bg-[#C6F27B] rounded-full h-2 w-2" />
            <h2 className="text-[#9BA1A6] text-sm font-medium">
              FULL STACK DEVELOPER · AVAILABLE FOR WORK
            </h2>
          </div>
          <div>
            <h1 className="text-[#F3F4F1] text-4xl font-semibold">
              Crafting digital products
            </h1>
            <h1 className="text-[#C6F27B] text-4xl font-semibold">
              that user love
            </h1>
          </div>
          <p className="text-[#9BA1A6] text-md font-medium">
            I'm Zaara, a full stack developer with a designer’s eye. I turn
            complex ideas into thoughtful interfaces and scalable web
            applications — from the first wireframe to the final API.
          </p>
          <div className="flex flex-col gap-2 max-w-sm">
            <Button
              text="View Work"
              className="text-black bg-[#C6F27B] cursor-pointer rounded-[10px] text-md font-medium"
            />
            <Button
              text="Download CV"
              className="text-[#F3F4F1] cursor-pointer rounded-[10px] border-[#2A2F34] border text-md font-medium"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 p-6 max-w-auto items-center border border-b-[#2A2F34]">
            <div >
            <img src={projectImgs[5]} alt="pfp" className="rounded-full w-40 h-40 max-w-60 max-h-60 object-cover"/>
          </div>
            <p className="text-md text-[#F3F4F1]">
              Good design. Clean code. Real impact.
            </p>
            <p className="text-md text-[#2A2F34]">
              BASED IN LONDON · BUILDING EVERYWHERE
            </p>
          </div>
          <div className="border-t border-[#2A2F34] w-full flex flex-col gap-2 p-2 max-w-auto relative ">
            <div className="absolute top-[-8%] right-[4%] grid h-10.5 w-10.5 rotate-10 place-items-center rounded-2xl bg-[#C6F27B] ">
              <span class="material-symbols-outlined">code_xml</span>
            </div>
            <p className="text-[#2A2F34]">
              DESIGN THINKING. ENGINEERING DEPTH.
            </p>
            <ul className="text-[#F3F4F1] flex gap-2 ">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
