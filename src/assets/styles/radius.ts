import { StyleSheet } from 'react-native';

type RadiusType = {
  borderRadius1: { borderRadius: number };
  borderRadius2: { borderRadius: number };
  borderRadius3: { borderRadius: number };
  borderRadius4: { borderRadius: number };
  borderRadius5: { borderRadius: number };
  borderRadius6: { borderRadius: number };
  borderRadius7: { borderRadius: number };
  borderRadius8: { borderRadius: number };
  borderRadius9: { borderRadius: number };
  borderRadius10: { borderRadius: number };
  borderRadius11: { borderRadius: number };
  borderRadius12: { borderRadius: number };
  borderRadius13: { borderRadius: number };
  borderRadius14: { borderRadius: number };
  borderRadius15: { borderRadius: number };
};

let radiusStyles = {} as RadiusType;
const radius = [...Array(15).keys()].map((val) => ({
  [`borderRadius${val + 1}`]: { borderRadius: val },
}));

radius.forEach((style: { [key: string]: { borderRadius: number } }) => {
  radiusStyles = { ...radiusStyles, ...style };
});

export default StyleSheet.create<RadiusType>(radiusStyles);
