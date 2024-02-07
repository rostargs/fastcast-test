// Router
import { Route, Routes } from "react-router-dom";
// Layouts
import AppLayout from "./layouts/AppLayout";
// Pages
import RokuTV from "./pages/RokuTV";
import AppTV from "./pages/AppTV";
import Order from "./pages/Order";
// React
import { createContext } from "react";
// Hooks
import { useToggleColorMode } from "./hooks/useToggleColorMode";
// MUI
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const { theme, colorMode } = useToggleColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/app-tv" element={<AppTV />} />
            <Route path="/roku-tv" element={<RokuTV />} />
            <Route path="/order/package" element={<Order />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
