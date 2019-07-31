import { state } from "../state";

export type User = {
  logged: String;
} & Actions;

export type Actions = {
  login: () => void;
};

export const actions = {
  login: () => {
    state().set(copy => (copy.user.logged = copy.user.logged === initial.logged ? "Franco" : initial.logged));
  }
};

export const initial: User = { logged: "Pino", ...actions };
