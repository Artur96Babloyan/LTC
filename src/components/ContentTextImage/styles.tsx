import { styled } from "src/styles/stitches.config";

export const ContentWrapper = styled("div", {
  display: "flex",
  pb: 20,
  px: 16,
  gridColumn: "1 / span 12",
  "@min1024": {
    gridColumn: "1 / span 12",
    py: 56,
    px: 32,
  },
  "@min1440": {
    gridColumn: "7 / span 7",
    py: 56,
    px: 32,
  },

  "@min1660": {
    gridColumn: "6 / span 6",
  },
});

export const ImageWrapper = styled("div", {
  py: 20,
  px: 16,
  gridRow: 1,
  display: "flex",
  justifyContent: "center",
  gridColumn: "1 / span 12",
  "@min1024": {
    display: "block",
    px: 32,
    gridColumn: "1 / span 12",
  },
  "@min1440": {
    gridColumn: "1 / span 5",
  },
});

export const Wrapper = styled("div", {
  gridColumn: "1 / span 12",
});

export const Image = styled("img", {
  width: "295px",
  height: "291",
  "@min425": {
    width: "350px",
    height: "291",
  },

  "@min768": {
    width: "650px",
  },
  "@min1024": {
    width: "320px",
    height: "580",
  },
  "@min1440": {
    width: "560px",
    height: "580",
  },
});

export const Content = styled("p", {
  fontWeight: 400,
  color: "#05235C",
  margin: 0,
  fontSize: "14px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "29px",
    fontSize: "24px",
  },
});

export const Title = styled("h1", {
  fontWeight: 700,
  fontSize: "16px",
  margin:0,
  pb:20,
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
    pb:70
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
  mx: "16px",
  "@min600": {
    mx: "24px",
  },
  "@min1024": {
    mx: "33px",
  },
  "@min1440": {
    mx: "80px",
  },
  "@min1660": {
    mx: "120px",
  },
});
