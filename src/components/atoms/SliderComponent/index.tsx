import React from 'react';
import {ViewStyle} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

interface ISliderComponent {
  containerStyle: ViewStyle;
}

const SliderComponent = ({containerStyle}: ISliderComponent) => {
  return <Slider step={1} containerStyle={containerStyle} />;
};

export default SliderComponent;
