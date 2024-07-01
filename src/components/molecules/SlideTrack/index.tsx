import React from 'react';
import {View} from 'react-native';
import SliderComponent from '../../atoms/SliderComponent';
import IconComponent from '../../atoms/IconComponent';
import {Colors} from '../../../utils/Colors.ts';
import styles from './styles.ts';

interface ISlideTrack {}

const SlideTrack = ({}: ISlideTrack) => {
  return (
    <View style={styles.container}>
      <IconComponent name={'play'} size={30} color={Colors.black} />
      <SliderComponent containerStyle={styles.containerSlide} />
      <IconComponent name={'bullhorn'} size={30} color={Colors.black} />
    </View>
  );
};

export default SlideTrack;
