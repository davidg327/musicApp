import React from 'react';
import {Pressable, View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import ImageComponent from '../../atoms/ImageComponent';
import PressIcon from '../../molecules/PressIcon';
import {Colors} from '../../../utils/Colors.ts';
import styles from './styles.ts';

interface ICardMusic {
  url: string;
  name: string;
  artist: string;
  listeners: string;
  addFavorite: () => void;
  goDetail: () => void;
}

const CardMusic = ({
  url,
  name,
  artist,
  listeners,
  addFavorite,
  goDetail,
}: ICardMusic) => {
  return (
    <Pressable style={styles.container} onPress={goDetail}>
      <View style={styles.containerInfo}>
        <ImageComponent styles={styles.image} resize={'stretch'} url={url} />
        <View style={styles.containerText}>
          <TextComponent
            styles={styles.textListener}
            text={`${listeners} reproducciones`}
          />
          <TextComponent styles={styles.textName} text={name} />
          <TextComponent styles={styles.textArtist} text={artist} />
        </View>
      </View>
      <PressIcon
        containerStyle={styles.containerIcon}
        nameIcon={'play'}
        size={30}
        color={Colors.black}
        action={addFavorite}
      />
    </Pressable>
  );
};

export default CardMusic;
