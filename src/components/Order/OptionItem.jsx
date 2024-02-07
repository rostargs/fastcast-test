// React
import { memo } from "react";
// MUI
import { Card, Typography, CardActionArea, CardContent, Checkbox, Divider, styled, Stack } from "@mui/material";

const OptionCard = styled(Card, { shouldForwardProp: (prop) => prop !== "isActive" })(({ theme, isActive }) => ({
  textAlign: "start",
  borderRadius: 4,
  border: `1px solid ${
    isActive
      ? theme.palette.primary.main
      : theme.palette.mode === "dark"
      ? theme.palette.light.dark
      : theme.palette.border.main
  }`,
  boxShadow: isActive && `0 0 0 2px ${theme.palette.primary.main}`,
  position: "relative",
  height: "100%",
}));

const OptionCardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: theme.typography.fontWeightPreBold,
  paddingRight: "1.5rem",
  marginBottom: "0.5rem",
}));

const OptionCardDescription = styled(Typography)(({ theme }) => ({
  marginTop: "0.5rem",
  fontSize: 15,
  color: theme.palette.mode === "dark" ? theme.palette.light.contrastText : theme.palette.light.main,
}));

const OptionActualPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  ...theme.typography.body1,
  textDecoration: "line-through",
  marginRight: 4,
}));
const OptionPriceWithDicount = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightPreBold,
  lineHeight: 1.5,
}));
const OptionPlan = styled(Typography)(({ theme }) => ({
  textTransform: "lowercase",
  marginLeft: 4,
  ...theme.typography.subtitle2,
  color: theme.palette.grey[700],
  alignSelf: "end",
}));

const OptionItem = ({
  title,
  description,
  showPrice,
  actualPrice,
  priceWithDiscount,
  plan,
  onSelectOption,
  isActive,
}) => {
  return (
    <OptionCard isActive={isActive}>
      <CardActionArea onClick={() => onSelectOption(title)} sx={{ height: "100%" }}>
        <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <OptionCardTitle>{title}</OptionCardTitle>
          <Checkbox sx={{ position: "absolute", top: 0, right: 0 }} checked={isActive} />
          <Divider />
          <OptionCardDescription>{description}</OptionCardDescription>
          {showPrice && (
            <Stack direction="row" justifyContent="flex-end" paddingTop={0.5} marginTop="auto">
              {actualPrice && <OptionActualPrice>${actualPrice}.00</OptionActualPrice>}
              <OptionPriceWithDicount>${priceWithDiscount}.00</OptionPriceWithDicount>
              <OptionPlan>{plan}</OptionPlan>
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </OptionCard>
  );
};

export default memo(OptionItem);
