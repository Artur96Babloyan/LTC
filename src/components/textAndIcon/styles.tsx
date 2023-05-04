import { styled } from "src/styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 10,
  "@min480": {
    gap: 20,
  },
});

export const Span = styled("div", {
  fontSize: "12px",
  lineHeight: "15px",
  maxWidth: "104px",

  "@min480": {
    fontSize: "24px",
    lineHeight: "29px",
    maxWidth: "213px",
  },
  fontWeight: "400px",
  color: "#05235C",
});
