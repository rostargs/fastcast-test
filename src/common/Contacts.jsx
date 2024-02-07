// MUI
import { Button, ButtonGroup, Container, styled, Box, Stack, IconButton, Tooltip } from "@mui/material";
//MUI Icons
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ContactContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ContactButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  border: "none",
  gap: "0.5rem",
  borderRadius: "0.25rem",
  textTransform: "capitalize",
  "& > svg": {
    width: 20,
    height: 20,
  },
  ":hover": {
    border: "none",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "inherit",
  },
}));

const CompanyLogo = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: `all ${theme.transitions.duration.short}`,
  ":hover": {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.dark,
  },
}));

const socialIcons = [
  {
    title: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    title: "YouTube",
    icon: <YouTubeIcon />,
  },
  {
    title: "Linkedin",
    icon: <LinkedInIcon />,
  },
  {
    title: "Twitter",
    icon: <TwitterIcon />,
  },
  { title: "Instagram", icon: <InstagramIcon /> },
];

const Contacts = () => {
  const renderSocialIcons = socialIcons.map((icon) => {
    return (
      <Tooltip title={icon.title} key={icon.title} aria-label={icon.title}>
        <CompanyLogo>{icon.icon}</CompanyLogo>
      </Tooltip>
    );
  });

  return (
    <ContactWrapper>
      <ContactContainer maxWidth={"xl"}>
        <ButtonGroup>
          <ContactButton>
            <CallIcon />
            +1 (844) 203-2278
          </ContactButton>
          <ContactButton>
            <ChatIcon />
            Open Chat
          </ContactButton>
        </ButtonGroup>
        <Stack direction="row">{renderSocialIcons}</Stack>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contacts;
