import { atom, useRecoilState } from "recoil";

export const NotificationState = atom({
  key: "NotificationState",
  default: {
    status: null as string | null,
    display: false,
    removeFromDom: true,
  },
});

export function useNotificationState() {
  const [state, setState] = useRecoilState(NotificationState);

  function show(status: string) {
    setState({ removeFromDom: false, status: status, display: true });
  }
  function hide() {
    setState({ display: false, status: null, removeFromDom: true });
  }
  return { state, show, hide };
}
