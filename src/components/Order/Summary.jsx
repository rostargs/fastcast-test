// MUI
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box,
  Stack,
  styled,
  Divider,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// MUI Icons
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";

const SummaryCard = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? theme.palette.border.main : theme.palette.light.dark}`,
  backgroundColor: theme.palette.mode === "dark" && theme.palette.border.light,
  backgroundImage: "none",
  position: "sticky",
  top: "40px",
}));

const SummaryTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.mode === "light" && theme.palette.grey[800],
  fontWeight: theme.typography.fontWeightPreBold,
  padding: "1rem",
}));

const ProductTitle = styled(TableCell)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.mode === "light" && theme.palette.grey[700],
  padding: "10px 0 10px 15px",
}));

const ProductPrice = styled(TableCell)(({ theme }) => ({
  ...theme.typography.body1,
  padding: "10px 15px",
  fontWeight: theme.typography.fontWeightPreBold,
  textAlign: "end",
}));

const Wrapper = styled(Box)({
  padding: "15px",
});

const Discount = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  textDecoration: "line-through",
  marginRight: 2,
}));

const StageTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: theme.typography.fontWeightPreBold,
}));

const plans = [
  {
    label: "Monthly",
  },
  {
    label: "12 Months",
  },
  {
    label: "24 Months",
  },
];

const Summary = () => {
  const [activePlan, setActivePlan] = useState("Monthly");

  const onSelectPlan = (plan) => {
    setActivePlan(plan);
  };

  return (
    <SummaryCard>
      <SummaryTitle component="h6" variant="h6">
        ORDER SUMMARY
      </SummaryTitle>
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <ProductTitle>Radio Server - Everest Cast (128kbps)</ProductTitle>
            <ProductPrice>$25.00</ProductPrice>
          </TableRow>
        </TableBody>
      </Table>
      <Divider />
      <Wrapper>
        <Box paddingBottom={2}>
          <StageTitle>Billing Cycle:</StageTitle>
          <FormControl>
            {plans.map((plan) => (
              <FormControlLabel
                id={plan.label}
                label={plan.label}
                checked={activePlan === plan.label}
                control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} />}
                onChange={() => setActivePlan(plan.label)}
                key={plan.label}
              />
            ))}
          </FormControl>
        </Box>
        <Divider />
        <Stack direction="row" justifyContent="space-between" padding="10px 0">
          <StageTitle>Total due today:</StageTitle>
          <Box display="flex">
            <Discount variant="body1" component="span">
              $199.00
            </Discount>
            <StageTitle>$25.00</StageTitle>
          </Box>
        </Stack>
        <Divider />
        <form style={{ padding: "10px 0" }}>
          <InputLabel htmlFor="promocode">Promocode:</InputLabel>
          <Box marginTop={1}>
            <FormControl sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", gap: "1rem" }}>
              <TextField id="promocode" hiddenLabel variant="outlined" placeholder="Promocode" size="small" fullWidth />
              <Button variant="contained">Apply</Button>
            </FormControl>
          </Box>
        </form>
      </Wrapper>
      <Divider />
      <Stack padding="15px" direction="row" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" fontSize="3rem" gap={1}>
          <CurrencyExchangeRoundedIcon fontSize="inherit" sx={{ color: "primary.main" }} />
          <Typography variant="body2" component="p">
            10-Day Money Back Guarantee
          </Typography>
        </Box>
        <Button variant="contained">Continue</Button>
      </Stack>
    </SummaryCard>
  );
};

export default Summary;
