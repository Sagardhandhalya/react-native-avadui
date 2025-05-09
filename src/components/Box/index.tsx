import type { ScrollViewProps, ViewProps } from 'react-native';
import type { StyleAttributes } from '../../utils/stylesUtils';

import React, { forwardRef } from 'react';
import { ScrollView, View } from 'react-native';

// UTILS
import { parseStyleAttributes } from '../../utils/stylesUtils';

interface BoxProps {
  children?: React.ReactNode;
  horizontal?: boolean;
  padding?: number | string;
  mb?: number;
  mt?: number;
  ml?: number;
  mh?: number;
  mr?: number;
  mv?: number;
  pv?: number;
  ph?: number;
  flex?: number;
  height?: number | string;
  width?: number | string;
  bw?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  style?: object;
  borderBottom?: number;
  scroll?: boolean;
  gap?: number;
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end';
}

export type BoxPropsType = BoxProps & StyleAttributes & ScrollViewProps;

export const Box = forwardRef<View | ScrollView, BoxPropsType>((props, ref) => {
  const {
    children,
    horizontal,
    padding,
    mb,
    mt,
    ml,
    mh,
    mr,
    mv,
    pv,
    ph,
    flex,
    height,
    width,
    bw,
    align,
    justify,
    alignSelf,
    style,
    borderBottom,
    scroll,
    gap,
    ...rest
  } = props;

  const selfStyle = {
    flexDirection: horizontal ? 'row' : 'column',
    padding,
    marginTop: mt,
    marginRight: mr,
    marginLeft: ml,
    marginBottom: mb,
    marginHorizontal: mh,
    flex,
    borderWidth: bw,
    alignItems: align,
    justifyContent: justify,
    paddingVertical: pv,
    paddingHorizontal: ph,
    marginVertical: mv,
    borderBottomWidth: borderBottom,
    height,
    gap,
    alignSelf,
    width,
  };

  const parsed = parseStyleAttributes(rest);

  const finalStyles = { ...parsed, ...selfStyle, ...style } as ViewProps;

  if (scroll) {
    return (
      <ScrollView
        ref={ref as React.Ref<ScrollView>}
        automaticallyAdjustKeyboardInsets={!horizontal}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={finalStyles}
        {...rest}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View ref={ref as React.Ref<View>} style={finalStyles}>
      {children}
    </View>
  );
});
