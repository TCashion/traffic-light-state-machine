import { EventObject } from 'xstate'

export const LIGHT = 'light'

export enum LightState {
  IDLE = 'idle',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export interface LightEventObject extends EventObject {
  type: 'TOGGLE_RED' | 'TOGGLE_YELLOW' | 'TOGGLE_GREEN' | 'TOGGLE_IDLE'
}

export interface LightStateSchema {
  states: {
    [LightState.IDLE]: {}
    [LightState.RED]: {}
    [LightState.YELLOW]: {}
    [LightState.GREEN]: {}
  }
}
