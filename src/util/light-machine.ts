import { Machine, send } from 'xstate'
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
    initial: LightState.GREEN,
    states: {
      [LightState.RED]: {
        entry: 'notifyEnteringRed',
        exit: 'notifyExitingRed',
        on: {
          TOGGLE_GREEN: {
            target: LightState.GREEN,
          },
        },
      },
      [LightState.YELLOW]: {
        entry: 'notifyEnteringYellow',
        exit: 'notifyExitingYellow',
        on: {
          TOGGLE_RED: {
            target: LightState.RED,
          },
        },
      },
      [LightState.GREEN]: {
        entry: 'notifyEnteringGreen',
        exit: 'notifyExitingGreen',
        on: {
          TOGGLE_YELLOW: {
            target: LightState.YELLOW,
          },
        },
      },
    },
  },
  {
    actions: {
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
      notifyEnteringRed: () => {
        console.log('Entering Red')
      },
      notifyExitingRed: () => {
        console.log('Exiting Red')
      },
    },
  }
)
