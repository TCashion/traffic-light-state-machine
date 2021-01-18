import { Machine } from 'xstate'
import {
  LIGHT,
  LightState,
  LightEventObject,
  LightStateSchema,
  LightMachineGuard,
} from './light-machine-types'
import store from '../store'
import { TrafficSetting } from '@/store/store-types'

// when toggled on, the red light should stay for five seconds
// after the light is green for 5 seconds, should be yellow for 2 seconds
// after the light is red for 5 seconds, toggle to yellow
export const lightMachine = Machine<void, LightStateSchema, LightEventObject>(
  {
    id: LIGHT,
    initial: LightState.IDLE,
    states: {
      [LightState.IDLE]: {
        entry: 'notifyEnteringIdle',
        exit: ['notifyExitingIdle'],
        on: {
          TOGGLE_GREEN: LightState.GREEN,
        },
      },
      [LightState.OFF]: {
        after: {
          750: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
        on: {
          TOGGLE_RED: { target: LightState.RED },
        },
      },
      [LightState.RED]: {
        entry: 'notifyEnteringRed',
        after: {
          6000: {
            target: LightState.GREEN,
            cond: LightMachineGuard.HIGH_TRAFFIC,
          },
          3000: {
            target: LightState.GREEN,
            cond: LightMachineGuard.LOW_TRAFFIC,
          },
          750: {
            target: LightState.OFF,
            cond: LightMachineGuard.BROKEN,
          },
        },
        on: {
          TOGGLE_IDLE: LightState.IDLE,
        },
      },
      [LightState.YELLOW]: {
        entry: 'notifyEnteringYellow',
        after: {
          1500: LightState.RED,
        },
        on: {
          TOGGLE_IDLE: LightState.IDLE,
          TOGGLE_RED: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
      },
      [LightState.GREEN]: {
        entry: 'notifyEnteringGreen',
        on: {
          TOGGLE_IDLE: LightState.IDLE,
          TOGGLE_RED: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
        after: {
          0: { target: LightState.RED, cond: LightMachineGuard.BROKEN },
          3000: { target: LightState.YELLOW },
        },
      },
    },
  },
  {
    actions: {
      notifyEnteringIdle: () => {
        console.log('Light is now idle')
      },
      notifyExitingIdle: () => {
        console.log('Light is no longer idle')
      },
      notifyEnteringRed: () => {
        console.log('Entering Red')
      },
      notifyEnteringYellow: () => {
        console.log('Entering yellow')
      },
      notifyEnteringGreen: () => {
        console.log('Entering green')
      },
    },
    guards: {
      [LightMachineGuard.LOW_TRAFFIC]: () => {
        return store.getters.getCurrentTrafficSetting === TrafficSetting.LOW
      },
      [LightMachineGuard.HIGH_TRAFFIC]: () => {
        return store.getters.getCurrentTrafficSetting === TrafficSetting.HIGH
      },
      [LightMachineGuard.BROKEN]: () => {
        return store.getters.getCurrentTrafficSetting === TrafficSetting.BROKEN
      },
    },
  }
)
