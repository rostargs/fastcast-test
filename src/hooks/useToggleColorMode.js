// React
import { useMemo, useState } from "react";
// MUI
import { createTheme } from "@mui/material";
// Theme
import theme from "../theme";
import { getDesignTokens } from "../theme";
export const useToggleColorMode = () => {
  const [mode, setMode] = useState("light");

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          mode,
          ...getDesignTokens(),
        },
      }),
    [mode]
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return {
    colorMode,
    theme: modifiedTheme,
  };
};
