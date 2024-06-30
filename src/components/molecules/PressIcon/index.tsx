import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import IconComponent from '../../atoms/IconComponent';

interface IPressIcon {
  containerStyle: ViewStyle;
  nameIcon: string;
  size: number;
  color: string;
  action: () => void;
}

const PressIcon = ({containerStyle, nameIcon, size, color, action}: IPressIcon) => {
  return (
    <Pressable style={containerStyle} onPress={action}>
      <IconComponent name={nameIcon} size={size} color={color} />
    </Pressable>
  );
};

export default PressIcon;
