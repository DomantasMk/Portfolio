import React from "react";
import Box from "@material-ui/core/Box";

const ContactMeSection = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3rem",
        padding: "2rem",
      }}
      boxShadow={4}
    >
      <p>Want to contact me? Reach me at:</p>
      <Box style={{ margin: "0.5rem", fontWeight: "bold", fontSize: 25 }}>
        Domantas.Mikelionis@gmail.com
      </Box>
    </Box>
  );
};

export default ContactMeSection;
