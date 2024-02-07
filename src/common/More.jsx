// MUI
import { Box, Stack, Typography, keyframes, styled } from "@mui/material";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

const infiniteAnim = keyframes`
  0%{
    transform: translateY(-100%)
  }
  100%{
    transform: translateY(120%)
  }
`;

const MoreWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "0.625rem 0",
});

const MoreParagraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const ArrowDownIcon = styled(ExpandMoreSharpIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& path": {
    animation: `${infiniteAnim} 1s ${theme.transitions.easing.easeInOut} infinite`,
  },
}));

const More = ({ section = "benefits" }) => {
  const onScroll = () => {
    const scrollTo = document.getElementById(section);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MoreWrapper>
      <Stack onClick={onScroll} sx={{ cursor: "pointer" }} alignItems="center">
        <MoreParagraph component="p" variant="subtitle1">
          Check out more
        </MoreParagraph>
        <ArrowDownIcon fontSize="large" />
      </Stack>
    </MoreWrapper>
  );
};

export default More;
