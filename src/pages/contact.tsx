import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNotificationState } from "@/recoils/notification";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const { show: toggleNotify, hide } = useNotificationState();
  const [showNotification, _showNotification] = useState(false);
  const [loading, _loading] = useState(false);

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    _loading(true);
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        form.current!,
        `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
      )
      .then(
        (result) => {
          _loading(false);
          toggleNotify("success");
        },
        (error) => {
          _loading(false);
          toggleNotify("error");
        }
      );
    form.current!.reset();
  }
  return (
    <div className="w-full h-screen bg-port-bg-black overflow-y-scroll py-10">
      <div className="animate__animated animate__fadeInRight w-full backdrop-brightness-50 flex flex-col items-center justify-center">
        <h5 className="text-4xl mt-20 mb-14 text-port-red">Contact</h5>
        <div className="flex flex-col md:flex-row gap-4 w-4/5 mx-auto">
          <div className="w-full md:w-2/5">
            <h5 className="text-xl mb-4 font-bold">Address</h5>
            <p className="text-base mb-2 flex gap-3 items-center">
              <ion-icon name="home-outline"></ion-icon>{" "}
              <span>Lagos, Nigeria</span>
            </p>
            <p className="text-base mb-2">
              <a href="tel:+2349023055247" className="flex gap-3 items-center">
                <ion-icon name="call-outline"></ion-icon>
                <span>+2349023055247</span>
              </a>
            </p>
            <p className="text-base mb-2">
              <a
                href="mailto:ogunyemigrace.og@gmail.com"
                className="flex gap-3 items-center"
              >
                <ion-icon name="mail-outline"></ion-icon>{" "}
                <span>ogunyemigrace.og@gmail.com</span>
              </a>
            </p>
          </div>
          <form
            ref={form}
            className="w-full md:w-3/5 mt-16 md:mt-0"
            onSubmit={sendMessage}
          >
            <h5 className="text-xl font-bold mb-4">Let&apos;s Talk</h5>
            <div className="flex justify-between mb-10 gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                className="bg-transparent border-2 border-solid rounded w-2/4 p-2 focus:outline-none focus:border-port-red"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                className="bg-transparent border-2 border-solid rounded w-2/4 p-2 focus:outline-none focus:border-port-red"
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              className="bg-transparent border-2 mb-4 border-solid rounded w-full p-2 focus:outline-none focus:border-port-red"
            />
            <div className="flex justify-center">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={6}
                placeholder="message"
                required
                className="bg-transparent w-full border-2 border-solid rounded p-2 focus:outline-none focus:border-port-red"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="flex items-center gap-2 mt-8 mb-5 font-nunito bg-port-red border-none hover:text-port-red hover:bg-port-off-white rounded-xl text-white py-3 px-8 text-2xl"
                type="submit"
              >
                Submit
                {loading && (
                  <div className="animate-spin">
                    <ion-icon name="refresh-outline"></ion-icon>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
