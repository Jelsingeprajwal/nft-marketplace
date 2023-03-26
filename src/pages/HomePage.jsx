import React from "react";
import {
  Categories,
  DiscoverMoreNft,
  GetStarted,
  Hero,
  SubscribeWidget,
  TopCreators,
  Trending,
  NFTHighlight,
  Footer,
} from "../components";

function HomePage() {
  return (
    <div>
      <Hero />
      <Trending />
      <TopCreators />
      <Categories />
      <DiscoverMoreNft />
      <NFTHighlight />
      <GetStarted />
      <SubscribeWidget />
      <Footer />
    </div>
  );
}

export default HomePage;
