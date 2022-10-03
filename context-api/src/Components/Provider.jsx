import React from "react";
import { useState } from "react";
import MyContext from "./Context";

function Provider(props) {
  const [mission, setMission] = useState({
    missonName: "Defuse a bomb",
    agent: "007",
    accepted: "N",
  });
  return (
    <MyContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accepted: "Y" });
        },
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default Provider;
