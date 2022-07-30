import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import AboutPage from "./aboutPage";
import {
  ABOUT_NAV_PAGE_NAME,
  DARK_MODE_BG_COLOR,
  DARK_MODE_CONTAINER_COLOR,
  LIGHT_MODE_BG_COLOR,
  NAV_PAGES,
  HOME_NAV_PAGE_NAME,
  PORTFOLIO_NAV_PAGE_NAME,
} from "./constants";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";
import ErrorPage from "./errorPage";

const renderPage = (currentNavPage: string): JSX.Element => {
  switch (currentNavPage) {
    case ABOUT_NAV_PAGE_NAME:
      return <AboutPage />;
    case HOME_NAV_PAGE_NAME:
      return <ErrorPage />;
    case PORTFOLIO_NAV_PAGE_NAME:
      return <ErrorPage />;
    default:
      return <ErrorPage />;
  }
};

export function App(): JSX.Element {
  // ************************** DARK MODE STUFF **************************
  const IS_DARK_MODE_LOCAL_STORAGE_KEY: string = "isDarkMode";
  // Behavior:
  // If user has never visited site, set the darkmode state to whatever's set on the user's system
  // Otherwise, retrieve the value from last time the user was on the site.
  const isDarkModeState = React.useState<boolean>(
    JSON.parse(
      localStorage.getItem(IS_DARK_MODE_LOCAL_STORAGE_KEY) ||
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "true"
          : "false")
    ) as boolean
  );
  const [isDarkMode] = isDarkModeState;
  // Load locally stored darkmode setting
  // If isDarkMode is changed, reflect change in localstorage.

  React.useEffect(() => {
    localStorage.setItem(IS_DARK_MODE_LOCAL_STORAGE_KEY, isDarkMode.toString());
  }, [isDarkMode]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode
        ? {
            background: {
              default: DARK_MODE_BG_COLOR,
              paper: DARK_MODE_CONTAINER_COLOR,
            },
          }
        : {
            background: {
              default: LIGHT_MODE_BG_COLOR,
            },
          }),
    },
  });
  // ************************** DARK MODE STUFF **************************

  // ************************* WHAT PAGE THE USER IS ON *************************
  const currentNavPageState = React.useState<string>(ABOUT_NAV_PAGE_NAME); // Store initial value in localStorage or something................
  const [currentNavPage] = currentNavPageState;
  // ************************* WHAT PAGE THE USER IS ON *************************

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box position={"relative"} minHeight={"100vh"}>
        <Navbar
          navPages={NAV_PAGES}
          isDarkModeState={isDarkModeState}
          currentNavPageState={currentNavPageState}
        />
        <Box
          className="main-content-container"
          display={"flex"}
          paddingTop={"100px"}
          paddingBottom={"4.5rem"}
          minHeight={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          {renderPage(currentNavPage)}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
