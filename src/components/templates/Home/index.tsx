import React from 'react';
import {Pressable, View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import ImageComponent from '../../atoms/ImageComponent';
import LoadingComponent from '../../atoms/LoadingComponent';
import FlatListComponent from '../../atoms/FlatListComponent';
import CardMusic from '../../organisms/CardMusic';
import {
  addFavorite,
  deleteFirstFavorite,
} from '../../../state/favorite/reducer.ts';
import {getTopTracks} from '../../../state/track/reducer.ts';
import {alerts} from '../../../functions/alerts.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks.ts';
import {Colors} from '../../../utils/Colors.ts';
import {INavigation, ITracks} from '../../../utils/Interface.ts';
import styles from './styles.ts';

interface IHomeTemplate {
  navigation: INavigation;
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

const HomeTemplate = ({navigation}: IHomeTemplate) => {
  const dispatch = useAppDispatch();
  const {countrySelect} = useAppSelector(state => state.country);
  const {topTracks, page, more, getTopTracksRequesting} = useAppSelector(
    state => state.track,
  );
  const {favorites} = useAppSelector(state => state.favorite);

  const moreTracks = () => {
    dispatch(getTopTracks({value: countrySelect.value, page: page}));
  };

  const goDetail = (id: string) => {
    navigation.navigate('Detail', {id: id});
  };

  const addTrackToFavorite = (values: ITracks) => {
    let favoriteExists = favorites.find(
      favorite => favorite.mbid === values.mbid,
    );
    if (favoriteExists?.mbid) {
      alerts('!Oye¡', 'Esta canción ya se la puedes encontrar en tu perfil');
    } else {
      alerts(
        '!Que bueno¡',
        'Se a agregado a tu lista de últimas reproducciones',
      );
      if (favorites.length === 10) {
        dispatch(deleteFirstFavorite(values));
      } else {
        dispatch(addFavorite(values));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <TextComponent
          styles={styles.textPrincipal}
          text={`Lista de canciones populares de ${countrySelect.title}`}
        />
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <ImageComponent
            styles={styles.image}
            resize={'cover'}
            url={
              'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png'
            }
          />
        </Pressable>
      </View>
      <FlatListComponent
        scroll={true}
        list={topTracks}
        activeIndex={true}
        renderItem={({item}: {item: ITracks}) => (
          <Item
            item={item}
            addFavoriteTrack={() => addTrackToFavorite(item)}
            goDetail={() => goDetail(item.mbid)}
          />
        )}
        empty={
          <TextComponent
            styles={styles.textEmpty}
            text={'No hay gastos registrados'}
          />
        }
        renderFooter={
          getTopTracksRequesting ? (
            <LoadingComponent color={Colors.white} size={'small'} />
          ) : null
        }
        action={() => {
          if (more) {
            moreTracks();
          }
        }}
      />
    </View>
  );
};

export default HomeTemplate;
