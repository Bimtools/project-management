"use client";

import React from "react";
import { SplitProvider } from "../components/split/SplitContext";
import ProjectsLayout from "./ProjectsLayout";

function Projects() {
  return (
    <SplitProvider>
      <ProjectsLayout />
    </SplitProvider>
  );
}

export default Projects;
