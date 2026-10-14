import React from "react";

export const SkillCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col p-2">
        <span className="material-symbols-outlined w-8 h-8 text-[#C6F27B]">{icon}</span>
      <h3 className="text-lg font-normal text-[#F3F4F1]">{title}</h3>
      <p className="text-[#9BA1A6] text-base">{text}</p>
    </div>
  );
};
