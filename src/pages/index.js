import Head from "next/head";
import Hero from "components/Hero";
import AiSection from "../components/AISection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PICLAB - HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <AiSection />
    </>
  );
}
