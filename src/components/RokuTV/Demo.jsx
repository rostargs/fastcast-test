// MUI
import { Button, Container, Stack, Box, Typography, styled } from "@mui/material";
// Assets
import rokuLogo from "../../assets/rokuTVLogo.png";

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.light.contrastText : theme.palette.light.main,
  paddingBottom: 24,
}));

const ImageButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.light.main,
  borderRadius: "0.75rem",
  padding: "0 1rem",
  "& > img": {
    maxHeight: 56,
  },
}));

const ACCESS_CODE = "9G9J292";

const Demo = () => {
  return (
    <Container maxWidth="xl" component="section">
      <Stack textAlign="center" paddingBottom={5}>
        <Typography component="h4" variant="h4" padding="80px 0 24px 0">
          Demo Roku TV Channel
        </Typography>
        <Subtitle>
          Enter Vanity access code: {ACCESS_CODE} on your Roku TV to activate or Click to Add to Your Roku Channels:
        </Subtitle>
        <Box>
          <ImageButton variant="outlined">
            <img src={rokuLogo} alt="Roku TV logo" />
          </ImageButton>
        </Box>
      </Stack>
    </Container>
  );
};

export default Demo;
