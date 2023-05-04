import { styled } from "src/styles/stitches.config";

export const TextList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gridColumn: "1 / span 12",
  alignItems: "flex-start",
  margin: 0,
  padding: 0,
  listStyleType: "none",
});

export const ListItem = styled("li", {
  display: "flex",
  flexDirection: "inherit",
  margin: "0.5rem 0",
  padding: "0.5rem",
  gridColumn: "1 / span 12",
  gap: 30,
  "@min1024": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0.5rem 0",
    padding: "0.5rem",
    gridColumn: "1 / span 12",
    gap: 100,
  },
  "@min1440": {
    gridColumn: "1 / span 12",
    gap: 289,
  },
  "@min1660": {
    gridColumn: "1 / span 12",
    gap: 497,
  },
});

export const LeftText = styled("div", {
  flex: 1,
  marginRight: "1rem",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "29px",
    fontSize: "24px",
  },
  color: "#05235C",
  textTransform: "uppercase",
});

export const RightText = styled("div", {
  flex: 1,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "29px",
    fontSize: "24px",
  },
  color: "#05235C",
  textTransform: "uppercase",
});

export const Button = styled("div", {
  display: "flex",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "29px",
  textTlign: "center",
  textDecorationLine: "underline",
  textTransform: "uppercase",
  color: "#8EB5D6",
  cursor: "pointer",
  py: 20,
  "@min480": {
    py: 30,
  },
  gridColumn: "1 / span 12",
});

export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "16px",
  margin: 0,
  lineHeight: "20px",
  
  "@min768": {
    fontSize: "32px",
  },
  "@min1024": {
    lineHeight: "29px",
    fontSize: "48px",
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
});

export const TitlesWrapper = styled("div", {
  gridColumn: "1 / span 12",
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "center",
  pb: 20,

  "@min1660": {
    justifyContent: "space-between",
    pb: 70,
  },
});

export const LeftSide = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const RightSide = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const PartnersCount = styled("h2", {
  fontWeight: 700,
  margin: 0,
  textAlign: "center",
  fontSize: "32px",
  lineHeight: "39px",
  py: 20,
  "@min480": {
    fontSize: "96px",
    lineHeight: "117px",
    pb: 40,
  },

  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
});
