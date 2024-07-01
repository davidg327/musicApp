import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ProfileTemplate from '../../components/templates/Profile';
import ModalChangeCountry from '../../components/organisms/ModalChangeCountry';
import {changeCountry} from '../../state/countries/reducer.ts';
import {getTopTracks} from '../../state/track/reducer.ts';
import Storage from '../../helpers/localStorage';
import {useAppDispatch} from '../../hooks/hooks.ts';
import {INavigation} from '../../utils/Interface.ts';
import styles from './styles.ts';

interface IProfileScreen {
  navigation: INavigation;
}

const ProfileScreen = ({navigation}: IProfileScreen) => {
  const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  const handleChangeCountry = (value: any) => {
    dispatch(changeCountry(value));
    setModal(false);
    navigation.goBack();
    dispatch(getTopTracks({value: value.value, page: 1}));
    Storage.storeData('@country_music', value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileTemplate
        navigation={navigation}
        openModal={() => setModal(true)}
      />
      <ModalChangeCountry
        visible={modal}
        close={() => setModal(false)}
        changeCountry={handleChangeCountry}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
