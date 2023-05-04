import { useEffect, useState } from "react";
import {
  aboutSliderImagesFor1024,
  aboutSliderImagesFor1920,
  aboutSliderImagesFor375,
} from "src/components/data";
import useWindowSize from "src/components/utils/useWindowSize";
import Container from "../../container";
import { SliderContainer, Slide, Image, HeadLine, Content } from "./styles";

const AboutSlider = () => {
  const { width } = useWindowSize();

  const [slides, setSlides] = useState<any>([]);

  useEffect(() => {
    if (width > 1024 && width <= 1920) {
      setSlides(aboutSliderImagesFor1920);
    } else if (width > 425 && width <= 1024) {
      setSlides(aboutSliderImagesFor1024);
    } else if (width <= 425) {
      setSlides(aboutSliderImagesFor375);
    }
  }, [width]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: any;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [activeSlide, isPaused, slides.length]);

  const handleSlideMouseOver = () => {
    setIsPaused(true);
  };

  const handleSlideMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <>
      <Container innerCSS={{ py: 20, "@min480": { py: 70 } }}>
        <HeadLine>LTC Guidance is an LTC Resources Insurance Agency.</HeadLine>
      </Container>
      <SliderContainer>
        {slides.map((slide: any, index: number) => (
          <Slide
            key={index}
            style={{
              opacity: activeSlide === index ? 1 : 0,
              zIndex: activeSlide === index ? 1 : 0,
            }}
          >
            <Image
              src={slide.image}
              onMouseOver={handleSlideMouseOver}
              onMouseOut={handleSlideMouseOut}
            />
          </Slide>
        ))}
      </SliderContainer>
    </>
  );
};

export default AboutSlider;
