import React, { useRef, useEffect, useContext } from "react";
import Project from "./Project";
import projects from "../assets/projectData/projects";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider/Divider";
import refContext from "../context/refContext";
const ProjectList = () => {
  const { updateMap } = useContext(refContext);
  const titleEl = useRef(null);
  useEffect(() => {
    updateMap("ProjectsSection", titleEl);
  });
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
        ref={titleEl}
      >
        Portfolio Projects
      </Box>
      {projects.map((project) => (
        <Box key={project.key}>
          <Project projectInfo={project} />
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectList;
