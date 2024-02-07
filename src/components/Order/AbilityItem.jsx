import { Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const AbilityCard = styled(Card)({
  display: "flex",
  height: "100%",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  fontWeight: theme.typography.fontWeightMedium,
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.light.contrastText : theme.palette.light.main,
}));

const AbilityItem = ({ image, title, info }) => {
  return (
    <AbilityCard elevation={4}>
      <CardContent sx={{ alignSelf: "center" }}>
        <img src={image} alt="Micro" style={{ width: "3rem" }} />
      </CardContent>
      <CardContent sx={{ textAlign: "start" }}>
        <CardTitle component="h6">{title}</CardTitle>
        <Paragraph component="p" variant="body2">
          {info}
        </Paragraph>
      </CardContent>
    </AbilityCard>
  );
};

export default AbilityItem;
