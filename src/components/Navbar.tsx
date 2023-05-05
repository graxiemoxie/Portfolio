import { user } from "@/constants";
import React from "react";

interface Props {
  toggleSideBar: () => void;
}
export function Navbar({ toggleSideBar }: Props) {
  return (
    <div className="flex lg:hidden items-center bg-[#343434] py-4">
      <p className="w-11/12 text-white text-center text-3xl uppercase">
        {user.first_name} {user.last_name}
      </p>
      <button onClick={toggleSideBar}>
        <ion-icon name="reorder-three-outline" class="text-5xl"></ion-icon>
      </button>
    </div>
  );
}
