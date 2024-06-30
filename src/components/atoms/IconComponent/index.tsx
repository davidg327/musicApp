import React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

interface IIconComponent {
  name: string;
  size: number;
  color: string;
  action?: () => void;
}

const IconComponent = ({name, size, color, action}: IIconComponent) => {
  return <Material name={name} size={size} color={color} onPress={action} />;
};

export default IconComponent;
