import React from 'react';
import {Text, TextStyle} from 'react-native';

interface ITextComponent {
  styles: TextStyle;
  text?: string;
  children?: React.ReactNode;
  number?: number;
}

const TextComponent = ({styles, text, children, number}: ITextComponent) => {
  return (
    <Text maxFontSizeMultiplier={1} style={styles} numberOfLines={number}>
      {text}
      {children}
    </Text>
  );
};

export default TextComponent;
