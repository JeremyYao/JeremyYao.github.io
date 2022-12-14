import { Box, Typography } from "@mui/material";
import aboutInfoJSON from "./aboutInfo.json";

type DataObject = [title: string, content: string][];

export default function AboutSection() {
  const aboutInfo: DataObject = aboutInfoJSON as DataObject;
  const aboutSections: JSX.Element[] = aboutInfo.map(([title, content]) => {
    return (
      <Box
        className="box-about-section"
        paddingTop={2}
        key={`box:${title}:${content}`}
      >
        <Typography
          gutterBottom={true}
          variant="h5"
          component={"h2"}
          key={`h2:${title}`}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom={true}
          variant="body1"
          component={"p"}
          key={`p:${content}`}
        >
          {content}
        </Typography>
      </Box>
    );
  });
  return <Box className="box-about-container">{aboutSections}</Box>;
}
