import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © MUI / Alice Bryer "}
      <Link color="inherit" href="https://mui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <div className="icon-containers">
        <a
          href="https://github.com/AliceBryer"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/alicebryer123/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </a>
        <a
          href="https://twitter.com/alicebryer1"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        </a>
      </div>
      <Container maxWidth="sm">
        <Typography variant="body1"></Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
export default Footer;
