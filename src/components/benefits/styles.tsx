import { styled } from "src/styles/stitches.config";

export const TitleWrapper = styled("div", {
  gridColumn: "1 / span 12",
  py: 20,
  "@min768": {
    pt:70,
    pb: 87,
  },
});

export const Title = styled("h1", {
  fontWeight: "$bold",
  lineHeight: "44px",
  textTransform: "uppercase",
  fontSize:'16px',
  margin:0,
  "@min480":{
    fontSize: "48px",
  }
});

export const Wrapper = styled("div", {
  display: "grid",
  gap: "5vw",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gridColumn: "1 / span 12",

  "@min768": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  "@min1024": {
    gap: "2vw",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  "@min1440": {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  "@min2560": {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
});

