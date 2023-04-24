"use client";

import React from "react";
import { SplitProvider, useSplitContext } from "./split/SplitContext";
import Test from "./project/Test";

function Home() {
  const { size, sizeHandle, drag, dragHandle } = useSplitContext();
  return (
    <SplitProvider>
      <Test />
    </SplitProvider>
  );
}

export default Home;
