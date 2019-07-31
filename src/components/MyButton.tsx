import React, { memo } from "react";

export const Compo = () => {
  console.log("rendering MyButton");

  const style = {
    borderStyle: "solid",
    borderWidth: 0.5,
    marginLeft: 10
  };

  return (
    <div>
      <div style={style}>Another Component</div>
    </div>
  );
};

export const MyButton = memo(Compo);
