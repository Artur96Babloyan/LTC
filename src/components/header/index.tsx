import React from "react";
import Container from "../container";
import Icon from "../../icons/Icons";
import { HeaderWrapper, LogoWrapper, Links, Link, Button } from "./styles";
import useWindowSize from "../utils/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <HeaderWrapper>
        {width >= 480 && (
          <LogoWrapper href="/">
            <Icon type="logo" width={131} height={41} />
          </LogoWrapper>
        )}
        <Links>
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
        </Links>
        <Button href="contact-us">GET IN TOUCH</Button>
      </HeaderWrapper>
    </Container>
  );
};
export default Header;
