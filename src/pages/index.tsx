import Head from "next/head";

import { HomeHero } from "@/components/HomeHero/HomeHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ironwoods Timberwoods Inc.</title>
        <meta name="description" content="Ironwoods Timberwoods Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <section id="home-page">
          <HomeHero/>
        </section>
    </>
  );
}
