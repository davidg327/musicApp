import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import FlatListComponent from '../../atoms/FlatListComponent';
import CardMusic from '../../organisms/CardMusic';
import {ITracks} from '../../../utils/Interface.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks.ts';
import styles from './styles.ts';
import LoadingComponent from '../../atoms/LoadingComponent';
import {Colors} from '../../../utils/Colors.ts';
import {getTopTracks} from '../../../state/track/reducer.ts';

interface IHomeTemplate {}

const Item = ({item}: {item: ITracks}) => {
  return (
    <CardMusic
      url={item.image[0]['#text']}
      name={item.name}
      artist={item.artist.name}
      listeners={item.listeners}
    />
  );
};

const HomeTemplate = ({}: IHomeTemplate) => {
  const dispatch = useAppDispatch();
  const {countrySelect} = useAppSelector(state => state.country);
  const {topTracks, page, more, getTopTracksRequesting} = useAppSelector(
    state => state.track,
  );

  const moreTracks = () => {
    dispatch(getTopTracks({value: countrySelect.value, page: page}));
  };

  return (
    <View style={styles.container}>
      <TextComponent
        styles={styles.textPrincipal}
        text={`Lista de canciones populares de ${countrySelect.title}`}
      />
      <FlatListComponent
        scroll={true}
        list={topTracks}
        activeIndex={true}
        renderItem={({item}: {item: ITracks}) => <Item item={item} />}
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
