"use client";

import MenuData, { MenuItemData } from "@/app/data/dataMenu";
import Image from "next/image";

function Sidebar() {
  return (
    <div>
      <div
        className="flex flex-col w-full h-screen text-white bg-tk-primary md:w-64"
        x-data="{ open: false }"
      >
        <div className="flex flex-row items-center justify-center flex-shrink-0 px-8 py-4">
          <Image
            alt="logo"
            height={100}
            width={100}
            src={"/images/Thyssenkrupp_Logo.svg"}
          />
        </div>
        <nav className="flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto">
          {MenuData.map((x: MenuItemData) => {
            return (
              <div
                key={x.id}
                className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-white focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                {x.title}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
