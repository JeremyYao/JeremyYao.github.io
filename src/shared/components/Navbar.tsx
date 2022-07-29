import {
  AppBar,
  Box,
  IconButton,
  SxProps,
  Tabs,
  Tab,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

interface NavbarProps {
  navPages: string[];
  currentNavPageState: [string, React.Dispatch<React.SetStateAction<string>>];
  isDarkModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Navbar(props: NavbarProps) {
  const { navPages, currentNavPageState, isDarkModeState } = props;

  const [isDarkMode, setIsDarkMode] = isDarkModeState;
  const [currentNavPage, setCurrentNavPage] = currentNavPageState;
  const buttonsStyle: SxProps<Theme> = {
    color: isDarkMode ? "white" : "black",
  };

  return (
    <AppBar
      component="nav"
      sx={isDarkMode ? undefined : { background: "white" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            ...buttonsStyle,
            flexGrow: 1,
          }}
        >
          Jeremy Yao
        </Typography>

        <Box display={"flex"} sx={{ maxWidth: "69%" }}>
          <Tabs
            value={currentNavPage}
            onChange={(_event, newValue) => {
              setCurrentNavPage(newValue);
            }}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {navPages.map((item) => (
              <Tab label={item} value={item} key={`tab:${item}`} />
            ))}
          </Tabs>

          <IconButton
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
          >
            {isDarkMode ? (
              <DarkModeIcon sx={buttonsStyle} />
            ) : (
              <LightModeIcon sx={buttonsStyle} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
