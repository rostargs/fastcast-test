// MUI
import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontWeightPreBold: 600,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 0,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 464,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1500,
    },
  },
});

export const getDesignTokens = () => {
  return {
    primary: {
      main: "#007DB8",
      dark: "#005881",
    },
    light: {
      primary: "rgba(255, 255, 255, 0.12)",
      secondary: "rgba(240, 240, 240, 0.5)",
      main: "rgba(0, 0, 0, 0.54)",
      light: "rgb(224, 224, 224)",
      dark: "rgb(66, 66, 66)",
      contrastText: "rgba(255, 255, 255, 0.7)",
    },
    border: {
      main: "rgb(189, 189, 189)",
      light: "rgb(36,36,36)",
    },
    defaultDark: "#121212",
    red: "#C22942",
  };
};

export default responsiveFontSizes(theme);
