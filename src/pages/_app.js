import React from "react";
import Head from "next/head";
import Script from "next/script";
import AppLayout from "../layouts/appLayout";
import "../../styles.scss";
import NotificationProvider from "@/components/Notification/NotificationProvider";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps, router }) {
  const { title, description } = pageProps?.content || {
    title: "Ogunyemi Grace",
    description: "Ogunyemi Grace's Portfolio",
  };

  return (
    <>
      <Head>
        <title key={"title"}>{`Ogunyemi Grace`}</title>
        <meta
          name="description"
          content={"Ogunyemi Grace's Portfolio"}
          key={"description"}
        />
        <meta property="og:type" content="website" key={"og:type"} />
        <meta property="og:title" content={`Ogunyemi Grace`} key={"og:title"} />
        <meta
          property="og:description"
          content={"Ogunyemi Graces's Portfolio"}
          key={"og:description"}
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Script
        type="module"
        src={"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}
      />
      <Script
        noModule
        src={"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}
      />

      <RecoilRoot>
        <NotificationProvider>
          <AppLayout
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </NotificationProvider>
      </RecoilRoot>
    </>
  );
}
