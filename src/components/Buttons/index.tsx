import Button from "../common/button";
import Container from "../container";
import { ButtonsWrapper } from "./styles";

export default function Buttons() {
  return (
    <Container>
      <ButtonsWrapper>
        <Button variant="default" as="a" href="contact-us">GET IN TOUCH</Button>
        <Button variant="primary">START A LIVE CHAT</Button>
      </ButtonsWrapper>
    </Container>
  );
}
