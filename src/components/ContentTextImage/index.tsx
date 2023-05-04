import React from "react";
import Container from "../container";
import LatasPic from "../../images/Lana.png";
import { ImageWrapper,Image, Content, ContentWrapper, Title, Wrapper } from "./styles";

const ContentTextImage = (props: any) => {
  return (
    <Wrapper css={{ pt:20, "@min480": { pt: 70 }}}>
      <Title>Svetlana Chowdhury, CFP, JD, RIA</Title>
      <Container
        innerCSS={{
          border: "1px solid #8EB5D6",
          filter: "drop-shadow(0px 4px 10px #8EB5D6)",
          borderRadius: "10px",
        }}
      >
        <ImageWrapper>
          <Image src={LatasPic} />
        </ImageWrapper>
        <ContentWrapper>
          <Content>
            Peace of mind about paying for care comes from being prepared for
            tomorrow while enjoying today. But how would you know where to
            start?... Reach out to us! <br /> <br /> Our agency explains your
            options, simplifies your choices, and guides you to the most
            appropriate and affordable plan to help you pay for Long Term Care.
            Get clarity and understanding about your choices! <br /> <br />{" "}
            After decades of advising clients about investments, I turned my
            focus to Long Term Care guidance. I am a Certified Financial
            Planner, a Juris Doctor, and a Registered Investment Adviser with
            decades of experience. <br /> <br /> Most of my clients are people
            like me – hard working professionals who are used to taking care of
            themselves and are proud of it. I help them navigate the somewhat
            unknown field of Long-Term Care planning. I am also an avid
            gardener, a Jeopardy fan, and an amateur gourmet cook. But, most of
            all, I enjoy the California sunshine and love to bring joy to
            people. Let’s have a conversation!
          </Content>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContentTextImage;
