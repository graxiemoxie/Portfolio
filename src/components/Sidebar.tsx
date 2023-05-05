import { sidebarLinks, socialMedia, user } from "@/constants";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  toggleSideBar: () => void;
}
export function Sidebar({ toggleSideBar }: Props) {
  const { pathname } = useRouter();

  return (
    <div className="w-full h-full">
      <div>
        <img
          src="/assets/images/ogunyemi_grace.PNG"
          alt="Grace"
          className="w-full h-80"
        />
        <div className="flex items-center justify-center w-full h-12 bg-port-red">
          <span className="text-white text-lg uppercase">
            {user.first_name} {user.last_name}
          </span>
        </div>
      </div>
      <div>
        {sidebarLinks.map((l, i) => (
          <div
            key={i}
            className="w-full flex justify-center border-b border-solid border-gray-800"
          >
            <Link
              href={l.link}
              onClick={toggleSideBar}
              className={`${
                pathname === l.link ? "text-port-red" : "text-white"
              } flex w-3/5 p-4 group gap-3 items-center hover:text-port-red group`}
            >
              <i className={"text-2xl grid"}>
                <ion-icon name={l.icon} />
              </i>
              <p className="text-base capitalize group-hover:translate-x-3 transition-all">
                {l.title === "/" ? "Home" : l.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        {socialMedia.map((i) => (
          <a
            key={i.title}
            href={i.link}
            className="text-lg hover:text-port-red"
          >
            <ion-icon name={i.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}
