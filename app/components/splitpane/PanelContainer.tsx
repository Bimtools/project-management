"use client";
import React, { useState } from "react";

import { IPanelOrientationEnum } from "../../models/panel/IPanelOrientationEnum";
import { IPanelContextModel } from './../../models/panel/IPanelContextModel';
import { IMainPanelModel } from "@/app/models/panel/IMainPanelModel";

const PanelContext = React.createContext({} as IPanelContextModel);

const PanelContainer = ({ children }: { children: React.ReactNode }) => {
  const [drag,setDrag] = React.useState(false);
  const [orientation,setOrientation] = React.useState(IPanelOrientationEnum.Horizonal)
  const [panelSize,setPanelSize] = React.useState(400);

  const dragHandle=()=>{setDrag(()=>!drag)};
  const orientationHandle =(value:IPanelOrientationEnum.Horizonal)=>{setOrientation(()=>value)}

  const onMouseMove=(e:MouseEvent)=>{
    e.preventDefault();
    if(!drag) return;
    if(orientation=== IPanelOrientationEnum.Horizonal)setPanelSize(()=>e.clientY)
    else setPanelSize(()=>e.clientX)
  }
  const onTouchMove=(e: React.TouchEvent)=>{
    e.preventDefault();
    if(!drag) return;
    if(orientation=== IPanelOrientationEnum.Horizonal)setPanelSize(()=>e.touches[0].clientY)
    else setPanelSize(()=>e.touches[0].clientX)
  }

  const onMouseUp=()=>{setDrag(()=>!drag)}

  const mainPanelProps:IMainPanelModel={
    drag:drag,
    dragHandle:dragHandle,
    size:panelSize
  }

  const panelContextProps:IPanelContextModel={
    mainPanelProps:mainPanelProps
  }


  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });
console.log(panelContextProps)
  return (
    <PanelContext.Provider value={panelContextProps}>
      {children}
    </PanelContext.Provider>
  );
};

export {PanelContext,PanelContainer} ;
