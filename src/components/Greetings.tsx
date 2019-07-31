import React from "react";
import { State, connect } from "../state";

const Compo = ({ data }: State) => {
  console.log("greetings user consumer rendering...");

  return <span>Dear {data.user.logged}, welcome. </span>;
};

export const Greetings = connect(
  Compo,
  data => [data.user]
);
