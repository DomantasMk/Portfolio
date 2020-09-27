import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import MyPDF from "../assets/Domantas_Mikelionis_CV.pdf";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: { background: "transparent", boxShadow: "none" },
  gridColumn: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  },
  buttonStyle: { width: "100%", minWidth: "210px", maxWidth: "300px" },
}));

const LinksSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2} className={classes.gridColumn}>
        <Grid item xs={12} md={6} lg={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            className={classes.buttonStyle}
            href="https://github.com/DomantasMk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Repository
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.buttonStyle}
            href="https://www.linkedin.com/in/domantas-mikelionis-36aa84172/"
            startIcon={<LinkedInIcon />}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.buttonStyle}
            startIcon={<GetAppIcon />}
            href={MyPDF}
            download="Domantas_Mikelionis_CV.pdf"
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LinksSection;
