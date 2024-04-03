import React from "react";
import resume from "../../Assets/resume.png";

const ResumeCard =  () => {
  return (
    <a
      href="https://drive.google.com/file/d/1c7TbWyxBykhHH0ojjI_zWPZAnwat-cuw/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        {/* <LogosVisualStudioCode  /> */}
        <img src={resume}  className="absolute blur-sm text-[60px] top-0 -left-8 brightness-50"/>
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          Resume
        </span>
        {/* <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span> */}
      </div>
    </a>
  );
};


export default ResumeCard;