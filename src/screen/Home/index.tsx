import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import HomeTemplate from '../../components/templates/Home';
import {getTopTracks} from '../../state/track/reducer.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import styles from './styles.ts';
import LoadingComponent from '../../components/atoms/LoadingComponent';
import {Colors} from '../../utils/Colors.ts';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const {countrySelect} = useAppSelector(state => state.country);
  const {getTopTracksRequesting, getTopTracksSuccess, topTracks} =
    useAppSelector(state => state.track);

  useEffect(() => {
    if (!getTopTracksSuccess) {
      dispatch(getTopTracks({value: countrySelect.value, page: 1}));
    }
  }, []);

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
