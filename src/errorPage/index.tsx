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
        height={500}
        width={"56.25%"} // 16:9
        bgcolor={"background.paper"}
        borderRadius={4}
        overflow={"hidden"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Box>
    </Box>
  );
}

export default ErrorPage;
