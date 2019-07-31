import React from "react";
import { State, connect } from "../state";

const style = { border: "solid", borderWidth: 0.5 };

const Compo = ({ data, actions }: State) => {
  console.log("topbar user consumer rendering...");

  return (
    <div style={style}>
      <span>Logged user: {data.user.logged}</span>
      <span>
        <button onClick={data.user.login}> Change </button>
      </span>
    </div>
  );
};

export const TopBar = connect(
  Compo,
  data => [data.user]
);
