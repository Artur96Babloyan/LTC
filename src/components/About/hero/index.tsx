import { useEffect, useState } from "react";
import Container from "../../container";
import { HeroProptype } from "../../models/index";
import {
  HeroContainer,
  HeroDesc,
  HeroTitle,
  HeroTitleWrapper,
  TitleWrapper,
} from "./styles";

export const Hero = ({ heroData }: HeroProptype) => {
 
  return (
    <HeroContainer >
      <Container>
        <HeroTitleWrapper>
          <TitleWrapper>
            <HeroTitle css={{color:heroData.titleColor}}>{heroData.title}</HeroTitle>
            {heroData.description && (
              <HeroDesc>{heroData.description}</HeroDesc>
            )}
          </TitleWrapper>
        </HeroTitleWrapper>
      </Container>
    </HeroContainer>
  );
};
export default Hero;
