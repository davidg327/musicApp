import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import DetailTemplate from '../../components/templates/Detail/Profile';
import {INavigation} from '../../utils/Interface.ts';
import styles from './styles.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks.ts';
import {detailTrack} from '../../state/track/reducer.ts';
import LoadingComponent from '../../components/atoms/LoadingComponent';
import {Colors} from '../../utils/Colors.ts';

interface IDetailScreen {
  navigation: INavigation;
  route: any;
}

const DetailScreen = ({navigation, route}: IDetailScreen) => {
  const {id} = route.params;

  const dispatch = useAppDispatch();
  const {detailTrackRequesting, detailTrackSuccess} = useAppSelector(
    state => state.track,
  );

  useEffect(() => {
    dispatch(detailTrack(id));
  }, []);

  return (
    <SafeAreaView
      style={detailTrackRequesting ? styles.load : styles.container}>
      {detailTrackRequesting && (
        <LoadingComponent size={'large'} color={Colors.white} />
      )}
      {detailTrackSuccess && <DetailTemplate navigation={navigation} />}
    </SafeAreaView>
  );
};

export default DetailScreen;
