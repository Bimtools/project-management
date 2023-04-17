"use client";

import MenuData, { MenuItemData } from "@/app/data/dataMenu";
import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const classNames={
	menuItemShow:"",
	menuItemHide:"hidden",
	versionInfoShow:"grow px-2 text-sm",
	versionInfoHide:"grow px-2 text-sm hidden"
}

function Sidebar({show}:{show:boolean}) {
  return (
    <div className="flex flex-col h-full text-white bg-tk-primary shadow-md">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center justify-between">
          <Image
            className="mt-1"
            alt="logo"
            height={100}
            width={100}
            src={"/images/Thyssenkrupp_Logo.svg"}
          />
        </div>
        <div className="grow">
          <div className="flex flex-col mt-5 px-2">
            {MenuData.map((x: MenuItemData) => {
              return (
                <div
                  key={x.id}
                  className="flex flex-row items-center justify-between w-full px-5 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <div className={show?classNames.menuItemShow:classNames.menuItemHide}>{x.title}</div>
                  {React.createElement(x.icon, { size: 30 })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-5 px-7 flex flex-row items-center justify-between">
          <div className={show?classNames.versionInfoShow:classNames.versionInfoHide}>Version 1.0.1</div>
          <AiOutlineInfoCircle className="flex-none" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
