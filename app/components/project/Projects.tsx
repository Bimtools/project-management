"use client";
import React from "react";

const Projects = () => {
    const resizer = document.getElementById('resizer');
    // const leftSide = resizer.previousElementSibling;
    // const rightSide = resizer.nextElementSibling;
    
    const onMouseDown=()=>{
        console.log(resizer);
        // console.log(leftSide);
        // console.log(rightSide);
    }
    const onTouchStart=()=>{

    }
    const onMouseUp=()=>{

    }
  return (
    <div className="flex flex-col h-full w-full items-center justify-start">
      <div className="grow h-full w-full bg-tk-blue">
        <div className="">a</div>
      </div>
      <div
        id="resizer"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        className="flex-none h-[5px] bg-tk-gray w-full cursor-row-resize  hover:bg-tk-dark-gray"
      ></div>
      <div className="flex-none">b</div>
    </div>
  );
};

export default Projects;
