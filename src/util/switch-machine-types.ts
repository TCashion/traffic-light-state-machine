import { EventObject } from "xstate";

export const SWITCH = "switch";

export enum SwitchState {
  NONE_SWTICHED = "noneSwitched",
  SOME_SWITCHED = "someSwitched"
}

export enum SwitchEvent {
  TOGGLE = "TOGGLE"
}

export interface SwitchEventObject extends EventObject {
  type: typeof SwitchEvent.TOGGLE;
}
