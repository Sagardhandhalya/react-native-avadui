import type { TextStyle, ViewStyle } from 'react-native';
import type { TextComponentProps } from '../Text';

import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { type FC, type ReactNode } from 'react';

// COMPONENTS
import { Text } from '../Text';

// HOOKS
import { useAppTheme } from '../../hooks/useTheme';

export const VARIANTS = {
  BACKGROUND: 'background',
  OUTLINE: 'outline',
  TEXT: 'text',
} as const;

export const BUTTON_SIZE = {
  TEXT: 'text',
  SMALL: 'small',
  MEDIUM: 'medium',
  FULL: 'full',
} as const;

interface ButtonProps {
  label: string;
  onPress: () => void;
  renderIcon?: () => ReactNode;
  iconDirection?: 'start' | 'end';
  count?: number;
  size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
  variant?: (typeof VARIANTS)[keyof typeof VARIANTS];
  labelProps?: Partial<TextComponentProps>;
  styles?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  bg?: string;
  loaderSize?: number;
}
export const Button: FC<ButtonProps> = ({
  label,
  onPress,
  size,
  variant,
  count,
  iconDirection,
  renderIcon,
  labelProps = { variant: 'subtextMedium' },
  styles,
  loading = false,
  disabled = false,
  bg = 'transparent',
  loaderSize,
}) => {
  let containerStyles: ViewStyle = {
    gap: 8,
    alignItems: 'center',
    borderRadius: 46,
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: bg,
  };
  let labelStyle: TextStyle = { textAlign: 'center' };

  const [{ background, border, text }]: any = useAppTheme();

  switch (variant) {
    case VARIANTS.OUTLINE:
      containerStyles = {
        ...containerStyles,
        borderColor: border.primary,
        borderWidth: 1,
      };
      labelStyle = { ...labelStyle, color: text.primary };
      break;
    case VARIANTS.TEXT:
      containerStyles = {
        ...containerStyles,
      };
      labelStyle = {
        ...labelStyle,
        color: disabled ? text.neutralWeak : text.primary,
      };
      break;

    default:
      containerStyles = {
        ...containerStyles,
        backgroundColor:
          disabled || loading ? background.primaryWeak : background.primary,
      };
      labelStyle = { ...labelStyle, color: text.neutralInverse };
  }

  switch (size) {
    case BUTTON_SIZE.TEXT:
      containerStyles = {
        ...containerStyles,
        paddingVertical: 6,
        alignSelf: 'flex-start',
      };
      break;
    case BUTTON_SIZE.SMALL:
      containerStyles = {
        ...containerStyles,
        paddingHorizontal: 16,
        paddingVertical: 8.5,
      };
      break;
    case BUTTON_SIZE.MEDIUM:
      containerStyles = {
        ...containerStyles,
        paddingHorizontal: 16,
        paddingVertical: 6,
      };
      break;
    case BUTTON_SIZE.FULL:
      containerStyles = {
        ...containerStyles,
        paddingVertical: 14,
      };
      labelProps = { ...labelProps, variant: 'title4Medium' };
      break;
    default:
      containerStyles = {
        ...containerStyles,
        paddingHorizontal: 16,
        paddingVertical: 6,
      };
  }

  return (
    <TouchableOpacity
      style={{
        ...containerStyles,
        ...styles,
      }}
      onPress={() => {
        if (loading || disabled) return;
        onPress?.();
      }}
      activeOpacity={loading || disabled ? 1 : 0.2}
    >
      {!!loading && (
        <ActivityIndicator
          color={
            VARIANTS.OUTLINE === variant ? text.primary : text.neutralInverse
          }
          size={loaderSize || 'small'}
        />
      )}
      {iconDirection === 'start' && renderIcon?.()}
      <Text style={labelStyle} {...labelProps}>
        {label}
      </Text>
      {iconDirection === 'end' && renderIcon?.()}
      {!!count && (
        <View
          style={[
            { backgroundColor: background.negative },
            myStyles.countContainer,
          ]}
        >
          <Text variant="subtextBold" color={text.neutralInverse} center>
            {count}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const myStyles = StyleSheet.create({
  countContainer: {
    borderRadius: 16,
    height: 20,
    position: 'absolute',
    right: -8,
    top: -8,
    paddingHorizontal: 6,
  },
});
