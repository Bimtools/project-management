import React, { useEffect } from "react";
import { useSplitContext } from "./SplitContext";
import { AiOutlineMore } from "react-icons/ai";

const Divider = ({orientation,minSize}:{orientation:string,minSize:number}) => {
  const {dragHandle,orientationHandle,minSizeHandle } = useSplitContext();
  useEffect(()=>{
    orientationHandle(orientation)
    minSizeHandle(minSize); 
  })

  return (
    <>
      <div
        id="resizer"
        onMouseDown={dragHandle}
        onTouchStart={dragHandle}
        onTouchEnd={dragHandle}
        className={`flex-none ${orientation==='X'?'h-[5px] w-full cursor-row-resize focus:cursor-row-resize':'w-[5px] h-full cursor-col-resize focus:cursor-col-resize'} bg-tk-gray hover:bg-tk-dark-gray`}
      ></div>
    </>
  );
};

export default Divider;
