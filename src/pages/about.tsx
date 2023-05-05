import { user } from "@/constants";
import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full h-full bg-port-bg-black">
      <div className="animate__animated animate__fadeInRight w-full h-full backdrop-brightness-50 flex flex-col items-center justify-center ">
        <h5 className="text-6xl mb-6 text-port-red">About Me</h5>
        <div className="flex flex-col justify-between lg:flex-row w-full xl:w-4/5 mx-auto">
          <div className="w-full lg:w-2/3 py-6 px-3">
            <p className="text-lg lg:text-2xl font-inter text-port-off-white">
              Hi there, I&apos;m{" "}
              <span className="text-port-red">Grace Ogunyemi</span>,I&apos;m a
              frontend developer with a passion for creating engaging and
              responsive web experiences. With several years of experience in
              the industry, I specialize in building web applications using
              ReactJS, Typescript, and NextJS.
            </p>
            <p className="mt-2 text-lg lg:text-2xl font-inter text-port-off-white">
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
          <div>
            <h5 className="font-bold text-2xl">Personal Info</h5>
            <div>
              <ul className="text-lg text-port-off-white">
                <li>
                  Name: ;
                  <span className="text-white">
                    {user.first_name} {user.last_name}
                  </span>
                </li>
                <li>
                  email: <span className="text-white">{user.email}</span>
                </li>
                <li>
                  from: ;
                  <span className="text-white">
                    {user.state}, {user.country}
                  </span>
                </li>
                <li>
                  Age: <span className="text-white">{user.age}</span>
                </li>
                <li>
                  phone: <span className="text-white">{user.phone_number}</span>
                </li>
                <li>
                  status: <span className="text-white">{"Available"}</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <a
                className="font-nunito border-port-red border-2 border-solid hover:text-white hover:bg-port-red rounded-xl text-port-red py-2 px-6 text-lg"
                href="https://drive.google.com/uc?export=download&id=12qcOEs_ke8-RD_an3pIiAc2by264oy8G"
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
