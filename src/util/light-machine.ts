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
    initial: LightState.RED,
    states: {
      [LightState.RED]: {
        on: {
          TOGGLE_GREEN: {
            target: LightState.GREEN,
          },
        },
      },
      [LightState.YELLOW]: {
        entry: () => console.log('notifyYellow'),
        on: {
          TOGGLE_RED: {
            target: LightState.RED,
          },
        },
      },
      [LightState.GREEN]: {
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
      notifyYellow: (context, event) => {
        console.log('changed to yellow')
      },
      notifyGreen: (context, event) => {
        console.log('changed to green')
      },
      notifyRed: (context, event) => {
        console.log('changed to Red')
      },
    },
  }
)
