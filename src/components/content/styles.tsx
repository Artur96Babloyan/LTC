import { styled } from "src/styles/stitches.config";


export const Text = styled("p", {
  fontWeight: 400,
  color: "#05235C",
  margin: 0,
  fontSize: "14px",
  lineHeight: "20px",
  py: 20,
  "@min480": {
    py: 70,
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
