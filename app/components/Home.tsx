"use client";

import React, { useState } from "react";
import { PanelContainer, PanelContext } from "./splitpane/PanelContainer";

function Home() {
  const panelContextProps = React.useContext(PanelContext);

  return (
    <PanelContainer>
      <PanelContext.Consumer>
        {(context) => {
          return{
            
          }
        }}
      </PanelContext.Consumer>
    </PanelContainer>
  );
}

export default Home;
