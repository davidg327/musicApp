import React from 'react';
import {ScrollView, View} from 'react-native';
import TextComponent from '../../../atoms/TextComponent';
import ImageComponent from '../../../atoms/ImageComponent';
import PressIcon from '../../../molecules/PressIcon';
import {useAppSelector} from '../../../../hooks/hooks.ts';
import {Colors} from '../../../../utils/Colors.ts';
import {INavigation} from '../../../../utils/Interface.ts';
import {styles} from './styles.ts';

interface IDetailTemplate {
  navigation: INavigation;
}

const DetailTemplate = ({navigation}: IDetailTemplate) => {
  const {track} = useAppSelector(state => state.track);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageComponent
          styles={styles.image}
          resize={'cover'}
          url={track.album.image[2]['#text']}
        />
        <TextComponent styles={styles.textName} text={track.name} />
        <TextComponent styles={styles.textArtist} text={track.artist.name} />
        <TextComponent styles={styles.textDescription} text={'Descripción'} />
        <TextComponent styles={styles.description} text={track.wiki.content} />
      </ScrollView>
    </View>
  );
};

export default DetailTemplate;
