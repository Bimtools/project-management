"use client";

import React from "react";
import { PanelContext } from "./PanelContainer";

const Divider = () => {
  const panelContext = React.useContext(PanelContext);

  return (
    <div 
		className="flex-none h-[5px] bg-tk-gray w-full cursor-row-resize hover:bg-tk-dark-gray focus:cursor-row-resize"></div>
  );
};

export default Divider;
