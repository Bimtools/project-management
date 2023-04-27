"use client";

import React from "react";

interface SplitContextProps {
  orientation: string;
  orientationHandle: (value: string) => void;
  drag: boolean;
  dragHandle: () => void;
  minSize: number;
  minSizeHandle: (minSize: number) => void;
  size: number;
}

const splitContextDefaultValues: SplitContextProps = {
  orientation: "X",
  orientationHandle: () => {},
  minSize: 300,
  minSizeHandle: () => {},
  size: 0,
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
  const [minSize, setMinSize] = React.useState(300);
  const [size, setSize] = React.useState(300);
  const [drag, setDrag] = React.useState(false);

  const dragHandle = () => {
    setDrag(() => !drag);
  };
  const orientationHandle = (orientation: string) => {
    setOrientation(orientation);
  };

  const minSizeHandle = (minSize: number) => {
    setMinSize(minSize);
  };

  const onTouchStart = () => {};

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (drag) {
      const splitElement = document.getElementById("splitView");
      const splitBox = splitElement?.getBoundingClientRect();
      const x = splitBox?.x ?? 0;
      const y = splitBox?.y ?? 0;
      const width = splitBox?.width ?? 0;
      const height = splitBox?.height ?? 0;
      const fullSize = orientation === "X" ? height : width;
      const panelSize2 =
        orientation === "X"
          ? height - (e.clientY - y)
          : width - (e.clientX - x);
      const panelSize1 = fullSize - panelSize2;
      setSize(() => (panelSize1 > minSize ? panelSize2 : fullSize - minSize));
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
      minSize: minSize,
      minSizeHandle: minSizeHandle,
      size: size,
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
          id="splitView"
          className={`flex ${
            orientation === "X" ? "flex-col" : "flex-row"
          } h-full w-full items-center justify-start`}
        >
          {children}
        </div>
      </SplitContext.Provider>
    </>
  );
}
