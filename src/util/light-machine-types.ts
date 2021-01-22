import { EventObject } from 'xstate'
import { TrafficSetting } from '../store/store-types'

export const LIGHT = 'light'

export enum LightState {
  // IDLE = 'idle',
  OFF = 'off',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export enum LightMachineGuard {
  LOW_TRAFFIC = 'lowTraffic',
  HIGH_TRAFFIC = 'highTraffic',
  WORKING = 'working',
  BROKEN = 'broken',
}

export interface LightEventObject extends EventObject {
  type:
    | 'TOGGLE_RED'
    | 'TOGGLE_YELLOW'
    | 'TOGGLE_GREEN'
    | 'TOGGLE_OFF'
    | 'TOGGLE_ON'
  trafficSetting?: TrafficSetting
}

export interface LightStateSchema {
  context: {
    setting: TrafficSetting | undefined
  }
  states: {
    // [LightState.IDLE]: {}
    [LightState.OFF]: {}
    [LightState.RED]: {}
    [LightState.YELLOW]: {}
    [LightState.GREEN]: {}
  }
}
