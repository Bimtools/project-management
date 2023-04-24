"use client";

import React from "react";

interface SplitContextProps {
  drag: boolean,
  dragHandle: () => void,
  size: number,
  sizeHandle: (size: number) => void,
}

const splitContextDefaultValues: SplitContextProps = {
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
  const [size, setSize] = React.useState(400);
  const [drag, setDrag] = React.useState(false);
  const sizeHandle = () => {
    setSize(500);
  };

  const dragHandle = () => {
    setDrag(() => !drag);
  };

  const onTouchStart = () => {};

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (drag) {
      setSize(e.clientY);
    }
  };

  const onMouseUp = () => {
    setDrag(false);
  };

  const values: SplitContextProps = React.useMemo(() => {
    return {
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
        <div className="flex flex-col h-full w-full items-center justify-start">
          {children}
        </div>
      </SplitContext.Provider>
    </>
  );
}
