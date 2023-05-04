import { useEffect, useState } from "react";
import Container from "../container";
import { slides } from "../data";
import {
  SliderContainer,
  Slide,
  Title,
  Description,
  DotContainer,
  Dot,
  Content,
  HeadLine,
} from "./styles";



const Testimonials = () => {
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
  }, [activeSlide, isPaused]);

  const handleSlideMouseOver = () => {
    setIsPaused(true);
  };

  const handleSlideMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      <HeadLine>TESTIMONIALS</HeadLine>
      <SliderContainer>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            style={{
              opacity: activeSlide === index ? 1 : 0,
              zIndex: activeSlide === index ? 1 : 0,
            }}
          >
            <Content
              onMouseOver={handleSlideMouseOver}
              onMouseOut={handleSlideMouseOut}
            >
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
            </Content>
          </Slide>
        ))}
        <DotContainer>
          {slides.map((slide) => (
            <Dot
              key={slide.id}
              className={activeSlide === slide.id - 1 ? "active" : ""}
            />
          ))}
        </DotContainer>
      </SliderContainer>
    </Container>
  );
};

export default Testimonials;
