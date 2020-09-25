import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";

const ProjectLinks = ({ repoLink, liveLink, disabledLive }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<GitHubIcon />}
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Code Preview
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginLeft: 20 }}
        startIcon={<LiveTvIcon />}
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabledLive ? disabledLive : false}
      >
        Live
      </Button>
    </Box>
  );
};

export default ProjectLinks;
