export interface Light {
  lightColor: LightColor.RED | LightColor.YELLOW | LightColor.GREEN
}

export enum LightColor {
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
}
