import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import IconComponent from '../../atoms/IconComponent';

interface IPressIcon {
  containerStyle: ViewStyle;
  nameIcon: string;
  size: number;
  color: string;
}

const PressIcon = ({containerStyle, nameIcon, size, color}: IPressIcon) => {
  return (
    <Pressable style={containerStyle}>
      <IconComponent name={nameIcon} size={size} color={color} />
    </Pressable>
  );
};

export default PressIcon;
