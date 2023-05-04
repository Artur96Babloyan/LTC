import { styled } from "src/styles/stitches.config";

export const SliderContainer = styled("div", {
  gridColumn: "1 / span 12",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "109px",
  position: "relative",
  overflow: "hidden",
  "@min768": {
    height: "200px",
  },
  "@min1024": {
    height: "267px",
  },
  "@min1440": {
    height: "439px",
  },
});

export const Slide = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  transition: "opacity 0.2s ease-in-out",
});

export const HeadLine = styled("h2", {
  fontWeight: 700,
  fontSize: "16px",
  margin: 0,
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
});

export const Image = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const Content = styled("p", {
  fontWeight: 400,
  color: "#05235C",
  margin: 0,
  fontSize: "14px",
  lineHeight: "20px",
  pt: 20,
  "@min480": {
    pt: 70,
    lineHeight: "29px",
    fontSize: "24px",
  },

  gridColumn: "1 / span 12",
  "@min1024": {
    gridColumn: "1 / span 9",
  },
  "@min1440": {
    gridColumn: "1 / span 7",
  },
  "@min1660": {
    gridColumn: "1 / span 6",
  },
});
