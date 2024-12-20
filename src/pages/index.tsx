import Page from "components/containers/pagelayouts/Page";
import Story from "components/sections/Story";
import Awards from "components/sections/Awards";
import Hero from "components/sections/Hero";
import Trailer from "components/sections/Trailer";
import Gameplay from "components/sections/Gameplay";
import CTA from "components/sections/CTA";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page title="1 Trait Escape">
      <Hero />
      <Story />
      <Gameplay />
      <Awards />
      <Trailer />
      <CTA />
    </Page>
  );
};

export default Home;
