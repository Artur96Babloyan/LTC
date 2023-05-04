import { styled } from "@stitches/react";

const Button = styled("button", {
  padding: "10px 20px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",

  variants: {
    variant: {
      default: {
        backgroundColor: "white",
        color: "#EA638C",
        textDecoration: "none",
        border: "1px solid #EA638C",
      },
      primary: {
        backgroundColor: "#EA638C",
        color: "white",
        textDecoration: "none",
        border:0
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default Button;
