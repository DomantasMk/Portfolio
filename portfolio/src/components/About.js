import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinksSection from "./LinksSection";
import Profile from "../assets/ProfilePic.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    height: "100vh",
    marginLeft: theme.spacing(10),
  },
  Box: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: 25,
  },
  introText: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    margin: theme.spacing(1),
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={classes.grid}
        alignContent="center"
      >
        <Grid item xs={6}>
          <Box className={classes.center}>
            <Box className={classes.Box}>
              <Box className={classes.introText}>Hello,</Box>
            </Box>
            <Box className={classes.Box}>
              <Box className={classes.introText}>I'm Domantas Mikelionis</Box>
            </Box>
            <Box className={classes.Box}>Fullstack Web developer</Box>
            <Box></Box>
            <LinksSection />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.box + classes.center}>
            <img
              src={Profile}
              alt="My Photo"
              height="500"
              style={{ borderRadius: 50 }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
