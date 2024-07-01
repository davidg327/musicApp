import React from 'react';
import {Pressable, View} from 'react-native';
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
  openModal: () => void;
}

const Item = ({
  item,
  addFavoriteTrack,
  goDetail,
}: {
  item: ITracks;
  addFavoriteTrack: () => void;
  goDetail: () => void;
}) => {
  return (
    <CardMusic
      url={item.image[0]['#text']}
      name={item.name}
      artist={item.artist.name}
      listeners={item.listeners}
      addFavorite={addFavoriteTrack}
      goDetail={goDetail}
    />
  );
};

const ProfileTemplate = ({navigation, openModal}: IHomeTemplate) => {
  const {favorites} = useAppSelector(state => state.favorite);
  const {countrySelect} = useAppSelector(state => state.country);

  const addTrackToFavorite = () => {};

  const goDetail = (id: string) => {
    navigation.navigate('Detail', {id: id});
  };

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
      <Pressable style={styles.containerCountry} onPress={openModal}>
        <TextComponent styles={styles.textCountry} text={'Cambiar de país'} />
        <TextComponent
          styles={styles.textCountry}
          text={`Actual: ${countrySelect.title}`}
        />
      </Pressable>
      <TextComponent
        styles={styles.textPrincipal}
        text={'Últimas canciones reproducidas'}
      />
      <FlatListComponent
        scroll={true}
        list={favorites}
        activeIndex={true}
        renderItem={({item}: {item: ITracks}) => (
          <Item
            item={item}
            addFavoriteTrack={() => addTrackToFavorite()}
            goDetail={() => goDetail(item.mbid)}
          />
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
