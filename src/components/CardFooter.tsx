import { Download } from "@mui/icons-material";
import { Box, Button, SxProps, Theme } from "@mui/material";

export default function CardFooter() {
  const buttonStyleOverride: SxProps<Theme> | undefined = {
    textTransform: "none",
  };

  return (
    <Box
      paddingTop={3}
      paddingBottom={3}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#161619"}
    >
      <Button
        href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        sx={buttonStyleOverride}
        size="large"
        startIcon={<Download />}
        variant="contained"
      >
        Download my resume here
      </Button>
    </Box>
  );
}
