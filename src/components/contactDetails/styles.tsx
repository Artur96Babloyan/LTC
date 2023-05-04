import { styled } from "src/styles/stitches.config";

export const ContentWrapper = styled("div", {
  display: "flex",
  py: 20,

  "@min480": {
    py: 56,
  },
  flexDirection: "column",
  gap: 20,
  gridColumn: "1 / span 12",

  "@min1440": {
    gridColumn: "1 / span 4",
  },
});

export const MapContainer = styled("div", {
  gridRow: 1,
  gridColumn: "1 / span 12",
  gridArea: "2 / 1 / auto / span 12",
  display: "flex",
  height: "254px",
  justifyContent: "center",
  "@min768": {
    height: "460px",
  },
  "@min1440": {
    gridArea: "1 / 1 / auto / span 12",
    gridColumn: "6 / span 7",
    height: "460px",
  },
  "@min1660": {
    gridColumn: "7/ span 6",
  },
  "@min1920": {
    height: "660px",
    gridColumn: "8 / span 12",
  },
});

export const Wrapper = styled("div", {
  gridColumn: "1 / span 12",
  py: 20,
  "@min480": {
    py: 70,
  },
});

export const MapWrapper = styled("div", {
  width: "1050px",
  maxHeight: "660px",
  border: "1px solid #8EB5D6",
  filter: "drop-shadow(0px 4px 10px #8EB5D6)",
  borderRadius: "10px",
  overflow:'hidden',
  "@min1440": {
    width: "100%",
  },
});

export const Content = styled("p", {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  "@min480": {
    lineHeight: "29px",
    fontSize: "24px",
  },
  color: "#05235C",
  margin: 0,
});

export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "16px",
  "@min480": {
    lineHeight: "59px",
    fontSize: "48px",
  },
  color: "#05235C",
  gridColumn: "1 / span 12",
  textTransform: "uppercase",
  margin: 0,
});

