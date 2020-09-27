import React from "react";

const AuthContext = React.createContext({
  refMap: new Map(),
  updateMap: () => {},
});

export default AuthContext;
