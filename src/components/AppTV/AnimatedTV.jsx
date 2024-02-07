// MUI
import { Box, styled } from "@mui/material";
// Assets
import block from "../../assets/animatedTV/tvBlock.png";
import controller from "../../assets/animatedTV/controller.png";
import emptyScreen from "../../assets/animatedTV/emptyScreen.png";
import tv from "../../assets/animatedTV/mainScreen.jpg";
import radio from "../../assets/animatedTV/radio.jpg";

const Wrapper = styled(Box)({
  position: "relative",
  perspective: "500px",
  height: 0,
  paddingBottom: "50%",
  marginBottom: "15px",
});

const EmptyScreen = styled(Box)({
  position: "absolute",
  top: 0,
  width: "74%",
  display: "flex",
  height: "99%",

  "::before": {
    content: "''",
    width: "100%",
    backgroundImage: `url(${emptyScreen})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "all 0.2s",
  },
});

const Screen = styled(Box)({
  "& > img": {
    objectFit: "contain",
    position: "absolute",
    width: "98.5%",
    height: "100%",
    transition: "all 0.3s",
    bottom: 0,
    left: "1%",
  },
  position: "absolute",
  background: "black",
  width: "98% !important",
  left: "2%",
  top: "8%",
  overflow: "hidden",
  paddingBottom: "56%",
});

const defaultBlockStyles = {
  objectFit: "contain",
  width: 75,
  position: "absolute",
  right: "35px",
  bottom: 0,
};

const defaultControllerStyles = {
  objectFit: "contain",
  width: 30,
  position: "absolute",
  right: "0px",
  bottom: 0,
  transition: "0.3s",
};

const AnimatedTV = () => {
  return (
    <Wrapper className="animatedTV">
      <Box padding="0 20px" position="absolute" sx={{ transition: "0.2s", width: "100%", height: "100%" }}>
        <EmptyScreen id="screen">
          <Screen>
            <img src={tv} alt="TV screen" id="tv" />
            <img src={radio} alt="Radio screen" style={{ transform: "translateY(100%)" }} id="radio" />
          </Screen>
        </EmptyScreen>
      </Box>
      <img src={block} alt="System block" style={defaultBlockStyles} />
      <img src={controller} alt="TV controller" style={defaultControllerStyles} id="controller" />
    </Wrapper>
  );
};

export default AnimatedTV;
