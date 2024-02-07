// React
import { useEffect, useRef, useState } from "react";
// MUI
import { Container, Grid, List, ListItem, Slide, Typography, styled, Stack } from "@mui/material";

const BenefitsContainer = styled(Container)({
  ":hover > div > div > div > .animatedTV  #controller": {
    transform: "translate(-40px, -30px) rotate3d(1,0,0, 50deg)",
  },
  ":hover > div > div > div > .animatedTV > div > div > div  > #tv": {
    transform: "translateY(-100%) ",
  },
  ":hover > div > div > div > .animatedTV > div > div > div > #radio": {
    transform: "translateY(0) !important",
  },
});

const BenefitsTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const BenefitsList = styled(List)(({ theme }) => ({
  padding: "1rem 0 0 1rem",
  [theme.breakpoints.down("md")]: {
    padding: "1rem 0 0 0",
  },
}));

const BenefitItem = styled(Typography)(({ theme }) => ({
  display: "list-item",
  listStyleType: "disc",
  listStylePosition: "outside",
  width: "100%",
  "& > b": {
    fontWeight: theme.typography.fontWeightPreBold,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    listStyleType: "none",
    textAlign: "center",
  },
}));

const Benefits = ({ info, contentWidth = 6, children }) => {
  const [onView, setOnView] = useState(false);
  const benefitsRef = useRef(null);

  const renderBenefitItems = info.benefits.map((benefit, index) => (
    <ListItem key={index} disablePadding>
      <BenefitItem dangerouslySetInnerHTML={benefit} component="span" variant="h6" />
    </ListItem>
  ));

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      setOnView(true);
    }
  };

  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, option);

    observer.observe(benefitsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <BenefitsContainer maxWidth="xl" component="section" ref={benefitsRef} id="benefits">
      <Grid container pt={10} pb={5} flexDirection={{ xs: "column-reverse", md: "row" }} spacing={2}>
        <Grid item lg={contentWidth} md={6} xs={12} pl={2}>
          <BenefitsTitle variant="h4" component="h2">
            {info.title}
          </BenefitsTitle>
          <BenefitsList>{renderBenefitItems}</BenefitsList>
        </Grid>
        <Grid item lg={12 - contentWidth} md={6} xs={12} minHeight={350}>
          <Slide in={onView} direction="left" timeout={{ enter: 900 }}>
            <Stack justifyContent="center" width="100%" height="100%">
              {children}
            </Stack>
          </Slide>
        </Grid>
      </Grid>
    </BenefitsContainer>
  );
};

export default Benefits;
