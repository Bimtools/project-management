"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./../Avatar";
import { useState } from "react";
import MenuItem from "../MenuItem";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flew-row items-center gap-3
            rounded-full cursor-pointer hover:shadow-md transition"
          onClick={() => {
            setIsOpen((isOpen)=>!isOpen);
          }}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar/>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl sm:w-[150px] w-1/2 shadow-md bg-white overflow-hidden right-2 top-20 text-sm">
          <>
            <MenuItem label="Profile" onClick={() => {}} />
            <MenuItem label="Logout" onClick={() => {}} />
          </>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
