import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import LoadingComponent from '../../components/atoms/LoadingComponent';
import HomeTemplate from '../../components/templates/Home';
import {getTopTracks} from '../../state/track/reducer.ts';
import {
  addFavoritesCache,
  cleanFavorite,
} from '../../state/favorite/reducer.ts';
import Storage from '../../helpers/localStorage';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {Colors} from '../../utils/Colors.ts';
import styles from './styles.ts';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const {countrySelect} = useAppSelector(state => state.country);
  const {getTopTracksRequesting, getTopTracksSuccess, topTracks} =
    useAppSelector(state => state.track);
  const {activeFavorite, favorites} = useAppSelector(state => state.favorite);

  const getFavorites = async () => {
    let favoritesCache = await Storage.getItem('@favorite_music');
    if (favoritesCache !== null) {
      dispatch(addFavoritesCache(favoritesCache));
    }
  };

  const addFavoriteCache = () => {
    Storage.storeData('@favorite_music', favorites);
    dispatch(cleanFavorite());
  };

  useEffect(() => {
    if (!getTopTracksSuccess) {
      dispatch(getTopTracks({value: countrySelect.value, page: 1}));
    }
  }, []);

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    if (activeFavorite) {
      addFavoriteCache();
    }
  }, [activeFavorite]);

  return (
    <SafeAreaView
      style={
        getTopTracksRequesting && topTracks.length === 0
          ? styles.load
          : styles.container
      }>
      {getTopTracksRequesting && topTracks.length === 0 && (
        <LoadingComponent size={'large'} color={Colors.white} />
      )}
      {getTopTracksSuccess && <HomeTemplate />}
    </SafeAreaView>
  );
};

export default HomeScreen;
