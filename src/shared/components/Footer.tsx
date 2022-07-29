import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      marginTop={"3%"}
      padding={"1.5%"}
      bgcolor={"background.paper"}
    >
      <Typography gutterBottom={true} variant="caption" component={"p"}>
        This website is still in progress.
      </Typography>
    </Box>
  );
}
