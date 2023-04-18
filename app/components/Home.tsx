"use client";

import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import Navbar from './navbar/Navbar';

const classNames = {
  showSideBar: "flex-none z-10 w-[200px]",
  hideSideBar: "flex-none z-10 w-[80px]",
};

function Home() {
  const [show, SetShow] = useState(true);
  return (
    <div className="flex flex-row justify-between h-screen">
      <div className={show ? classNames.showSideBar : classNames.hideSideBar}>
        <Sidebar show={show} />
      </div>
      <div className="flex flex-col items-center mt-[15px] text-tk-orange w-[1px] bg-white cursor-pointer">
        <div
          onClick={() => {
            SetShow(() => !show);
          }}
        >
          {show ? (
            <AiFillLeftSquare size={30} className="z-30" />
          ) : (
            <AiFillRightSquare size={30} className="z-30" />
          )}
        </div>
      </div>
      <div className="grow">
        <Navbar/>
      </div>
    </div>
  );
}

export default Home;
