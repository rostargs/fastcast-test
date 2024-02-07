// React
import React from "react";
// MUI
import { AppBar, Box } from "@mui/material";
// Common
import Contacts from "../common/Contacts";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";
// Router
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100dvh">
      <AppBar position="static" elevation={4}>
        <Contacts />
        <AppHeader />
      </AppBar>
      <Box component="main">
        <Outlet />
      </Box>
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
