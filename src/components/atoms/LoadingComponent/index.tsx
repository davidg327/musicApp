import React from 'react';
import {ActivityIndicator} from 'react-native';

interface ILoading {
  size: number | 'large' | 'small';
  color: string;
}

const LoadingComponent = ({size, color}: ILoading) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default LoadingComponent;
