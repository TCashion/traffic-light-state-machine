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
// after the light is green for 6 seconds, should be yellow for 2 seconds
// after the light is red for 6 seconds, toggle to yellow
export const lightMachine = Machine<void, LightStateSchema, LightEventObject>(
  {
    id: LIGHT,
    initial: LightState.OFF,
    states: {
      [LightState.OFF]: {
        entry: 'notifyEnteringOffState',
        exit: ['notifyExitingOffState', 'sendTimeStamp'],
        after: {
          750: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
        on: {
          TOGGLE_ON: [
            {
              target: LightState.GREEN,
              cond: LightMachineGuard.WORKING,
            },
            {
              target: LightState.RED,
              cond: LightMachineGuard.BROKEN,
            },
          ],
          TOGGLE_OFF: LightState.OFF,
        },
      },
      [LightState.RED]: {
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
          TOGGLE_OFF: LightState.OFF,
          TOGGLE_ON: LightState.GREEN,
          TOGGLE_RED: LightState.RED,
        },
      },
      [LightState.YELLOW]: {
        after: {
          1500: LightState.RED,
        },
        on: {
          TOGGLE_OFF: LightState.OFF,
          TOGGLE_ON: LightState.GREEN,
          TOGGLE_RED: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
      },
      [LightState.GREEN]: {
        on: {
          TOGGLE_OFF: LightState.OFF,
          TOGGLE_RED: {
            target: LightState.RED,
            cond: LightMachineGuard.BROKEN,
          },
        },
        after: {
          0: { target: LightState.RED, cond: LightMachineGuard.BROKEN },
          3000: {
            target: LightState.YELLOW,
            cond: LightMachineGuard.LOW_TRAFFIC,
          },
          6000: {
            target: LightState.YELLOW,
            cond: LightMachineGuard.HIGH_TRAFFIC,
          },
        },
      },
    },
  },
  {
    actions: {
      notifyEnteringOffState: () => {
        console.log('Light is now off')
      },
      notifyExitingOffState: () => {
        console.log('Light is now on')
      },
      sendTimeStamp: () => {
        console.log(Date.now())
      },
    },
    guards: {
      [LightMachineGuard.LOW_TRAFFIC]: () => {
        // this references the store value instead of the event.trafficSetting because
        // the machine needs to know high vs. low value independent of an event
        return store.getters.getCurrentTrafficSetting === TrafficSetting.LOW
      },
      [LightMachineGuard.HIGH_TRAFFIC]: () => {
        // see comment above
        return store.getters.getCurrentTrafficSetting === TrafficSetting.HIGH
      },
      [LightMachineGuard.WORKING]: (context, event) => {
        return event.trafficSetting !== TrafficSetting.BROKEN
      },
      [LightMachineGuard.BROKEN]: (context, event) => {
        return (
          event.trafficSetting === TrafficSetting.BROKEN ||
          store.getters.getCurrentTrafficSetting === TrafficSetting.BROKEN
        )
      },
    },
  }
)
