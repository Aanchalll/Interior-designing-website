import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Arpan Decores",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.svg",//"/avatar.png"
    type: "website",
    ...customMeta,
  };
  //className=" bg-[#d4a59a]"
  return (
    <div className=" ">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
         <link rel="shortcut icon" href="../images/favicon-icon.ico" />
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Julee&family=Kalam:wght@300&display=swap" rel="stylesheet"/>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aanchal Sahu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 flex flex-col justify-between h-[100vh]  min-w-full ">
        {/* min-w-full h-[100vh]   */}
        <Navbar />
        <div>{children}
      </div>
        <Footer />
      </main>
    </div>
  );
}
