export interface Light {
  lightColor: LightColor.RED | LightColor.YELLOW | LightColor.GREEN
}

export enum LightColor {
  IDLE = 'idle',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}
