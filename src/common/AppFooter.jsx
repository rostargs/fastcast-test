// React
import React from "react";
// MUI
import { Box, Container, Grid, List, ListItem, Stack, Typography, styled } from "@mui/material";
// Router
import { Link, useLocation } from "react-router-dom";
// Utils
import { footerNavigation } from "../utils/footerNavigation";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  padding: "0 0 1rem",
  borderTop: `1px solid ${theme.palette.light.primary}`,
  marginTop: "auto",
}));

const FooterNavigation = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.light.primary}`,
  padding: "3rem 0 2rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1rem",
  },
}));

const LinkListTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.light.secondary,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  fontWeight: theme.typography.fontWeightBold,
}));

const NavigationItem = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "1.1rem",
  transition: `color ${theme.transitions.duration.standard}ms`,
  ":hover": {
    color: theme.palette.light.secondary,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.light.secondary,
  borderBottom: `1px dotted ${theme.palette.light.secondary}`,
  textAlign: "center",
  ...theme.typography.subtitle2,
}));

const AppFooter = () => {
  const location = useLocation();

  const showNavigation = !(location.pathname === "/order/package");

  const renderFooterNavigation = footerNavigation.map((item) => {
    return (
      <Grid item lg={3} sm={6} xs={12} key={item.title}>
        <LinkListTitle component="h4">{item.title}</LinkListTitle>
        <List sx={{ pt: 1 }}>
          {item.children.map((link) => (
            <ListItem key={link.title}>
              <NavigationItem to={link.to} aria-label={link.title}>
                {link.title}
              </NavigationItem>
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  });

  return (
    <FooterWrapper>
      <Container maxWidth={"xl"} component="footer">
        {showNavigation && (
          <FooterNavigation component="nav" container spacing={1}>
            {renderFooterNavigation}
          </FooterNavigation>
        )}
        <Stack spacing={1} paddingTop={3} color="light.secondary">
          <Typography textAlign="center" variant="subtitle2">
            Copyrights © 2008-2024 All Rights Reserved by FastCast DWC-LLC
          </Typography>
          <Stack direction="row" justifyContent="center">
            <FooterLink aria-label="Terms of Service" to="#">
              Terms of Service
            </FooterLink>
            <pre> / </pre>
            <FooterLink aria-label="Privacy Policy" to="#">
              Privacy Policy
            </FooterLink>
          </Stack>
        </Stack>
      </Container>
    </FooterWrapper>
  );
};

export default AppFooter;
