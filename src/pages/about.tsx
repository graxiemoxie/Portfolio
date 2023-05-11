import { user } from "@/constants";
import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-port-bg-black">
      <div className="animate__animated animate__fadeInRight w-full py-10 backdrop-brightness-50 flex flex-col items-center justify-center">
        <h5 className="text-4xl mt-20 mb-8 text-port-red">About Me</h5>
        <div className="flex flex-col justify-between md:flex-row w-full xl:w-4/5 mx-auto">
          <div className="w-full lg:w-2/3 py-6 px-3">
            <p className="text-base lg:text-lg font-inter text-port-off-white">
              Hi there, I&apos;m{" "}
              <span className="text-port-red">Grace Ogunyemi</span>,I&apos;m a
              frontend developer with a passion for creating engaging and
              responsive web experiences. With over 3 years of experience in the
              industry, I specialize in building web applications using ReactJS,
              Typescript, and NextJS.
            </p>
            <p className="mt-2 text-base lg:text-lg font-inter text-port-off-white">
              My expertise lies in designing and implementing complex user
              interfaces that meet the needs of both clients and end-users.
              I&apos;ve worked on a variety of projects ranging from real estate
              websites to e-commerce platforms and have a strong understanding
              of both the technical and business aspects of web development.
              <br />I am always eager to learn about new technologies and
              methodologies that can help improve my workflow and deliver better
              results nad this has helped me keep pace with the ever-evolving
              landscape of web development.
            </p>
          </div>
          <div className="px-3 lg:px-0">
            <h5 className="font-bold text-lg mt-10 md:mt-0">Personal Info</h5>
            <div>
              <ul className="text-xs text-port-off-white">
                <li className="w-full flex">
                  <span className="w-3/12">Name:</span>
                  <span className="text-white">
                    {user.first_name} {user.last_name}
                  </span>
                </li>
                <li className="w-full flex">
                  <span className="w-3/12">email:</span>
                  <span className="text-white">{user.email}</span>
                </li>
                <li className="w-full flex">
                  <span className="w-3/12"> from:</span>
                  <span className="text-white">
                    {user.state}, {user.country}
                  </span>
                </li>
                <li className="w-full flex">
                  <span className="3/12">Age:</span>
                  <span className="text-white">{user.age}</span>
                </li>
                <li className="w-full flex">
                  <span className="w-3/12"> phone:</span>
                  <span className="text-white">{user.phone_number}</span>
                </li>
                <li className="w-full flex">
                  <span className="w-3/12">status:</span>
                  <span className="text-white">{"Available"}</span>
                </li>
              </ul>
            </div>
            <div className="my-8 md:my-4">
              <a
                className="font-nunito border-port-red border-2 border-solid hover:text-white hover:bg-port-red rounded-xl text-port-red py-2 px-6 text-lg"
                href="/assets/files/my_resume.pdf"
                download="Ogunyemi-Grace-Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
