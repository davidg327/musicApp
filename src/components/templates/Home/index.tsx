import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import ImageComponent from '../../atoms/ImageComponent';
import LoadingComponent from '../../atoms/LoadingComponent';
import FlatListComponent from '../../atoms/FlatListComponent';
import CardMusic from '../../organisms/CardMusic';
import {addFavorite} from '../../../state/favorite/reducer.ts';
import {getTopTracks} from '../../../state/track/reducer.ts';
import {alerts} from '../../../functions/alerts.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks.ts';
import {Colors} from '../../../utils/Colors.ts';
import {ITracks} from '../../../utils/Interface.ts';
import styles from './styles.ts';

interface IHomeTemplate {}

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

const HomeTemplate = ({}: IHomeTemplate) => {
  const dispatch = useAppDispatch();
  const {countrySelect} = useAppSelector(state => state.country);
  const {topTracks, page, more, getTopTracksRequesting} = useAppSelector(
    state => state.track,
  );
  const {favorites} = useAppSelector(state => state.favorite);

  const moreTracks = () => {
    dispatch(getTopTracks({value: countrySelect.value, page: page}));
  };

  const addTrackToFavorite = (values: ITracks) => {
    let favoriteExists = favorites.find(
      favorite => favorite.mbid === values.mbid,
    );
    if (favoriteExists?.mbid) {
      alerts('!Espera¡', 'Esta canción ya esta en tus favoritos');
    } else {
      alerts('!Que bueno¡', 'Agregada a favoritos');
      dispatch(addFavorite(values));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <TextComponent
          styles={styles.textPrincipal}
          text={`Lista de canciones populares de ${countrySelect.title}`}
        />
        <ImageComponent
          styles={styles.image}
          resize={'cover'}
          url={
            'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png'
          }
        />
      </View>
      <FlatListComponent
        scroll={true}
        list={topTracks}
        activeIndex={true}
        renderItem={({item}: {item: ITracks}) => (
          <Item item={item} addFavoriteTrack={() => addTrackToFavorite(item)} />
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
