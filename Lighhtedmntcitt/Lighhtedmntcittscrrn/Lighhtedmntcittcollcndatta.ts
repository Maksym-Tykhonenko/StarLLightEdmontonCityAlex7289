import type {ImageSourcePropType} from 'react-native';

export type LighhtedmntcittCollcnWall = {
  id: string;

  source: ImageSourcePropType;

  unlockStars?: number;
};

export function lighhtedmntcittCollcnUnlockPriceFor(
  lighhtedmntcittIndex: number,
  lighhtedmntcittWall: LighhtedmntcittCollcnWall,
): number {
  const lighhtedmntcittCustom = lighhtedmntcittWall.unlockStars;
  if (
    lighhtedmntcittCustom != null &&
    Number.isFinite(lighhtedmntcittCustom) &&
    lighhtedmntcittCustom >= 0
  ) {
    return Math.floor(lighhtedmntcittCustom);
  }
  return 10 + lighhtedmntcittIndex * 5;
}

export const lighhtedmntcittCollcnWalls: LighhtedmntcittCollcnWall[] = [
  {id: 'cw1', source: require('../../elements/i/lighhtedmsbstwallp1.png')},
  {id: 'cw2', source: require('../../elements/i/lighhtedmsbstwallp2.png')},
  {id: 'cw3', source: require('../../elements/i/lighhtedmsbstwallp3.png')},
  {id: 'cw4', source: require('../../elements/i/lighhtedmsbstwallp4.png')},
  {id: 'cw5', source: require('../../elements/i/lighhtedmsbstwallp5.png')},
  {id: 'cw6', source: require('../../elements/i/lighhtedmsbstwallp6.png')},
  {id: 'cw7', source: require('../../elements/i/lighhtedmsbstwallp7.png')},
];
