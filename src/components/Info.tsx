import React from "react";
import { State, connect } from "../state";

const Compo = ({ data }: State) => {
  console.log("Info other consumer rendering...");

  return (
    <div>
      Info: {data.info.value} <button onClick={data.info.swap}>change</button>
    </div>
  );
};

export const Info = connect(
  Compo,
  data => [data.info]
);
