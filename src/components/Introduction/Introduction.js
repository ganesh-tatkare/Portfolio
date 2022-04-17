import React from "react";
import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";
import { LottieAnimation } from "components/LottieAnimation";
import codeTime from "assets/Lottie/codeTime";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Introduction = () => {
  return (
    <Grid container spacing={2} style={Styles.intro}>
      <Grid item xs={12} md={6} style={Styles.leftIntro}>
        <Fade left cascade>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Hi, I am Ganesh
          </Typography>
          <Typography variant="h5">
            A passionate Frontend Developer 🚀 having an experience of building
            Web and Mobile applications with JavaScript / Reactjs / Nodejs /
            React Native and some other cool libraries and frameworks.
          </Typography>
          <Grid container spacing={0}>
            <Grid item>
              <IconButton>
                <GitHubIcon fontSize="large" sx={Styles.githubIcon} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <LinkedInIcon fontSize="large" sx={Styles.linkedInIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
      <Grid item xs={12} md={6}>
        <Fade right cascade>
          <div style={Styles.animationContainer}>
            <LottieAnimation
            width={300}
              animationData={codeTime}
            />
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};

const Styles = {
  intro: {
    width: "90%",
    margin: "auto",
    maxWidth: "1260px",
    marginTop: "50px",
  },
  githubIcon: {
    color: "#9e9e9e",
    "&:hover": { color: "#e4aa48" },
  },
  linkedInIcon: {
    color: "#0e76a8",
    "&:hover": { color: "#e4aa48" },
  },
  animationContainer:{
    maxWidth:"100%"
  }
};

export default Introduction;
