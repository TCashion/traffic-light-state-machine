import { EventObject } from "xstate";
import { LightColors } from "../types/types";

export const LIGHT = "light";

export enum LightState {
  RED = LightColors.RED,
  YELLOW = LightColors.YELLOW,
  GREEN = LightColors.GREEN
}

export interface LightEventObject extends EventObject {
  type: "TOGGLE_RED" | "TOGGLE_YELLOW" | "TOGGLE_GREEN";
}
