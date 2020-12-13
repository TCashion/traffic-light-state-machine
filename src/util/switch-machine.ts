import { Machine } from "xstate";
import { SWITCH, SwitchState, SwitchEvent } from "./switch-machine-types";

export const switchMachine = Machine({
  id: SWITCH,
  initial: SwitchState.NONE_SWTICHED,
  states: {
    [SwitchState.NONE_SWTICHED]: {
      on: { [SwitchEvent.TOGGLE]: SwitchState.SOME_SWITCHED }
    },
    [SwitchState.SOME_SWITCHED]: {
      on: { [SwitchEvent.TOGGLE]: SwitchState.NONE_SWTICHED }
    }
  }
});
