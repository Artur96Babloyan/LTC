import Container from "../container";
import {
  HeroContainer,
  HeroTitle,
  HeroTitleWrapper,
  TitleWrapper,
} from "./styles";
import Form from "./contactForm";
import Image from "../../images/contactUs.png";
import useWindowSize from "../utils/useWindowSize";

export const ConactForm = () => {
  const { width } = useWindowSize();

  return (
    <>
      <HeroContainer
      
      >
        <Container>
          <HeroTitleWrapper>
            <TitleWrapper>
              <HeroTitle>
                {"Best Time to Purchase Long-Term Care Insurance"}
              </HeroTitle>
            </TitleWrapper>
          </HeroTitleWrapper>
          {width > 480 && <Form />}
        </Container>
      </HeroContainer>
      {width <= 480 && (
        <Container>
          <Form />
        </Container>
      )}
    </>
  );
};
export default ConactForm;
