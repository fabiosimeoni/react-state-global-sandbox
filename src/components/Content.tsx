import React from "react";

import { Greetings } from "./Greetings";
import { Info } from "./Info";

export const Content = () => (
  <div>
    <div style={{ margin: 10 }}>
      <Greetings />
    </div>
    <div style={{ margin: 10 }}>
      <Info />
    </div>
  </div>
);
