import { state } from "../state";

export type Info = { value: String } & Actions;

export type Actions = {
  swap: () => void;
};

export const actions = {
  swap: () => {
    state().set(data => (data.info.value = data.info.value === initial.value ? "other info" : initial.value));
  }
};

export const initial: Info = { value: "some info", ...actions };
