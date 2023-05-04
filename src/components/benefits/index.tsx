import React from "react";
import Container from "../container";
import { BenefitProptype } from "../models";
import TextIcon from "../textAndIcon";
import { Title, TitleWrapper, Wrapper } from "./styles";
const Benefits = ({data}: any) => {
  const { titileColor, title, benefits } = data;



  return (
    <Container innerCSS={{ pb: 20, "@min480": { pb: 70 }}}>
      <TitleWrapper>
        <Title css={{ color: titileColor }}>{title}</Title>
      </TitleWrapper>
      <Wrapper>
        {benefits.map((item: any) => {
          return <TextIcon item={item} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Benefits;
