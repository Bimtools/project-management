"use client";

import MenuData, { MenuItemData } from "@/app/data/dataMenu";
import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const classNames = {
  sideBarMaximum:"flex flex-col items-center justify-between w-full h-full text-white bg-tk-primary shadow-md",
  sideBarMinimum:"flex flex-col items-center justify-between w-[30px] h-full text-white bg-tk-primary shadow-md",
  menuItemShow: "",
  menuItemHide: "hidden",
  versionInfoShow: "grow px-2 text-sm",
  versionInfoHide: "grow px-2 text-sm hidden",
};

const SideBar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? classNames.sideBarMaximum : classNames.sideBarMinimum}>
      <div className="flex-none">
        <div className="flex flex-row items-center justify-between px-2">
          <div className="grow">
            <Image
              className="mt-2"
              alt="logo"
              height={100}
              width={100}
              src={"/images/Thyssenkrupp_Logo.svg"}
            />
          </div>
          <div
            className="flex-none"
            onClick={() => {
              setShow(() => !show);
            }}
          >
            {show ? (
              <AiFillLeftCircle size={25} className="z-30" />
            ) : (
              <AiFillRightCircle size={25} className="z-30" />
            )}
          </div>
        </div>
      </div>
      <div className="grow">
        <div className="flex flex-col mt-5 px-1">
          {MenuData.map((x: MenuItemData) => {
            return (
              <div
                key={x.id}
                className="flex flex-row items-center justify-between w-full px-2 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <div
                  className={
                    show ? classNames.menuItemShow : classNames.menuItemHide
                  }
                >
                  {x.title}
                </div>
                {React.createElement(x.icon, { size: 30 })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-none mb-5">
        <div className="flex flex-row items-center justify-between">
          <div
            className={
              show ? classNames.versionInfoShow : classNames.versionInfoHide
            }
          >
            Version 1.0.1
          </div>
          <AiOutlineInfoCircle className="flex-none" size={20} />
        </div>
      </div>
    </div>
  );
};
export default SideBar;
