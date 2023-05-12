import { createTheme } from "@mui/material";

export const them = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 767,
      lg: 1263,
      xl: 1536,
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
});
