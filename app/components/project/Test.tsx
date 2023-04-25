"use client";
import React, { useEffect } from "react";
import { useSplitContext } from "../split/SplitContext";
import Divider from "../split/Divider";

const Test = () => {
  const { size, sizeHandle } = useSplitContext();
  return (
    <>
      <div className="flex-none w-full bg-tk-orange" id="panel1">
        <div className="h-full w-full">a</div>
        <style jsx>{`
          #panel1 {
            height: ${size}px;
          }
        `}</style>
      </div>
      <Divider orientation={"Y"}/>
      <div className="grow">b</div>
    </>
  );
};

export default Test;
