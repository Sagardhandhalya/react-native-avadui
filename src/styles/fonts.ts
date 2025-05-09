import { Platform } from 'react-native';
const suffix = Platform.OS === 'ios' ? '-' : ' ';
export const FONTS = {
  thin: `Inter${suffix}Thin`,
  extraLight: `Inter${suffix}ExtraLight`,
  light: `Inter${suffix}Light`,
  regular: `Inter${suffix}Regular`,
  medium: `Inter${suffix}Medium`,
  semiBold: `Inter${suffix}SemiBold`,
  bold: `Inter${suffix}Bold`,
  extraBold: `Inter${suffix}ExtraBold`,
};
