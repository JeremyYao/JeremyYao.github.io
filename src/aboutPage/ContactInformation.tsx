import { Email, GitHub, LinkedIn, Download } from "@mui/icons-material";
import { Box, Button, Link, SxProps, Theme, Typography } from "@mui/material";
import { WEBSITE_URL_FULL, WEBSITE_URL_SHORT } from "../constants";
import ResumePDF from "./jeremy_yao_resume_2024_Q3_PUBLIC.pdf";

export default function ContactInformation() {
  const buttonStyleOverride: SxProps<Theme> | undefined = {
    textTransform: "none",
    margin: 1,
  };

  return (
    <Box className="box-contact">
      <Typography
        component={"h1"}
        variant={"h3"}
        gutterBottom={true}
        align={"center"}
      >
        Jeremy Yao
      </Typography>
      <Typography
        component={"p"}
        variant={"subtitle1"}
        gutterBottom={true}
        align={"center"}
      >
        <Link variant={"subtitle1"} gutterBottom={true} href={WEBSITE_URL_FULL}>
          {WEBSITE_URL_SHORT}
        </Link>
      </Typography>

      <Box
        className={"box-primary-scontacts"}
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
      >
        <Button
          href="mailto:jeremy.yao.info@gmail.com"
          sx={buttonStyleOverride}
          size="large"
          startIcon={<Email />}
          variant="outlined"
        >
          Email
        </Button>
        <Button
          href={"https://www.linkedin.com/in/jeremy-yao"}
          sx={{ ...buttonStyleOverride }}
          size="large"
          startIcon={<LinkedIn />}
          variant="outlined"
        >
          LinkedIn
        </Button>
        <Button
          href={"https://github.com/JeremyYao"}
          sx={buttonStyleOverride}
          size="large"
          startIcon={<GitHub />}
          variant="outlined"
        >
          GitHub
        </Button>
        <Button
          href={ResumePDF}
          download="jeremy_yao_resume_PUBLIC.pdf"
          target="_blank"
          sx={buttonStyleOverride}
          size="large"
          startIcon={<Download />}
          variant="outlined"
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
}
