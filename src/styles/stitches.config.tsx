import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import rem from "src/components/utils/toRem";

const fontFallbacks =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Verdana, sans-serif';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Reds
      red: "rgba(190, 30, 45, 1)",
      mutedRed: "rgba(222, 42, 56, 1)",
      hoverRed: "rgba(216, 77, 83, 1)",
      //Blacks
      black: "#000",
      mutedBlack: "rgba(57, 58, 61, 1)",
      // Neutrals
      white: "rgba(255, 255, 255, 1)",
      background: "rgba(212, 212, 216, 1)",
      border: "rgba(212, 212, 216, 1)",
      extraDarkGrey: "rgba(36, 36, 36, 1)",
      darkGrey: "rgba(134, 134, 134, 1)",
      midGrey: "rgba(185, 185, 185, 1)",
      lightGrey: "#EBEBEB",
      superLightGrey: "rgba(245, 245, 245, 1)",
      // Utility Colors
      info: "rgba(0, 116, 196, 1)",
      success: "rgba(86, 178, 151, 1)",
      warning: "rgba(197, 59, 0, 1)",
      transparent: "transparent",
    },
    fontSizes: {
      "Display-Large": rem("80px"),
      "Display-Regular": rem("60px"),
      "Heading-Large": rem("48px"),
      "Heading-Regular": rem("32px"),
      "Heading-medium": rem("24px"),
      "Heading-Small": rem("18px"),
      "Heading-xSmall": rem("16px"),
      Overline: rem("12px"),
      "Body-Small": rem("16px"),
      "Body-xSmall": rem("14px"),
      "Body-xxSmall": rem("12px"),
      "Button-Small": rem("16px"),
      "Button-xSmall": rem("14px"),
      caption: rem("10px"),
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fonts: {
      primary: `"Helvetica Neue", ${fontFallbacks}`,
    },
    letterSpacings: {
      tight: "-0.01em",
      regular: "0.01em",
      roomy: "0.02em",
      spaced: "0.42em",
    },
    lineHeights: {
      xSmall: "90%",
      small: "100%",
      medium: "140%",
      large: "160%",
    },
  },
  media: {
    min375: "(min-width: 375px)",
    min425: "(min-width: 425px)",
    min480: "(min-width: 480px)",
    min600: "(min-width: 600px)",
    min675: "(min-width: 675px)",
    min768: "(min-width: 768px)",
    min800: "(min-width: 800px)",
    min1024: "(min-width: 1024px)",
    min1200: "(min-width: 1200px)",
    min1440: "(min-width: 1440px)",
    min1500: "(min-width: 1500px)",
    min1660: "(min-width: 1660px)",
    min1800: "(min-width: 1800px)",
    min1920: "(min-width: 1920px)",
    min2560: "(min-width: 2560px)",
  },
  utils: {
    bg: (value: Stitches.PropertyValue<"background">) => ({
      background: value,
    }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    $hover: (value: Stitches.CSS) => ({
      "@media (hover: hover)": {
        "&:hover": value,
      },
    }),
  },
});
