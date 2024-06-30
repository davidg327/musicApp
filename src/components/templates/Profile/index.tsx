import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import FlatListComponent from '../../atoms/FlatListComponent';
import PressIcon from '../../molecules/PressIcon';
import CardMusic from '../../organisms/CardMusic';
import {useAppSelector} from '../../../hooks/hooks.ts';
import {Colors} from '../../../utils/Colors.ts';
import {INavigation, ITracks} from '../../../utils/Interface.ts';
import styles from './styles.ts';

interface IHomeTemplate {
  navigation: INavigation;
}

const Item = ({
  item,
  addFavoriteTrack,
}: {
  item: ITracks;
  addFavoriteTrack: () => void;
}) => {
  return (
    <CardMusic
      url={item.image[0]['#text']}
      name={item.name}
      artist={item.artist.name}
      listeners={item.listeners}
      addFavorite={addFavoriteTrack}
    />
  );
};

const ProfileTemplate = ({navigation}: IHomeTemplate) => {
  const {favorites} = useAppSelector(state => state.favorite);

  const addTrackToFavorite = () => {};

  return (
    <View style={styles.container}>
      <PressIcon
        containerStyle={styles.goBack}
        nameIcon={'arrow-left'}
        size={30}
        color={Colors.white}
        action={() => {
          navigation.goBack();
        }}
      />
      <TextComponent styles={styles.textTitle} text={'Mi perfil'} />
      <TextComponent
        styles={styles.textPrincipal}
        text={'Últimas canciones reproducidas'}
      />
      <FlatListComponent
        scroll={true}
        list={favorites}
        activeIndex={true}
        renderItem={({item}: {item: ITracks}) => (
          <Item item={item} addFavoriteTrack={() => addTrackToFavorite()} />
        )}
        empty={
          <TextComponent
            styles={styles.textEmpty}
            text={'No hay últimas canciones'}
          />
        }
      />
    </View>
  );
};

export default ProfileTemplate;
