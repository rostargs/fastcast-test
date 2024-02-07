// MUI
import { IconButton, Button, Toolbar, styled, Stack, useTheme } from "@mui/material";
// MUI Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// Assets
import logo from "../assets/companyLogo.webp";
// Router
import { Link } from "react-router-dom";
// React
import { useContext } from "react";
import { ColorModeContext } from "../App";

const Header = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-between",
  },
}));

const CompanyLogo = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("lg")]: {
    position: "static",
    transform: "none",
  },
  "& > a > img": {
    maxWidth: "100%",
    width: 140,
    [theme.breakpoints.up("md")]: {
      width: 280,
    },
  },
}));

const AppHeader = () => {
  const theme = useTheme();
  const themeContext = useContext(ColorModeContext);

  return (
    <Header>
      <CompanyLogo disableRipple>
        <Link to="/">
          <img src={logo} alt="Company logo" />
        </Link>
      </CompanyLogo>
      <Stack direction="row" spacing={0.5}>
        <IconButton sx={{ color: (theme) => theme.palette.primary.main }} onClick={themeContext.toggleColorMode}>
          {theme.palette.mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Button variant="contained">Login</Button>
      </Stack>
    </Header>
  );
};

export default AppHeader;
