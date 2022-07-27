import { Box } from "@mui/material";
import { Image } from "mui-image";
import React from "react";
import headshotPic from "./images/headshot.jpg";
import ContactInformation from "./components/ContactInformation";
import About from "./components/About";
import CardFooter from "./components/CardFooter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  /*
    Want image to be centered, taking up half of screen. 
  */
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        className="App"
        display="flex"
        alignItems={"center"}
        padding="5%"
        justifyContent="center"
        bgcolor={"#23252C"}
      >
        <Box
          className="box-container"
          maxWidth={"42.69%"}
          minWidth={"400px"}
          bgcolor={"#1A1B21"}
          borderRadius={2}
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
            <CardFooter />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
