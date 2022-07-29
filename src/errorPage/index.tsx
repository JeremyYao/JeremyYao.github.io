import { Box } from "@mui/material";

interface AboutPageProps {}

function ErrorPage(props: AboutPageProps) {
  /*
    Want image to be centered, taking up half of screen. 
  */
  return (
    <Box
      className="about-page"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        className="box-container"
        height={420}
        width={"56.25%"} // 16:9
        bgcolor={"background.paper"}
        borderRadius={4}
        overflow={"hidden"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <iframe
          height={"100%"}
          width={"100%"}
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />{" "}
      </Box>
    </Box>
  );
}

export default ErrorPage;
