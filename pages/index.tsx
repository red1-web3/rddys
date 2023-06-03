import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import HomePage from "views/Home";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Head>
        <title>RDDYS | Ecommerce webstore</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HomePage />
    </>
  );
}
