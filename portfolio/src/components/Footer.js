import React from "react";
import Box from "@material-ui/core/Box";
import LinksSection from "./LinksSection";

const Footer = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <LinksSection />

      <Box style={{ margin: "2rem" }}>
        © Domantas Mikelionis 2020. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
