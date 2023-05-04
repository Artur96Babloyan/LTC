import { styled } from "src/styles/stitches.config";

export const SliderContainer = styled("div", {
  gridColumn: "1 / span 12",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "530px",
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, #8EB5D6 0%, rgba(217, 217, 217, 0) 100%)",
  filter: "drop-shadow(0px 4px 10px rgba(142, 181, 214, 0.25))",
  borderRadius: "10px",
});

export const Slide = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  transition: "opacity 0.2s ease-in-out",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Title = styled("h2", {
  fontSize: "24px",
  lineHeight: "29px",
  color: "#20A4F3",
});

export const HeadLine = styled("h2", {
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
});

export const Description = styled("p", {
  px: "40px",
  "@min768": {
    px: "60px",
  },
  "@min1024": {
    px: "110px",
  },
  "@min1440": {
    px: "221px",
  },
  fontSize: "12px",
  lineHeight: "15px",
  "@min480": {
    fontSize: "24px",
    lineHeight: "29px",
  },
  textAlign: "center",
});

export const DotContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "20px",
  left: 0,
  right: 0,
});

export const Dot = styled("div", {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "#ccc",
  margin: "0 5px",
  transition: "background-color 0.1s ease-in-out",
  "&.active": {
    backgroundColor: "#20A4F3",
  },
});
