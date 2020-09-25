import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "3rem",
  },
  grid: {},
  Box: {},
  introText: {},
  center: {
    textAlign: "center",
  },
}));

export default function SkillsSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={6} className={classes.center}>
          <Box className={classes.center}>Front-end Development</Box>
          <Box>
            <ul>
              <li>React.js</li>
              <li>Webpack configuration</li>
              <li>Next.js (Server-side rendering/Static page rendering)</li>
              <li>Sass</li>
              <li>CSS frameworks such as Material-ui/Bootstrap</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.center}>
          <Box className={classes.center}>Back-end Development</Box>
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
        </Grid>
      </Grid>
    </Box>
  );
}
