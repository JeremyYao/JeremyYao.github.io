import { Box, Typography } from "@mui/material";
import { UNIV_BOX_BORDER_RADIUS } from "../constants";

interface AboutPageProps {}

function ErrorPage(props: AboutPageProps) {
  const VIDEO_WIDTH: number = 90;
  /*
    Want image to be centered, taking up half of screen. 
  */
  return (
    <Box
      className="about-page"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      padding={"5%"}
    >
      <Box>
        <Box display="flex" justifyContent="center" marginBottom={4}>
          <Typography variant="h6" component={"h1"}>
            This page has not been made yet
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          className="box-container"
          height={`${(VIDEO_WIDTH * 9) / 16}vmin`}
          width={`${VIDEO_WIDTH}vmin`} // 16:9
          bgcolor={"background.paper"}
          borderRadius={UNIV_BOX_BORDER_RADIUS}
          overflow={"hidden"}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/bnmAi53H520`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ErrorPage;
