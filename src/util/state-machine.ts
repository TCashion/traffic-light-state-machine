import { Machine } from "xstate";

export const switchMachine = Machine({
  id: "switch",
  initial: "noneSwitched",
  states: {
    noneSwitched: {
      on: { TOGGLE: "someSwitched" }
    },
    someSwitched: {
      on: { TOGGLE: "noneSwitched" }
    }
  }
});
