import React from "react";

export const ProjectCards = ({ title, description, stacks, img, year, url }) => {
  return (
    <div className="flex flex-col py-4 gap-2">
      <img src={img} alt="project_image" className="rounded-xl object-cover"/>
      <ul className="flex  items-center justify-between">
        <div className="flex gap-2">
        {stacks.map((stack) =>( 
          <li className="border border-[#2A2F34] rounded-3xl text-[#9BA1A6] text-sm p-2" key={stack}>{stack}</li>
        ))}
        </div>
        <li className="text-[#9BA1A6] text-sm">{year}</li>

      </ul>
      <h1 className="text-[#F3F4F1] text-2xl">{title}</h1>
      <p className="text-[#9BA1A6] text-base">{description}</p>
      <div className="text-base text-[#C6F27B] flex gap-1">
        <h3 >View Website Preview </h3>
        <a href={url}>
        <span class="material-symbols-outlined" >arrow_outward</span>
        </a>
      </div>
    </div>
  );
};
