// React
import { useState } from "react";
// MUI
import {
  Stack,
  Container,
  Typography,
  styled,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Utils
import { accordionInfo } from "../../utils/accordionInfo";

const SpecificationsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  textAlign: "center",
}));

const SpecificationsAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" && theme.palette.light.primary,
  boxShadow: theme.shadows[4],
  borderRadius: 0,
}));

const SpecificationsParagraph = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.mode === "dark" ? theme.palette.light.secondary : theme.palette.light.main,
  fontWeight: theme.typography.fontWeightMedium,
}));

const Specifications = () => {
  const [activePanel, setActivePanel] = useState("panel0");

  const onTogglePanel = (panel) => (_, isExpanded) => {
    setActivePanel(isExpanded ? panel : false);
  };

  const renderAccordion = accordionInfo.map((info, index) => {
    return (
      <SpecificationsAccordion
        variant="outlined"
        key={index}
        expanded={activePanel === `panel${index}`}
        onChange={onTogglePanel(`panel${index}`)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="h5" variant="h5">
            {info.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="p" dangerouslySetInnerHTML={info} variant="body1" />
        </AccordionDetails>
      </SpecificationsAccordion>
    );
  });

  return (
    <Container maxWidth="xl" component="section">
      <Stack padding="2rem 0" spacing={1}>
        <SpecificationsTitle component="h2" variant="h4">
          Product Specifications
        </SpecificationsTitle>
        <SpecificationsParagraph component="p" variant="h6">
          Features available for your TV Applications
        </SpecificationsParagraph>
        <Box component="article" width="100%" paddingTop={2}>
          {renderAccordion}
        </Box>
      </Stack>
    </Container>
  );
};

export default Specifications;
