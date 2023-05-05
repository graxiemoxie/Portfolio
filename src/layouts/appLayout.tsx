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
    <div className="w-full h-full lg:flex relative">
      <div
        className={`${
          toggle ? "" : "-translate-x-full lg:translate-x-0"
        } min-w-[300px] w-1/5 h-screen bg-black absolute lg:relative z-10`}
      >
        <Sidebar toggleSideBar={toggleSidebarFromSidebar} />
      </div>
      <div className="w-full h-screen lg:w-4/5 bg-cover bg-center ">
        <div className="w-full md:h-full">
          <Navbar toggleSideBar={toggleSideBar} />
          <div className="w-full h-full overflow-y-scroll">{children}</div>
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
