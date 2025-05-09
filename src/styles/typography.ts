import { FONTS } from './fonts';

export const TEXT_VARIANT_MAP = {
  // Display 1
  display1Bold: { fontSize: 40, lineHeight: 56, weight: 700 },
  display1SemiBold: { fontSize: 40, lineHeight: 56, weight: 600 },
  display1Medium: { fontSize: 40, lineHeight: 56, weight: 500 },

  // Display 2
  display2Bold: { fontSize: 36, lineHeight: 54, weight: 700 },
  display2SemiBold: { fontSize: 36, lineHeight: 54, weight: 600 },
  display2Medium: { fontSize: 36, lineHeight: 54, weight: 500 },

  // Display 3
  display3Bold: { fontSize: 32, lineHeight: 48, weight: 700 },
  display3SemiBold: { fontSize: 32, lineHeight: 48, weight: 600 },
  display3Medium: { fontSize: 32, lineHeight: 48, weight: 500 },

  // Title 1
  title1Bold: { fontSize: 24, lineHeight: 36, weight: 700 },
  title1SemiBold: { fontSize: 24, lineHeight: 36, weight: 600 },
  title1Medium: { fontSize: 24, lineHeight: 36, weight: 500 },

  // Title 2
  title2Bold: { fontSize: 20, lineHeight: 30, weight: 700 },
  title2SemiBold: { fontSize: 20, lineHeight: 30, weight: 600 },
  title2Medium: { fontSize: 20, lineHeight: 30, weight: 500 },

  // Title 3
  title3Bold: { fontSize: 18, lineHeight: 28, weight: 700 },
  title3SemiBold: { fontSize: 18, lineHeight: 28, weight: 600 },
  title3Medium: { fontSize: 18, lineHeight: 28, weight: 500 },
  title3Regular: { fontSize: 18, lineHeight: 28, weight: 400 },

  // Title 4
  title4Bold: { fontSize: 16, lineHeight: 24, weight: 700 },
  title4SemiBold: { fontSize: 16, lineHeight: 24, weight: 600 },
  title4Medium: { fontSize: 16, lineHeight: 24, weight: 500 },
  title4Regular: { fontSize: 16, lineHeight: 24, weight: 400 },

  // Body
  bodyBold: { fontSize: 14, lineHeight: 22, weight: 700 },
  bodySemiBold: { fontSize: 14, lineHeight: 22, weight: 600 },
  bodyMedium: { fontSize: 14, lineHeight: 22, weight: 500 },
  bodyRegular: { fontSize: 14, lineHeight: 22, weight: 400 },

  // Subtext
  subtextBold: { fontSize: 12, lineHeight: 18, weight: 700 },
  subtextSemiBold: { fontSize: 12, lineHeight: 18, weight: 600 },
  subtextMedium: { fontSize: 12, lineHeight: 18, weight: 500 },
  subtextRegular: { fontSize: 12, lineHeight: 18, weight: 400 },

  // Caption
  captionBold: { fontSize: 10, lineHeight: 16, weight: 700 },
  captionSemiBold: { fontSize: 10, lineHeight: 16, weight: 600 },
  captionMedium: { fontSize: 10, lineHeight: 16, weight: 500 },
  captionRegular: { fontSize: 10, lineHeight: 16, weight: 400 },
} as const;

export const WEIGHT_MAP: any = {
  100: FONTS.thin,
  200: FONTS.extraLight,
  300: FONTS.light,
  400: FONTS.regular,
  500: FONTS.medium,
  600: FONTS.semiBold,
  700: FONTS.bold,
  800: FONTS.extraBold,
};
