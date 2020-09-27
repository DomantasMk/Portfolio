import React, { useRef, useEffect, useContext } from "react";
import Box from "@material-ui/core/Box";
import refContext from "../context/refContext";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1rem",
    padding: "0.5rem",
    width: "auto",
  },
  text: {
    margin: "0.5rem",
    fontWeight: "bold",
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
}));

const ContactMeSection = () => {
  const { updateMap } = useContext(refContext);
  const rootEl = useRef(null);
  useEffect(() => {
    updateMap("ContactSection", rootEl);
  });
  const classes = useStyles();

  return (
    <Box className={classes.root} ref={rootEl} boxShadow={4}>
      <p>Want to contact me? Reach me at:</p>
      <Box className={classes.text}>Domantas.Mikelionis@gmail.com</Box>
    </Box>
  );
};

export default ContactMeSection;
