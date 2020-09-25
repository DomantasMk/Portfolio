import React from "react";
import Project from "./Project";
import projects from "../assets/projectData/projects";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider/Divider";

const ProjectList = () => {
  return (
    <Box boxShadow={4}>
      <Box
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 40,
          paddingTop: 50,
          paddingBottom: 50,
          fontWeight: "bold",
        }}
      >
        Portfolio Projects
      </Box>
      {projects.map((project) => (
        <Box>
          <Project projectInfo={project} key={project.key} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectList;
