import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ProjectLinks from "./ProjectLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  grid: {
    minHeight: "25vh",
  },
  Box: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    color: theme.palette.text.secondary,
    fontSize: 20,
  },
  BoxPhotos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(5),
    height: "80%",
  },
  title: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
  },
  paragraph: {},
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Project({ projectInfo }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {projectInfo ? (
        <Grid
          container
          spacing={3}
          className={classes.grid}
          alignContent="center"
        >
          <Grid
            item
            xs={12}
            md={5}
            style={{
              borderRight: "1px solid #F5F5F5",
            }}
          >
            <Box className={classes.BoxPhotos}>
              {projectInfo.images.map((image) => (
                <img
                  src={image}
                  alt="ProjectImage"
                  key={image}
                  height="100%"
                  style={{ marginRight: "0.5rem" }}
                />
              ))}
            </Box>

            {projectInfo.liveLink ? (
              <ProjectLinks
                repoLink={projectInfo.codeRepoLink}
                liveLink={projectInfo.liveLink}
              />
            ) : (
              <ProjectLinks
                repoLink={projectInfo.codeRepoLink}
                liveLink={""}
                disabledLive={true}
              />
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className={classes.Box}>
              <Box className={classes.title}>{projectInfo.title}</Box>
              <p className={classes.introText}>{projectInfo.description}</p>
              <Box className={classes.title}>Technologies used</Box>
              <ul className={classes.introText}>
                {projectInfo.technologies.map((string) => (
                  <li key={string}>{string}</li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      ) : null}
    </Box>
  );
}
