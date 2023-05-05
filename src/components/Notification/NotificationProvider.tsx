import React, { PropsWithChildren } from "react";
import { Notification } from "./Notification";
import { useNotificationState } from "@/recoils/notification";

export default function NotificationProvider(props: PropsWithChildren) {
  const { state, show, hide } = useNotificationState();

  return (
    <div>
      <div className="fixed top-28 right-2 w-80 z-40">
        <Notification
          status={state.status}
          display={state.display}
          removeFromDom={state.removeFromDom}
          show={show}
          hide={hide}
        />
      </div>
      {props.children}
    </div>
  );
}
