// MUI
import { Container, Grid } from "@mui/material";
// Common
import PricingCard from "../../common/PricingCard";
// Utils
import { pricingItems } from "../../utils/pricingItems";

const Pricing = () => {
  return (
    <Container maxWidth="xl" component="section">
      <Grid container spacing={2} justifyContent="center" padding="1.5rem 0 3.5rem 0">
        {pricingItems.map((item) => {
          return (
            <Grid item key={item.title} lg={3} md={6} xs={12}>
              <PricingCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Pricing;
