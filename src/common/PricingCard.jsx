// React
import React from "react";
// MUI
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  styled,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  paddingBottom: "1.5rem",
  border: theme.palette.mode === "dark" && `1px solid ${theme.palette.divider}`,
}));

const CardTitle = styled(Typography, { shouldForwardProp: (prop) => prop !== "cardVariant" })(
  ({ theme, cardVariant }) => ({
    fontSize: "1.125rem",
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
    padding: "1rem 0",
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: "100%",
    backgroundColor: cardVariant?.titleBackground || (theme.palette.mode === "dark" && theme.palette.grey[900]),
  })
);

const CardBody = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "inherit",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  padding: "0",
});

const Bage = styled(Typography, { shouldForwardProp: (prop) => prop !== "cardVariant" })(({ theme, cardVariant }) => ({
  padding: "10px",
  textTransform: "uppercase",
  color: theme.palette.common.white,
  backgroundColor: cardVariant.bageColor,
  width: "200px",
  textAlign: "center",
  fontWeight: theme.typography.fontWeightBold,
  position: "absolute",
  transform: "rotate(-45deg) translate(-30%, -100%)",
  left: 0,
  top: 0,
}));

const PriceWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingTop: "1rem",
  color: theme.palette.mode === "light" && theme.palette.primary.main,
}));

const FeaturesList = styled(List)({
  padding: "1.5rem",
  width: "100%",
});

const FeatureItem = styled(ListItem)({
  justifyContent: "center",
  textAlign: "center",
});

const SaveButton = styled(Button)(({ theme }) => ({
  fontSize: "0.7rem",
  borderRadius: "1rem",
  color: theme.palette.mode === "dark" && theme.palette.common.white,
  cursor: "default",
}));

const Image = styled(Box)(({ theme }) => ({
  "& > img": {
    width: 40,
    height: 40,
    filter: theme.palette.mode === "dark" && "brightness(0) invert(1)",
  },
}));

const Discount = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontWeight: theme.typography.fontWeightMedium,
  position: "relative",
  "::after": {
    content: "''",
    width: "110%",
    height: "1.5px",
    backgroundColor: theme.palette.grey[700],
    position: "absolute",
    transform: "rotate(-17deg)",
    left: 0,
    top: "20%",
  },
}));

const CardFooter = styled(CardActions)({
  marginTop: "2rem",
  alignItems: "flex-end",
  height: "100%",
});

const PricingCard = ({ variant, title, featuresList, price, icon, save }) => {
  const theme = useTheme();

  const cardVariant = {
    new: {
      bageColor: theme.palette.red,
    },
    deal: {
      bageColor: theme.palette.primary.main,
      titleBackground: theme.palette.mode === "light" ? theme.palette.light.light : theme.palette.light.dark,
    },
  };

  const activeCardVariant = cardVariant[variant];

  const renderFeatures = featuresList?.map((feature, index) => <FeatureItem key={index}>{feature}</FeatureItem>);

  return (
    <CardContainer elevation={5}>
      <CardTitle cardVariant={activeCardVariant}>{title}</CardTitle>
      <CardBody>
        {variant && (
          <Bage cardVariant={activeCardVariant} variant="body1">
            {variant}
          </Bage>
        )}
        <Box>
          <PriceWrapper>
            <Typography component="span" fontSize={30}>
              €
            </Typography>
            <Typography component="p" fontSize={52} lineHeight={1.3}>
              {price}
            </Typography>
            {save && (
              <Discount component="span" fontSize={20}>
                €{save}
              </Discount>
            )}
          </PriceWrapper>
        </Box>
        {save && (
          <SaveButton variant="outlined" disableRipple>
            Save €{+save - +price}
          </SaveButton>
        )}
        {featuresList && <FeaturesList>{renderFeatures}</FeaturesList>}
        {icon && (
          <Image>
            <img src={icon} alt="Feature icon" />
          </Image>
        )}
        <CardFooter>
          <Button variant="contained">Get now</Button>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default PricingCard;
