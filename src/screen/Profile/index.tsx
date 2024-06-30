import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileTemplate from '../../components/templates/Profile';
import {INavigation} from '../../utils/Interface.ts';
import styles from './styles.ts';

interface IProfileScreen {
  navigation: INavigation;
}

const ProfileScreen = ({navigation}: IProfileScreen) => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileTemplate navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
