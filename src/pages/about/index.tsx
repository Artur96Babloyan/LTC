import Collapse from "src/components/Associations";
import Buttons from "src/components/Buttons";
import ContentTextImage from "src/components/ContentTextImage";
import { associationsData } from "src/components/data";
import Header from "src/components/header";
import Hero from "src/components/About/hero";
import useWindowSize from "src/components/utils/useWindowSize";
import AboutSlider from "src/components/About/slider";
import Content from "src/components/content/indext";

const About = () => {
  const { width } = useWindowSize();
  const heroData = {
    title: "Security, Stability, Clarity.",
    titleColor: "#05235C",
  };
  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      {width >= 480 && <Buttons />}
      <ContentTextImage />
      <AboutSlider />
      <Content />
      <Collapse data={associationsData} />
    </>
  );
};

export default About;
