"use client";

import React from "react";

interface SplitContextProps {
  size: number;

}

const SplitContext = React.createContext<SplitContextProps>({
  size: 400,
});

export const SplitContextProvider=({
  children,
}: {
  children: React.ReactNode;
})=>{
  const [size, setSize] = React.useState(400);

  return (
    <SplitContext.Provider value={{ size }}>
      {children}
    </SplitContext.Provider>
  );
};

export const useSplitContext = () => React.useContext(SplitContext);
