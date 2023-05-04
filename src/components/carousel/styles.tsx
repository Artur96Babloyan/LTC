import { keyframes } from "@stitches/react";
import { styled } from "src/styles/stitches.config";

const scroll = keyframes({
  "0%": {
    transform: "translateX(0)",
  },
  "100%": {
    transform: "translateX(calc(-250px * 6))",
  },
});

export const CustomCarousel = styled("div", {
  alignItems: "center",
  display: "flex",
  height: "100px",
  justifyContent: "center",
  gridColumn: "1 / span 12",
  
});

export const Slider = styled("div", {
  background: "white",
  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.125)",
  height: "100px",
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: "100%",

  "&::before, &::after": {
    content: '""',
    height: "100px",
    position: "absolute",
    width: "200px",
    zIndex: 2,
  },

  "&::after": {
    right: 0,
    top: 0,
    transform: "rotateZ(180deg)",
  },

  "&::before": {
    left: 0,
    top: 0,
  },

  ".slide": {},
});

export const Slide = styled("div", {
  height: "100px",
  width: "250px",
});

export const SlideTrack = styled("div", {
  animation: `${scroll} 20s linear infinite`,
  display: "flex",
  width: "calc(250px * 12)",
});

export const Image = styled("img", {
 height: "100px",
 width: "250px",
 objectFit:'contain'
});


export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "20px",
  my:20,
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
    my:70
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform:"uppercase"
});