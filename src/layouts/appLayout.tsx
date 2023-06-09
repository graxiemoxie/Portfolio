import { Navbar, Sidebar } from "@/components";
import { useRouter } from "next/router";
import React, { memo, PropsWithChildren, ReactNode, useState } from "react";

import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";

const GetSectionLayout = memo(function E({ children }: PropsWithChildren) {
  const [toggle, _toggle] = useState(false);

  function toggleSideBar() {
    _toggle((prev) => !prev);
  }
  function toggleSidebarFromSidebar() {
    if (window.innerWidth > 768) return;
    toggleSideBar();
  }

  return (
    <div className="w-full h-full flex flex-col lg:flex-row relative overflow-y-hidden">
      <div
        className={`${
          toggle ? "" : "-translate-x-full lg:translate-x-0"
        } min-w-[250px] w-1/5 h-screen bg-black absolute lg:relative z-20`}
      >
        <Sidebar toggleSideBar={toggleSidebarFromSidebar} />
      </div>
      <div className="w-full h-screen lg:w-4/5 bg-cover bg-center relative">
        <div className="w-full md:h-full">
          <Navbar toggleSideBar={toggleSideBar} />
          <div className="w-full h-screen">{children}</div>
        </div>
      </div>
    </div>
  );
});

const AppLayout: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }: AppLayoutProps) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(
    <GetSectionLayout>
      <Component {...pageProps} />
    </GetSectionLayout>
  );
};

export default AppLayout;
