import { EventObject } from 'xstate'

export const LIGHT = 'light'

export enum LightState {
  IDLE = 'idle',
  OFF = 'off',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export enum LightMachineGuards {
  LOW_TRAFFIC = 'lowTraffic',
  HIGH_TRAFFIC = 'highTraffic',
  BROKEN = 'broken',
}

export interface LightEventObject extends EventObject {
  type: 'TOGGLE_RED' | 'TOGGLE_YELLOW' | 'TOGGLE_GREEN' | 'TOGGLE_IDLE'
}

export interface LightStateSchema {
  states: {
    [LightState.IDLE]: {}
    [LightState.OFF]: {}
    [LightState.RED]: {}
    [LightState.YELLOW]: {}
    [LightState.GREEN]: {}
  }
}
