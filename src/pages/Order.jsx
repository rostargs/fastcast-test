// MUI
import { Container, Grid, Typography, Stack, styled } from "@mui/material";
// Components
import AbilityItem from "../components/Order/AbilityItem";
import Summary from "../components/Order/Summary";
import Option from "../components/Order/Option";
// Utils
import { abilitiesList } from "../utils/abilitiesList";
import { orderPackages } from "../utils/orderPackages";

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  paddingTop: 8,
  color: theme.palette.mode === "light" ? theme.palette.light.main : theme.palette.light.contrastText,
}));

const Order = () => {
  return (
    <Container maxWidth="xxl">
      <Grid container marginBottom={4} marginTop={4} gap={{ xs: 3, lg: 1 }}>
        <Grid item md textAlign="center" xs={12}>
          <Stack paddingBottom={5}>
            <Title component="h1" variant="h4">
              Build the Server Package that's right for you in 3 Easy Steps
            </Title>
            <Subtitle component="h5" variant="h5">
              Create Your Own Radio Server Package in 3 Easy Steps
            </Subtitle>
          </Stack>
          <Grid container spacing={{ md: 1, xs: 0 }}>
            {abilitiesList.map((ability) => (
              <Grid item xs={12} md={6} xl={4} padding={{ md: 1, xs: "0.5rem 0" }} key={ability.title}>
                <AbilityItem {...ability} />
              </Grid>
            ))}
          </Grid>
          {orderPackages.map((item) => (
            <Option {...item} key={item.title} />
          ))}
        </Grid>
        <Grid item lg={3.3} xs={12}>
          <Summary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
