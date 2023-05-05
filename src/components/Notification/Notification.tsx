import React, { PropsWithChildren, useEffect, useState } from "react";

interface Props {
  status: string | null;
  display: boolean;
  show: (status: string) => void;
  hide: () => void;
  removeFromDom: boolean;
}
export function Notification({ status, display, hide, removeFromDom }: Props) {
  const [width, _width] = useState(0);

  let intervalId: NodeJS.Timer | null = null;

  function handleStartTimer() {
    _width(0);
    intervalId = setInterval(() => {
      _width((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(intervalId!);
        return prev;
      });
    }, 20);
  }

  function handleStopTimer() {
    clearInterval(intervalId!);
  }

  function closeNotification() {
    handleStopTimer();
    hide();
    setInterval(() => {}, 400);
  }

  useEffect(() => {
    if (width === 100) {
      closeNotification();
    }
  }, [width]);

  useEffect(() => {
    if (display) handleStartTimer();
  }, [display]);

  if (removeFromDom) return null;
  return (
    <div
      className={`bg-black rounded ${
        display ? "animate-left" : "animate-right"
      }`}
    >
      <div className="px-2 pt-5 pb-2 flex justify-between items-start">
        <div className="w-11/2">
          <h1 className="text-lg">
            {status! === "success" ? "Congratulations!" : "Error!"}
          </h1>
          <p className="text-lg font-bold">
            {status! === "success"
              ? "Message Sent Successfully"
              : "Unsuccessful, try again later"}
          </p>
        </div>
        <button className="w-2/12 text-lg" onClick={() => hide()}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div
        className={`h-2 rounded-b ${
          status! === "success" ? "bg-green-500" : "bg-port-red"
        }`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
