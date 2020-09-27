import React, { useEffect, useState } from "react";
import RefContext from "./refContext";

const RefProvider = ({ children }) => {
  const [refMap, setRefMap] = useState(new Map());
  const updateMap = (k, v) => {
    setRefMap(refMap.set(k, v));
  };
  return (
    <RefContext.Provider value={{ refMap, updateMap }}>
      {children}
    </RefContext.Provider>
  );
};
export default RefProvider;
