// React
import React from "react";
// Common
import Hero from "../common/Hero";
import More from "../common/More";
import Benefits from "../common/Benefits";
// Utils
import { rokuTVInfo } from "../utils/rokuTVInfo";
import PricingCard from "../common/PricingCard";
// MUI
import { Box, Typography, styled } from "@mui/material";
// Components
import Demo from "../components/RokuTV/Demo";

const CardWrapper = styled(Box)(({ theme }) => ({
  margin: "0 1rem",
  padding: "0 2rem",
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.light.contrastText : theme.palette.light.main,
  textAlign: "center",
}));

const RokuTV = () => {
  return (
    <>
      <Hero page="rokuTV" />
      <More />
      <Typography component="h2" variant="h3" textAlign="center">
        Create Your Own Roku TV Channel App
      </Typography>
      <Subtitle component="h4" variant="h4">
        App for Online Radio and Online TV
      </Subtitle>
      <Benefits info={rokuTVInfo} contentWidth={7}>
        <CardWrapper>
          <PricingCard variant="new" title="Roku TV Channel App" price={75} save={299} />
        </CardWrapper>
      </Benefits>
      <Subtitle component="p" variant="subtitle2">
        Delivery time is up to 30 days from the day we receive the project and all required details. Unpaid pre-orders
        will be canceled in 12 hours
      </Subtitle>
      <Demo />
    </>
  );
};

export default RokuTV;
