import React from 'react';
import {Image, ImageResizeMode, ImageStyle} from 'react-native';

interface IImageComponent {
  styles: ImageStyle;
  resize: ImageResizeMode;
  source?: number;
  url?: string;
}

const ImageComponent = ({styles, resize, source, url}: IImageComponent) => {
  return (
    <Image
      style={styles}
      resizeMode={resize}
      source={source ? source : {uri: url}}
    />
  );
};

export default ImageComponent;
