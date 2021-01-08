import { Machine } from "xstate";
import { LIGHT, LightState, LightEventObject } from "./light-machine-types";

// when toggled on, the red light should stay for five seconds
// after the light is green for 5 seconds, should be yellow for 2 seconds
// after the light is red for 5 seconds, toggle to yellow
export const lightMachine = Machine<any, LightEventObject>({
  id: LIGHT,
  initial: LightState.RED,
  states: {
    [LightState.RED]: {
      on: {
        TOGGLE_GREEN: {
          target: LightState.GREEN
        }
      }
    },
    [LightState.YELLOW]: {
      on: {
        TOGGLE_RED: {
          target: LightState.RED
        }
      }
    },
    [LightState.GREEN]: {
      on: {
        TOGGLE_YELLOW: {
          target: LightState.YELLOW
        }
      }
    }
  }
  // states: {
  //   [SwitchState.NONE_SWTICHED]: {
  //     on: { [SwitchEvent.TOGGLE]: SwitchState.SOME_SWITCHED }
  //   },
  //   [SwitchState.SOME_SWITCHED]: {
  //     on: { [SwitchEvent.TOGGLE]: SwitchState.NONE_SWTICHED }
  //   }
  // }
});
