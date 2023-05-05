import React, { useEffect, useRef, useState } from "react";

type PropSize = "small" | "medium" | "large" | "auto";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onOpen?: () => void;
  contentClass?: string;
  onClose: () => void;
  size?: PropSize;
  preventClose?: boolean;
}

export function Modal(props: Props) {
  const { open, size = "small" } = props,
    [opened, _opened] = useState(false);
  const ref = useRef(null);

  function close() {
    _opened(false);
    setTimeout(props.onClose, 300);
  }

  useEffect(() => {
    if (open) setTimeout(() => _opened(true), 300);
  }, [open]);

  useEffect(() => {
    if (opened) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";
  }, [opened]);

  return (
    <>
      {open && (
        <div
          className={`w-screen fixed inset-0 h-screen z-[999] bg-transparent p-0 transition-opacity ease-in-out duration-500`}
        >
          <div
            className={`w-full h-full backdrop-filter backdrop-blur-lg bg-black bg-opacity-60 transition-opacity ease-in-out duration-400 ${
              opened ? "opacity-1" : "opacity-0"
            }`}
          />

          <div className="w-full h-full grid place-items-center absolute inset-0 px-2 md:px-0">
            <div
              ref={ref}
              className={`bg-[#343a40] rounded-lg transition-transform ease-in-out duration-300 w-full overflow-y-scroll max-h-[90%] 
                            ${size === "auto" && "md:w-auto"} 
                            ${size === "small" && "md:w-1/3 lg:w-1/4"} 
                            ${size === "medium" && "md:w-2/3 lg:w-1/3"}
                            ${opened ? "scale-1" : "scale-0"}
                            ${props.contentClass}`}
            >
              {props.children}
            </div>
          </div>
          {!props.preventClose && (
            <button
              className="w-12 h-12 grid place-items-center border border-white text-white absolute top-10 right-10 md:right-20 rounded-full cursor-pointer text-xl font-black"
              onClick={close}
              type={"button"}
              aria-label="Close Share Modal"
            >
              <ion-icon name={"close-outline"} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Modal;
