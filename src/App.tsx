import { Box } from "@mui/material";
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
        padding="3%"
        justifyContent="center"
        bgcolor={"#23252C"}
      >
        <Box
          className="box-container"
          maxWidth={500}
          bgcolor={"#1A1B21"}
          borderRadius={2}
          overflow={"hidden"}
        >
          <Box
            width={"100%"}
            component="img"
            alt="A portrait picture of Jeremy Yao"
            src={headshotPic}
          />
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
