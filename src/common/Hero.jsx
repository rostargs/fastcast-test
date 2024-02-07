// MUI
import { Grid, Stack, Typography, Button, styled } from "@mui/material";
// Assets
import rokuTV from "../assets/rokuTV.webp";
import appTV from "../assets/heroTVPicture.webp";

const HeroWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.defaultDark,
  placeContent: "center",
  padding: "80px 16px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "1.75rem",
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightPreBold,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "6px 2rem",
  },
}));

const Hero = ({ page }) => {
  const pageVariants = {
    appTV: {
      image: appTV,
      info: (
        <Typography component="h1" variant="h3" color="common.white">
          Create Your Own Radio App for Android TV, Amazon Fire TV & Apple TV
        </Typography>
      ),
    },
    rokuTV: {
      image: rokuTV,
      info: (
        <>
          <Typography component="h1" variant="h3" color="common.white">
            Create Your Own Roku TV Channel
          </Typography>
          <Typography component="h4" variant="h4" color="common.white">
            Your Radio & TV Stream on ROKU TV
          </Typography>
        </>
      ),
    },
  };

  const { image, info } = pageVariants[page];

  return (
    <HeroWrapper container component="section" gap={2}>
      <Grid item xs>
        <Stack justifyContent="center" alignItems="center" height="100%" spacing={4} textAlign="center">
          {info}
          <Stack direction="row" spacing={2}>
            <HeroButton variant="contained">Order now</HeroButton>
            <HeroButton variant="contained">See more</HeroButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs>
        <img src={image} alt={page} style={{ width: "100%" }} />
      </Grid>
    </HeroWrapper>
  );
};

export default Hero;
