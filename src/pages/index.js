import Head from "next/head";
import { Client } from "../utils/prismicHelpers";
import AppBar from "../components/AppBar";
import {
  HeroContent,
  AiSection,
  CardsSection,
  NewsSection,
  SubscribeSection,
} from "../slices";
import PropTypes from "prop-types";

const Home = ({ document }) => {
  const homeContent = {};
  document.data.slices.forEach((slice) => {
    if (slice.slice_type === "hero_content") {
      homeContent.hero = <HeroContent slice={slice} />;
    }

    if (slice.slice_type === "ai_section") {
      homeContent.aiSection = <AiSection slice={slice} />;
    }

    if (slice.slice_type === "cards_section") {
      homeContent.cardsSection = <CardsSection slice={slice} />;
    }

    if (slice.slice_type === "news_section") {
      homeContent.newsSection = <NewsSection slice={slice} />;
    }

    if (slice.slice_type === "subscribe_section") {
      homeContent.subscribeSection = <SubscribeSection slice={slice} />;
    }
  });

  return (
    <>
      <Head>
        <title>PICLAB - HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {homeContent.hero}
      {homeContent.aiSection}
      {homeContent.cardsSection}
      {homeContent.newsSection}
      {homeContent.subscribeSection}

      <AppBar />
    </>
  );
};

export async function getStaticProps() {
  const document = await Client().getByUID("home-page", "home");

  console.log("document", document);
  return {
    props: {
      document,
    },
  };
}

Home.propTypes = {
  document: PropTypes.shape({
    data: PropTypes.shape({
      slices: PropTypes.array,
    }),
  }).isRequired,
};

export default Home;
