import Image1 from "../../images/homeSliderImages/image1.png";
import Image2 from "../../images/homeSliderImages/image2.png";
import Image3 from "../../images/homeSliderImages/image3.png";
import Image4 from "../../images/homeSliderImages/image4.png";
import Image5 from "../../images/homeSliderImages/image5.png";
import Image6 from "../../images/homeSliderImages/image6.png";

import Container from "../container";
import { CustomCarousel, Slider, SlideTrack, Slide, Image, Title } from "./styles";

function Carousel() {
  const images = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
  ] as any;

  return (
    <Container>
      <Title>Affinity Partnerships</Title>
      <CustomCarousel>
        <Slider>
          <SlideTrack>
            {images.map((image: any, index: number) => (
              <Slide>
                <Image key={index} src={image.image} />
              </Slide>
            ))}
          </SlideTrack>
        </Slider>
      </CustomCarousel>
    </Container>
  );
}

export default Carousel;
