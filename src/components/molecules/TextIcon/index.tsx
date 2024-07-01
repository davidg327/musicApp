import React from 'react';
import {Pressable, View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import IconComponent from '../../atoms/IconComponent';
import {Colors} from '../../../utils/Colors.ts';
import styles from './styles.ts';

interface ITextIcon {
  text: string;
  active: boolean;
  changeCountry: () => void;
}

const TextIcon = ({text, active, changeCountry}: ITextIcon) => {
  return (
    <Pressable onPress={changeCountry}>
      <View style={styles.container}>
        <TextComponent styles={styles.text} text={text} />
        {active && (
          <IconComponent name={'check'} size={30} color={Colors.primary} />
        )}
      </View>
      <View style={styles.line} />
    </Pressable>
  );
};

export default TextIcon;
