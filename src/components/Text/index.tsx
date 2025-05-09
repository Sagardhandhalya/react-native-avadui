import type { FC } from 'react';
import type { TextProps, TextStyle } from 'react-native';
import type { StyleAttributes } from '../../utils/stylesUtils';

import { Text as NativeText } from 'react-native';
// UTILS
import { parseStyleAttributes } from '../../utils/stylesUtils';

// CONSTS
import { COLORS } from '../../styles/colors';
import { TEXT_VARIANT_MAP, WEIGHT_MAP } from '../../styles/typography';

export type SizeTextProp = [number, number?, number?, string?];

export type TextVariant = keyof typeof TEXT_VARIANT_MAP;
interface Props {
  s?: SizeTextProp;
  size?: number;
  weight?: number;
  color?: string;
  style?: TextStyle;
  flex?: number;
  lh?: number;
  ls?: number;
  center?: boolean;
  uppercase?: boolean;
  variant?: keyof typeof TEXT_VARIANT_MAP;
}

export type TextComponentProps = Props & StyleAttributes & TextProps;

export const Text: FC<TextComponentProps> = ({
  s = [],
  size: _s = 24,
  weight: _w = 500,
  color: _color = COLORS.text.neutralStrong,
  style,
  flex,
  lh,
  ls,
  center,
  uppercase,
  variant,
  ...next
}) => {
  let [size, weight, lineHeight, color] = s;
  const parsed = parseStyleAttributes(next);

  const {
    fontSize: vfs = '',
    lineHeight: vlh = '',
    weight: vw = '',
  } = variant ? TEXT_VARIANT_MAP[variant] : {};

  const fontStyle: any = {
    fontSize: size || vfs || _s,
    fontFamily: WEIGHT_MAP[weight || vw || _w],
    color: color || _color,
    textAlign: center ? 'center' : 'left',
    flex,
    lineHeight: lineHeight || vlh || lh,
    letterSpacing: ls,
  };

  if (uppercase) {
    fontStyle.textTransform = 'uppercase';
  }

  const finalStyle = {
    ...fontStyle,
    ...parsed,
    ...(style as TextStyle),
  };

  return <NativeText {...next} style={finalStyle} />;
};
