import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      position={"absolute"}
      bottom={0}
      width={"100%"}
      height={"2.5rem"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"background.paper"}
    >
      <Typography gutterBottom={true} variant="caption" component={"p"}>
        This website is still a work in progress.
      </Typography>
    </Box>
  );
}
