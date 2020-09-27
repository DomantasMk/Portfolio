import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import refContext from "../context/refContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: { background: "transparent", boxShadow: "none" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { refMap } = useContext(refContext);

  const scrollTo = (elementKeyInRefMap) => {
    window.scrollTo(0, refMap.get(elementKeyInRefMap).current.offsetTop);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Domantas Mikelionis
          </Typography>
          <Button color="inherit" onClick={() => scrollTo("AboutSection")}>
            About
          </Button>
          <Button color="inherit" onClick={() => scrollTo("ProjectsSection")}>
            Portfolio
          </Button>
          <Button color="inherit" onClick={() => scrollTo("SkillsSection")}>
            Skills
          </Button>
          <Button color="inherit" onClick={() => scrollTo("ContactSection")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
