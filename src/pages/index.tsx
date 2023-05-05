import { user } from "@/constants";
import Link from "next/link";
import React from "react";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className="w-full h-screen bg-port-bg-big">
      <div className="animate__animated animate__fadeInRight w-full h-full backdrop-brightness-50 flex flex-col items-center justify-center">
        <h3 className="text-4xl sm:text-6xl font-nunito text-port-red mb-10">
          {user.first_name} {user.last_name}
        </h3>
        <div className="text-4xl sm:text-6xl mb-4 text-center">
          <Typed
            strings={[`I'm a ${user.occupation}`]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </div>
        <p className="text-port-off-white text-2xl">
          based in {user.state}, {user.country}
        </p>
        <Link
          href="/contact"
          className="mt-14 font-nunito border-port-red border-2 border-solid hover:text-white hover:bg-port-red rounded-xl text-port-red py-3 px-8 text-2xl"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}
