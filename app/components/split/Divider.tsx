import React from "react";
import { useSplitContext } from "./SplitContext";
import { AiOutlineMore } from "react-icons/ai";

const Divider = () => {
  const { dragHandle } = useSplitContext();

  return (
    <>
      <div
        id="resizer"
        onMouseDown={dragHandle}
        onTouchStart={dragHandle}
        onTouchEnd={dragHandle}
        className="flex-none h-[10px] bg-tk-gray w-full cursor-row-resize hover:bg-tk-dark-gray focus:cursor-row-resize"
      ></div>
    </>
  );
};

export default Divider;
