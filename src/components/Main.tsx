import React from "react";
import { useCreateState, StateProvider } from "../state";
import { TopBar } from "./TopBar";
import { Content } from "./Content";
import { MyButton } from "./MyButton";

export const Main = () => {
  const state = useCreateState();
  return (
    <StateProvider value={state}>
      <TopBar />
      <Content />
      <MyButton />
      <button style={{ marginTop: 20 }} onClick={state.data.user.login}>
        Login/Lgout
      </button>
    </StateProvider>
  );
};
