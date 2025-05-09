import { COLORS } from '../styles/colors';

export const useAppTheme = () => {
  // In future if we include dark mode add conditon here for swaping colors
  const colors = COLORS;
  return [colors];
};
