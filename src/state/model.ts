import { User, initial as initialUser } from "../user";
import { Info, initial as initialInfo } from "../info";

export type State = {
  data: Model;
  set: (fun: (copy: Model) => any) => void;
};

export type Model = { user: User } & { info: Info };

export const initial: Model = { user: initialUser, info: initialInfo };

var globalstate: State;

export const init = (state: State) => {
  globalstate = state;
};

export const state = () => {
  if (globalstate) return globalstate;
  throw new Error("state hasn't been initialised just yet");
};
