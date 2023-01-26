import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where did you learn to code?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As a self-taught programmer, I have taught myself how to code through a combination of online tutorials, and open-source projects. I have had to be highly self-motivated and disciplined in order to learn the necessary skills on my own.
          I am proud to be a self-taught programmer and look forward to continuing to develop my skills and knowledge in the field.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What was your biggest challenge?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          One of the biggest challenges is the lack of structure and guidance that comes with not having a formal education. It can be difficult to know where to start and what resources to use.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the thing you like the most about code?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For me, it's the problem-solving part. There are countless ways to solve a problem. But finding the most efficient one, that's the real game.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Where do you se yourself in 5 years?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I am constantly thinking about the future of the industry and how I can stay ahead of the curve. I believe that the field of programming is constantly evolving, with new languages, technologies, and methodologies being developed all the time. To stay relevant, I make sure to stay up-to-date with the latest advancements and trends in the field.
          Furthermore, I believe that the demand for programmers will continue to increase in the coming years, as more and more industries and businesses rely on technology. This creates a lot of opportunities for me as a programmer, and I am excited to see where my skills will take me in the future.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are you working at a full time job?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Currently I'm not. But I'm looking forward to starting as soon as possible, and starting to learn more and more. Maybe you can help me :)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
