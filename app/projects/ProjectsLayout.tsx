"use client";
import React, { useEffect } from "react";
import { useSplitContext } from "../components/split/SplitContext";
import Divider from "../components/split/Divider";

const ProjectsLayout = () => {
  const { size } = useSplitContext();
  return (
    <>
      <div className="grow w-full bg-tk-orange">
        <div className="h-full w-full">a</div>
      </div>
      <Divider orientation={"X"} minSize={200} />
      <div className={`flex-none w-full `} id="panel2">
        <div className="h-full w-full">b</div>
        <style jsx>
          {`
            #panel2 {
              height: ${size}px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default ProjectsLayout;
