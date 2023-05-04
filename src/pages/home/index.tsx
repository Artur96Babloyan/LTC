import { benefitData, productData } from "src/components/data";
import useWindowSize from "src/components/utils/useWindowSize";
import Benefits from "../../components/benefits";
import Buttons from "../../components/Buttons";
import Carousel from "../../components/carousel";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Testimonials from "../../components/testimonials";

const Home = () => {
  const { width } = useWindowSize();

  const heroData = {
    title: "LTC Guidance Insurance Agency",
    titleColor: "$white",
    description: "A Long-Term Care Resources Agency",
  };

  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      {width >= 480 && <Buttons />}
      <Benefits data={benefitData} />
      <Benefits data={productData} />
      <Testimonials />
      <Carousel />
    </>
  );
};

export default Home;
