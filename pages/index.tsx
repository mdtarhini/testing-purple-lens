import type { NextPage } from 'next'
import Head from "next/head";
import Script from "next/script";

import Home from "../components/home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Testing Purple-Lens</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;

