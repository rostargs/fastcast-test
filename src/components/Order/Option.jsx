// React
import { useCallback, useState } from "react";
// MUI
import { Grid, Stack, Box, styled, Typography } from "@mui/material";
// Assets
import dot from "../../assets/dot.webp";
// Components
import OptionItem from "./OptionItem";

const TitleWrapper = styled(Box)({
  width: "100%",
  backgroundImage: `url(${dot})`,
  backgroundRepeat: "repeat-x",
  backgroundPosition: "center",
});

const OptionTitle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  ...theme.typography.h5,
  fontWeight: theme.typography.fontWeightPreBold,
  textTransform: "capitalize",
  margin: "40px 0",
  padding: "1rem ",
  backgroundColor: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.background.default,
}));

const Option = ({ title, isMultiOptions, packages }) => {
  const [validateOptions, setValidateOptions] = useState(() =>
    packages.reduce((acc, item) => {
      acc[item.title] = false;
      return acc;
    }, {})
  );

  const gridColumnLength = 12 / packages.length;

  const onSelectOption = useCallback((option) => {
    setValidateOptions((prev) => {
      if (isMultiOptions) {
        return {
          ...prev,
          [option]: !prev[option],
        };
      } else {
        const state = Object.keys(prev).reduce((acc, item) => {
          acc[item] = false;
          return acc;
        }, {});
        return { ...state, [option]: !prev[option] };
      }
    });
  }, []);

  return (
    <Stack>
      <TitleWrapper>
        <OptionTitle>{title}</OptionTitle>
      </TitleWrapper>
      <Grid container spacing={{ md: 1, xs: 0 }}>
        {packages.map((item) => (
          <Grid item xs={12} md={gridColumnLength} key={item.title} padding={{ md: 1, xs: "1rem 0" }}>
            <OptionItem {...item} onSelectOption={onSelectOption} isActive={validateOptions[item.title]} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Option;
