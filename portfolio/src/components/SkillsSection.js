import React, { useRef, useEffect, useContext } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import refContext from "../context/refContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "3rem",
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
    },
  },
  center: {
    textAlign: "center",
  },
  rootSkillBox: {
    padding: theme.spacing(2),
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    width: "100%",
    textAlign: "center",
  },
  header: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    paddingTop: 50,
    paddingBottom: 50,
    fontWeight: "bold",
  },
}));

export default function SkillsSection() {
  const classes = useStyles();
  const { updateMap } = useContext(refContext);
  const rootEl = useRef(null);
  useEffect(() => {
    updateMap("SkillsSection", rootEl);
  });
  return (
    <Box className={classes.root} ref={rootEl}>
      <Box className={classes.header}>Relevant Skills</Box>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} md={6} lg={4} className={classes.center}>
          <Box boxShadow={2} className={classes.rootSkillBox}>
            <Box className={classes.title}>Front-end Development</Box>
            <Box>
              <ul>
                <li>React.js</li>
                <li>Webpack configuration</li>
                <li>Next.js</li>
                <li>Server-side rendering/Static page rendering</li>
                <li>Sass</li>
                <li>Material-ui/Bootstrap</li>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.center}>
          <Box boxShadow={2} className={classes.rootSkillBox}>
            <Box className={classes.title}>Back-end Development</Box>
            <Box>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL/NoSQL databases</li>
                <li>REST standard</li>
                <li>GraphQL standard</li>
                <li>.NET technologies</li>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.center}>
          <Box boxShadow={2} className={classes.rootSkillBox}>
            <Box className={classes.title}>Other Skills</Box>
            <Box>
              <ul>
                <li>Agile methodologies</li>
                <li>Git version control</li>
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
