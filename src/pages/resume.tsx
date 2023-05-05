import { resume } from "@/constants";
import React from "react";

export default function Resume() {
  return (
    <div className="w-full bg-port-bg-black">
      <div className="animate__animated animate__fadeInRight w-full h-full backdrop-brightness-50 flex flex-col items-center justify-center overflow-y-scroll">
        <h5 className="text-6xl my-12 text-port-red">Resume</h5>

        <div className="w-4/5 mx-auto">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {resume.map((r) => (
              <li key={r.company} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm md:text-base font-normal leading-none text-slate-300">
                  {r.duration}
                </time>
                <p className="text-xl md:text-3xl font-bold text-port-red">
                  {" "}
                  {r.company}
                </p>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 dark:text-white">
                  {r.title}
                </h3>
                <p className="mb-4 text-base md:text-xl font-normal text-slate-300">
                  {r.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
