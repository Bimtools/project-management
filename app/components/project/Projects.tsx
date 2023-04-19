"use client";

import React from "react";
import { useEffect, useState } from "react";

const Projects = () => {
  const resizer = document.getElementById("resizer");

  const [leftRef, setLeftRef] = useState("flex-none h-[100px] bg-tk-orange");
  const [drag, setDrag] = useState(false);
  const[clientX,setClientX]= useState(0);

  const onMouseDown = (e: MouseEvent) => {
    //setDrag(true);
    //e.preventDefault();
    // if (drag) {
    //   console.log(e.clientY);
    //   setLeftRef(`flex-none h-[${e.clientY}px] bg-tk-orange`);
    // }
  };
  const onTouchStart = () => {};

  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    //e.preventDefault();
    // console.log(drag);
    // if (drag) {
    //   console.log(e.clientY);
    //   setLeftRef(()=>`flex-none h-[200px] bg-tk-blue`);
    // }
    console.log(e.clientY);
    setClientX(e.clientY)
      setLeftRef(()=>`flex-none h-[200px] bg-tk-blue`);
    //onMove(e.clientX);
  };

  const onMouseUp = () => {
    console.log(leftRef);
    setDrag(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });
  return (
    <div className="flex flex-col h-full w-full items-center justify-start">
      <div className={leftRef}>
        <div className="h-full">{clientX}</div>
      </div>

      <div
        id="resizer"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        className="flex-none h-[5px] bg-tk-gray w-full cursor-row-resize hover:bg-tk-dark-gray focus:cursor-row-resize"
      ></div>

      <div className="grow">b</div>
    </div>
  );
};

export default Projects;
