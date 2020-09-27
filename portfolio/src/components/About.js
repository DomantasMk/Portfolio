import React, { useRef, useEffect, useContext } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinksSection from "./LinksSection";
import Profile from "../assets/ProfilePic.jpg";
import refContext from "../context/refContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    height: "100vh",
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  Box: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  introText: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
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
  photoItem: {
    height: 380,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
  [theme.breakpoints.up("xl")]: {
    height: 700,
  },
}));

export default function About() {
  const classes = useStyles();
  const { updateMap } = useContext(refContext);
  const rootEl = useRef(null);
  useEffect(() => {
    updateMap("AboutSection", rootEl);
  });
  return (
    <div className={classes.root} ref={rootEl}>
      <Grid
        container
        spacing={3}
        className={classes.grid}
        alignContent="center"
      >
        <Grid item xs={12} sm={12} md={7}>
          <Box className={classes.center}>
            <Box className={classes.Box}>
              <Box className={classes.introText}>Hello,</Box>
            </Box>
            <Box className={classes.Box}>
              <Box className={classes.introText}>I'm Domantas Mikelionis</Box>
            </Box>
            <Box className={classes.Box}>Fullstack Web developer</Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <LinksSection />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box className={classes.photoItem}>
            <img
              src={Profile}
              alt="My Photo"
              height="100%"
              style={{ borderRadius: 50 }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
