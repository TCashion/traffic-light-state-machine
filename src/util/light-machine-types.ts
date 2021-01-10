import { LightColor } from '@/types/types'
import { EventObject } from 'xstate'

export const LIGHT = 'light'

export enum LightState {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export interface LightEventObject extends EventObject {
  type: 'TOGGLE_RED' | 'TOGGLE_YELLOW' | 'TOGGLE_GREEN'
}

export interface LightStateSchema {
  states: {
    [LightState.RED]: {}
    [LightState.YELLOW]: {}
    [LightState.GREEN]: {}
  }
}
