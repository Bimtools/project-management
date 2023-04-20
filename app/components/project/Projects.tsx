"use client";

import React from "react";
import { useEffect, useState } from "react";

const Panel1 = ({ style }: { style: string }) => {
  return (
    <div className="flex-none w-full bg-tk-orange" id="panel1">
      <div className="h-full w-full">a</div>
      <style jsx>{`#panel1{height:${style}}`}</style>
    </div>
  );
};

const Projects = () => {
  const resizer = document.getElementById("resizer");

  const [leftRef, setLeftRef] = useState("flex-none h-[100px] bg-tk-orange");
  const [drag, setDrag] = useState(false);
  const [clientX, setClientX] = useState(0);

  const onMouseDown = (e: MouseEvent) => {
    setDrag(true);
  };
  const onTouchStart = () => {};

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (drag) {
      setLeftRef(() => `${e.clientY}px`);
    }
  };

  const onMouseUp = () => {
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
      <Panel1 style={leftRef} />

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
