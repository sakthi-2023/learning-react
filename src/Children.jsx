import React, { useContext } from "react";
import { MyContext } from "./AppFile";

function Children() {
  const data = useContext(MyContext);

  return (
    <div>
      <h1>Hello {data}</h1>
      <h1>Welcome {data}</h1>
      <h1>Hi {data}</h1>
      <h1>{data}</h1>
    </div>
  )
}

export default Children;