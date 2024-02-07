// MUI
import { Box, styled, Stack, Typography, Container, Button } from "@mui/material";
// Assets
import googlePlay from "../../assets/googlePlay.webp";
import appStore from "../../assets/appStore.png";
import amazon from "../../assets/amazon.png";

const DownloadWrapper = styled(Box)({
  padding: "2rem 0",
  margin: "1rem 0",
});

const DownloadTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "capitalize",
  textAlign: "center",
}));

const downloadImages = [googlePlay, appStore, amazon];

const Download = () => {
  return (
    <DownloadWrapper component="section">
      <Container maxWidth="xl">
        <Stack padding="2rem 0 4rem 0" alignItems="center">
          <DownloadTitle component="h4" variant="h4">
            Download Demo App
          </DownloadTitle>
          <Stack direction="row" paddingTop={6} gap={3} flexWrap="wrap" justifyContent="center">
            {downloadImages.map((image, index) => {
              return (
                <Button key={index} sx={{ color: "common.black" }}>
                  <img src={image} alt="Download image" style={{ maxHeight: 56 }} />
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </DownloadWrapper>
  );
};

export default Download;
