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
  const [preSize, setPreSize] = React.useState(0);
  const [panel2Size,setPanel2Size]= React.useState(0);
  const [nextSize, setNextSize] = React.useState(0);
  const [size, setSize] = React.useState(400);
  const [drag, setDrag] = React.useState(false);
  const sizeHandle = () => {
    setSize(500);
  };

  const dragHandle = () => {
    setDrag(() => !drag);
  };
  const orientationHandle = (orientation: string) => {
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
        orientation === "X" ? e.clientY - preSize : e.clientX - preSize;
      const maxSize =
        orientation === "X" ? screen.height - nextSize-panel2Size-10 : screen.width - nextSize-panel2Size-10;
      console.log(e.clientY+"/"+maxSize)
      setSize(e.clientY > maxSize ? maxSize : panelSize);
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
    const splitElement = document.getElementById("splitView");
    const preElement = splitElement?.parentElement?.previousSibling;
    const preChildElements = Object.values(
      preElement.childNodes
    ) as HTMLElement[];
    const preSize =
      orientation == "X"
        ? preChildElements[0].offsetHeight
        : preChildElements[0].offsetWidth;
    const nextElement = splitElement?.parentElement?.nextSibling;
    const nextChildElements = Object.values(
      nextElement.childNodes
    ) as HTMLElement[];
    const nextSize =
      orientation == "X"
        ? nextChildElements[0].offsetHeight
        : nextChildElements[0].offsetWidth;
    const panel2Element = splitElement?.childNodes[2];
    console.log(panel2Element)
    const panel2ChildElements = Object.values(
      panel2Element.childNodes
    ) as HTMLElement[];
    const panel2Size =
      orientation == "X"
        ? panel2ChildElements[0].offsetHeight
        : panel2ChildElements[0].offsetWidth;
    setPanel2Size(panel2Size);
    setPreSize(preSize);
    setNextSize(nextSize);
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
          id="splitView"
          className={
            orientation === "X"
              ? "flex flex-col h-full w-full items-center justify-start"
              : "flex flex-row h-full w-full items-center justify-start"
          }
        >
          {children}
        </div>
      </SplitContext.Provider>
    </>
  );
}
