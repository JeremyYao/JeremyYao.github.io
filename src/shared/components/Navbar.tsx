import {
  AppBar,
  Box,
  Button,
  IconButton,
  SxProps,
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
  currentNavPage?: string;
  isDarkModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isMobile: boolean;
}

export default function Navbar(props: NavbarProps) {
  const { navPages, currentNavPage, isDarkModeState, isMobile } = props;
  const [isDarkMode, setIsDarkMode] = isDarkModeState;

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

        {/* // TODO: Set diplay to none if it's xs. If it's xs, show mobile version of navigation instead. */}
        <Box>
          {navPages.map((item) => (
            <Button
              key={item}
              sx={buttonsStyle}
              disabled={item === currentNavPage}
            >
              {item}
            </Button>
          ))}

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
