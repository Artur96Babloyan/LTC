import { styled } from "src/styles/stitches.config";
import heroFor1920 from "../../images/contactHeroImages/heroFor1920.png";
import heroFor1440 from "../../images/contactHeroImages/heroFor1440.png";
import heroFor1024 from "../../images/contactHeroImages/heroFor1024.png";
import heroFor768 from "../../images/contactHeroImages/heroFor768.png";
import heroFor425 from "../../images/contactHeroImages/heroFor425.png";
import heroFor375 from "../../images/contactHeroImages/heroFor375.png";

export const HeroContainer = styled("div", {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  pb: 100,
  backgroundImage: `url(${heroFor375})`,
  minHeight: "290px",
  "@min425": {
    backgroundImage: `url(${heroFor425})`,
  },
  "@min768": {
    backgroundImage: `url(${heroFor768})`,
  },
  "@min1024": {
    backgroundImage: `url(${heroFor1024})`,
  },
  "@min1440": {
    backgroundImage: `url(${heroFor1440})`,
  },
  "@min1920": {
    minHeight: "935px",

    backgroundImage: `url(${heroFor1920})`,
  },
});

export const HeroTitleWrapper = styled("div", {
  gridRow: 1,
  display: "flex",
  flexDirection: "column",
  rowGap: "1em",
  padding: "70px 84px 0px 10px",
  gridColumn: "1 / span 12",
  "@min1024": {
    gridColumn: "2 / span 11",
  },
  "@min1440": {
    gridColumn: "1 / span 6",
    pt: 311,
  },
});

export const TitleWrapper = styled("div", {});

export const HeroTitle = styled("h1", {
  fontSize: "16px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
  },
  fontWeight: "bold",
  marginBottom: "16px",
  color: "#F7F7F7",
  textTransform: "uppercase",
});

export const HeroDesc = styled("h1", {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "40px",
  color: "#F7F7F7",
});
