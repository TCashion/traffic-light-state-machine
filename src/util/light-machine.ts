import { Machine } from 'xstate'
import {
  LIGHT,
  LightState,
  LightEventObject,
  LightStateSchema,
} from './light-machine-types'

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
        exit: ['notifyExitingIdle', 'sendTelemetry'],
        on: {
          TOGGLE_GREEN: LightState.GREEN,
        },
      },
      [LightState.RED]: {
        entry: 'notifyEnteringRed',
        exit: ['notifyExitingRed', 'sendTelemetry'],
        after: {
          5000: LightState.GREEN,
        },
        on: {
          TOGGLE_IDLE: LightState.IDLE,
        },
      },
      [LightState.YELLOW]: {
        entry: 'notifyEnteringYellow',
        exit: ['notifyExitingYellow', 'sendTelemetry'],
        after: {
          2000: LightState.RED,
        },
        on: {
          TOGGLE_IDLE: LightState.IDLE,
        },
      },
      [LightState.GREEN]: {
        entry: 'notifyEnteringGreen',
        exit: ['notifyExitingGreen', 'sendTelemetry'],
        on: {
          TOGGLE_IDLE: LightState.IDLE,
        },
        after: {
          5000: { target: LightState.YELLOW },
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
      notifyExitingRed: () => {
        console.log('Exiting Red')
      },
      notifyEnteringYellow: () => {
        console.log('Entering yellow')
      },
      notifyExitingYellow: () => {
        console.log('Exiting yellow')
      },
      notifyEnteringGreen: () => {
        console.log('Entering green')
      },
      notifyExitingGreen: () => {
        console.log('Exiting green')
      },
      sendTelemetry: () => {
        console.log('time:', Date.now())
      },
    },
  }
)
