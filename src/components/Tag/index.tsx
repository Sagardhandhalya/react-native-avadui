import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

// COMPONENTS
import { Text, type TextVariant } from '../Text';

// HOOKS
import { useAppTheme } from '../../hooks/useTheme';

type TagVariant = 'primary' | 'secondary';
interface TagProps {
  variant?: TagVariant;
  label: string;
  bgColor?: string;
  textColor?: string;
  textVariant?: TextVariant;
  br?: number;
  ph?: number;
  pv?: number;
  mr?: number;
}
export const Tag: FC<TagProps> = ({
  variant = 'primary',
  label,
  bgColor,
  textColor,
  textVariant,
  br,
  ph,
  pv,
  mr,
}) => {
  const [{ background, text }]: any = useAppTheme();

  const containerStyle =
    variant === 'primary' ? styles.container : styles.secodaryCtn;
  return (
    <View
      style={[
        containerStyle,
        {
          backgroundColor: bgColor || background.offsetMedium,
          borderRadius: br ? br : 16,
          paddingHorizontal: ph ? ph : 12,
          paddingVertical: pv ? pv : 6,
          marginRight: mr ? mr : 0,
        },
      ]}
    >
      <Text
        variant={textVariant || 'subtextRegular'}
        color={textColor || text.neutralMedium}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  secodaryCtn: {
    borderRadius: 4,
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
});
