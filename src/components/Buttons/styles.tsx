import { styled } from "src/styles/stitches.config";

export const ButtonsWrapper = styled("div", {
  display: "inline-flex",
  gridColumn: "1 / span 12",

  "@min768": {
    gridColumn: "6 / span 7",
  },
  "@min1024": {
    gridColumn: "8 / span 9",
  },
  "@min1440": {
    gridColumn: "9 / span 9",
  },
  "@min1660": {
    gridColumn: "11 / span 9",
  },
  paddingTop: 70,
  gap: 20,
});

export const Button = styled("button", {
  padding: "12px 36px",
  backgroundColor: "#EA638C",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

export const ButtonOutline = styled("button", {
  padding: "12px 36px",
  color: "#EA638C",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});
