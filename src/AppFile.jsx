import React, { createContext } from "react";
import Children from "./Children";

export const MyContext = createContext();

function AppFile() {
  const name = "Sakthi";

  return (
    <MyContext.Provider value={name}>
      <Children />
    </MyContext.Provider>
  );
}

export default AppFile;