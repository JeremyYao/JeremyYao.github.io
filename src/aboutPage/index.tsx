import { Box } from "@mui/material";
import { Image } from "mui-image";
import headshotPic from "./headshot.jpg";
import ContactInformation from "./ContactInformation";
import About from "./About";
import { UNIV_BOX_BORDER_RADIUS } from "../constants";

function AboutPage() {
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
        className="box-container"
        maxWidth={"42.69%"}
        minWidth={"400px"}
        bgcolor={"background.paper"} // TODO: Change this
        borderRadius={UNIV_BOX_BORDER_RADIUS}
        overflow={"hidden"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Image src={headshotPic} duration={1000} />
        <Box
          className="box-business-card-info"
          marginTop={4}
          justifyContent="center"
        >
          <Box paddingRight={4} paddingLeft={4} paddingBottom={4}>
            <ContactInformation />
            <About />
          </Box>
          {/* <CardFooter /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
