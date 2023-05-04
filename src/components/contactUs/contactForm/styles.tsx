import { styled } from "src/styles/stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  gridColumn: "1 / span 12",
  "@min1024": {
    paddingTop: "70px",
    gridColumn: "2 / span 10",
  },
  "@min1440": {
    gridColumn: "8 / span 10",
  },
});
export const Title = styled("h2", {
  fontSize: "24px",
  marginRight: "24px",
});

export const FormWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: "rgb(5 35 92 / 50%)",
  gap: 20,
  padding: 20,
  "@min768": {
    gap: 40,
    padding: 40,
  },
  borderRadius: "10px",
});

export const Input = styled("input", {
  padding: "14px",
  fontSize: "16px",
  "@min480": {
    padding: "21px",
    fontSize: "20px",
  },
  border: "none",
  borderRadius: "10px",
  fontFamily: "Montserrat",
  background: "rgb(255 255 255 / 50%)",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "white",
  },
});

export const TextArea = styled("textarea", {
  padding: "14px",
  height: "80px",
  "@min480": {
    padding: "21px",
    height: "100px",
  },
  marginBottom: "16px",
  fontFamily: "Montserrat",
  borderRadius: "4px",
  fontSize: "20px",
  background: "rgb(255 255 255 / 50%)",
  border: "none",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    color: "white",
  },
});

export const Button = styled("button", {
  backgroundColor: "#EA638C",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textDecoration: "none",
  width: "108px",
  height: "31px",
  "@min480": {
    width: "127px",
    height: "48px",
  },
  justifySelf: "center",
  alignSelf: "center",
});
