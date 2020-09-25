import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import MyPDF from "../assets/Domantas_Mikelionis_CV.pdf";

const LinksSection = () => {
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GitHubIcon />}
        style={{ marginRight: 10, marginTop: 10 }}
        href="https://github.com/DomantasMk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code Repository
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginRight: 10, marginTop: 10 }}
        href="https://www.linkedin.com/in/domantas-mikelionis-36aa84172/"
        startIcon={<LinkedInIcon />}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: 10 }}
        startIcon={<GetAppIcon />}
        href={MyPDF}
        download="Domantas_Mikelionis_CV.pdf"
      >
        Download CV
      </Button>
    </Box>
  );
};

export default LinksSection;
