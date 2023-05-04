import { styled } from "src/styles/stitches.config";
export const HeaderWrapper = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  "@min480": {
    justifyContent: "space-between",
  },
  gridColumn: "1 / span 12",
  py: 18,
});

export const LogoWrapper = styled("a", {});

export const Links = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > *:first-child": { margin: 0 },
});

export const Link = styled("a", {
  marginLeft: "37px",
  color: "#05235C",
  textDecoration: "none",
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "16px",
  "@min480": {
    fontSize: "24px",
  },
});

export const Button = styled("a", {
  padding: "8px 10px",
  fontSize: "12px",
  "@min480": {
    padding: "10px 34px",
    fontSize: "16px",
  },
  backgroundColor: "#EA638C",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textDecoration: "none",
});
