import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import AboutPage from "./aboutPage/AboutPage";
import {
  ABOUT_NAV_PAGE_NAME,
  DARK_MODE_BG_COLOR,
  DARK_MODE_CONTAINER_COLOR,
  LIGHT_MODE_BG_COLOR,
  NAV_PAGES,
} from "./constants";
import Footer from "./shared/components/Footer";
import Navbar from "./shared/components/Navbar";

export function App(): JSX.Element {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        isMobile={false}
        navPages={NAV_PAGES}
        isDarkModeState={isDarkModeState}
        currentNavPage={ABOUT_NAV_PAGE_NAME}
      />
      <Box paddingTop={"100px"}>
        <AboutPage isDarkMode={isDarkMode} />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
