"use client";

import React from "react";
import ClientOnly from "../ClientOnly";

interface SplitContextProps {
  orientation: string;
  orientationHandle: (value: string) => void;
  drag: boolean;
  dragHandle: () => void;
  size: number;
  sizeHandle: (size: number) => void;
}

const splitContextDefaultValues: SplitContextProps = {
  orientation: "X",
  orientationHandle: () => {},
  size: 400,
  sizeHandle: () => {},
  drag: false,
  dragHandle: () => {},
};

const SplitContext = React.createContext<SplitContextProps>(
  splitContextDefaultValues
);

export function useSplitContext() {
  return React.useContext(SplitContext);
}

export function SplitProvider({ children }: { children: React.ReactNode }) {

  const [orientation, setOrientation] = React.useState("X");
  const [size, setSize] = React.useState(400);
  const [drag, setDrag] = React.useState(false);
  const sizeHandle = () => {
    setSize(500);
  };

  const dragHandle = () => {
    setDrag(() => !drag);
  };
  const orientationHandle = (orientation:string) => {
    setOrientation(orientation);
  };

  const onTouchStart = () => {};

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (drag) {
      const panelSize =
        orientation === "X" ? e.clientY  : e.clientX ;
      const maxSize =
        orientation === "X"
          ? screen.height - 300
          : screen.width  - 300;
      setSize(panelSize > maxSize ? maxSize : panelSize);
    }
  };

  const onMouseUp = () => {
    setDrag(false);
  };


  const values: SplitContextProps = React.useMemo(() => {
    return {
      orientation: orientation,
      orientationHandle: orientationHandle,
      drag: drag,
      dragHandle: dragHandle,
      size: size,
      sizeHandle: sizeHandle,
    };
  }, [size, drag]);

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
    <>
      <SplitContext.Provider value={values}>
        <div
          className={orientation==='X'?"flex flex-col h-full w-full items-center justify-start":"flex flex-row h-full w-full items-center justify-start"}
        >
          {children}
        </div>
      </SplitContext.Provider>
    </>
  );
}
