import { styled } from "src/styles/stitches.config";
import heroFor1920 from "../../../images/aboutHeroImages/heroFor1920.png";
import heroFor1440 from "../../../images/aboutHeroImages/heroFor1440.png";
import heroFor1024 from "../../../images/aboutHeroImages/heroFor1024.png";
import heroFor768 from "../../../images/aboutHeroImages/heroFor768.png";
import heroFor425 from "../../../images/aboutHeroImages/heroFor425.png";
import heroFor375 from "../../../images/aboutHeroImages/heroFor375.png";
export const HeroContainer = styled("div", {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${heroFor375})`,
  height: "256px",
  "@min425": {
    backgroundImage: `url(${heroFor425})`,
    height: "290px",
  },
  "@min768": {
    backgroundImage: `url(${heroFor768})`,
    height: "373px",
  },
  "@min1024": {
    backgroundImage: `url(${heroFor1024})`,
    height: "498px",
  },
  "@min1440": {
    backgroundImage: `url(${heroFor1440})`,
    height: "700px",
  },
  "@min1920": {
    backgroundImage: `url(${heroFor1920})`,
    height: "935px",
  },
});

export const HeroTitleWrapper = styled("div", {
  position: "relative",
  zIndex: 1,
  gridColumn: "1 / span 12",
  pt: 70,
  pr: 170,
  "@min1024": {
    gridColumn: "1 / span 7",
    pt: 150,
    pr: 0,
  },
  "@min1440": {
    gridColumn: "1 / span 5",
    pt: 210,
  },
  "@min1920": {
    gridColumn: "1 / span 6",
    pt: 310,
  },
  gridRow: 1,
  display: "flex",
  flexDirection: "column",
  rowGap: "1em",
});

export const TitleWrapper = styled("div", {});

export const HeroTitle = styled("h1", {
  fontWeight: "bold",
  marginBottom: "16px",
  margin: 0,
  lineHeight: "20px",

  color: "#F7F7F7",
  textTransform: "uppercase",
  fontSize: "16px",
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
  },
});

export const HeroDesc = styled("p", {
  fontWeight: "bold",
  marginBottom: "40px",
  color: "#05235C",
  margin: 0,
  fontSize: "12px",
  "@min480": {
    fontSize: "24px",
    margin: 20,
  },
});
