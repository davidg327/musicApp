import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import LoadingComponent from '../../components/atoms/LoadingComponent';
import HomeTemplate from '../../components/templates/Home';
import {getTopTracks} from '../../state/track/reducer.ts';
import {
  addFavoritesCache,
  cleanFavorite,
} from '../../state/favorite/reducer.ts';
import {changeCountry} from '../../state/countries/reducer.ts';
import Storage from '../../helpers/localStorage';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {Colors} from '../../utils/Colors.ts';
import {INavigation} from '../../utils/Interface.ts';
import styles from './styles.ts';

interface IHomeScreen {
  navigation: INavigation;
}

const HomeScreen = ({navigation}: IHomeScreen) => {
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

  const getCountry = async () => {
    let countryCache = await Storage.getItem('@country_music');
    if (countryCache !== null) {
      dispatch(changeCountry(countryCache));
    } else {
      let value = {
        id: 1,
        value: 'germany',
        title: 'Alemania',
      };
      Storage.storeData('@country_music', value);
      dispatch(changeCountry(value));
    }
  };

  const addFavoriteCache = () => {
    Storage.storeData('@favorite_music', favorites);
    dispatch(cleanFavorite());
  };

  useEffect(() => {
    if (!getTopTracksSuccess && Object.keys(countrySelect).length > 0) {
      dispatch(getTopTracks({value: countrySelect.value, page: 1}));
    }
  }, [countrySelect]);

  useEffect(() => {
    getFavorites();
    getCountry();
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
      {getTopTracksSuccess && <HomeTemplate navigation={navigation} />}
    </SafeAreaView>
  );
};

export default HomeScreen;
