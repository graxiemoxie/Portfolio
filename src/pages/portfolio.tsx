import { Modal } from "@/components";
import { portfolio } from "@/constants";
import { PortfolioInterface } from "@/interfaces";
import Image from "next/image";
import React, { useState } from "react";

export default function Portfolio() {
  const [details, _details] = useState<PortfolioInterface>({
    title: "",
    file: "",
    info: "",
    client: "",
    technologies: "",
    industry: "",
    url: "",
  });
  const [showModal, _showModal] = useState(false);
  const [showImage, _showImage] = useState(false);

  return (
    <div className="w-full h-screen overflow-y-scroll bg-port-bg-dark3 relative ">
      <div className="animate__animated animate__fadeInRight w-full py-10 backdrop-brightness-50 flex flex-col items-center justify-center">
        <h5 className="text-4xl mt-20 mb-10 text-port-red">Portfolio</h5>
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolio.map((i) => (
            <div
              key={i.file}
              className="rounded w-full h-full relative"
              onClick={() => {
                _details(i);
                _showModal((prev) => !prev);
              }}
            >
              <div className="w-full h-[153px] md:h-[133.305px] xl:h-[190px] relative">
                <Image src={i.file} alt={i.industry} fill />
              </div>

              <div className="bg-port-red cursor-pointer w-full h-full absolute top-0 left-0 transition-all duration-300 delay-300 ease-out opacity-0 hover:opacity-80 transform translate-y-3 hover:translate-y-0 flex flex-col items-center justify-center">
                <p className="text-white font-semi-bold text-2xl">{i.title}</p>
                <p className="text-lg text-white">{i.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={() => _showModal((prev) => !prev)}
        size="auto"
      >
        <div className="max-w-[1000px] p-6">
          <h5 className="text-3xl text-port-red text-center">
            {details?.title}
          </h5>
          <p className="text-sm md:text-lg text-center my-4">{details?.info}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className="w-full h-[180px] lg:h-[216px] relative cursor-pointer"
              onClick={() => _showImage((prev) => !prev)}
            >
              <Image src={details?.file} alt={details?.title} fill/>
            </button>
            <div>
              <h6 className="font-bold text-lg md:text-xl mb-2 text-port-red">
                Project Details
              </h6>
              <ul>
                <li className="text-sm md:text-base py-2 text-port-off-white border-slate-600 border-b border-solid flex gap-2">
                  Client:
                  <span className="text-white font-bold">
                    {details?.client}
                  </span>
                </li>
                <li className="text-sm md:text-base py-2 text-port-off-white border-slate-600 border-b border-solid flex gap-2">
                  Technologies:
                  <span className="text-white font-bold">
                    {details?.technologies}
                  </span>
                </li>
                <li className="text-sm md:text-base py-2 text-port-off-white border-slate-600 border-b border-solid flex gap-2">
                  Industry:
                  <span className="text-white font-bold">
                    {details?.industry}
                  </span>
                </li>
                <li className="text-sm md:text-base mb-2 text-port-off-white pt-2 flex gap-2">
                  <span>Url:</span>
                  <a
                    href={details?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-port-red"
                  >
                    {details?.url}
                  </a>
                </li>
              </ul>
              <h5></h5>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={showImage}
        onClose={() => _showImage((prev) => !prev)}
        size="large"
      >
        <div
          className="w-full h-full cursor-pointer"
          onClick={() => _showImage((prev) => !prev)}
        >
          <Image src={details?.file} alt="" fill />
        </div>
      </Modal>
    </div>
  );
}
