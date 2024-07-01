import React from 'react';
import {View} from 'react-native';
import ModalComponent from '../../atoms/ModalComponent';
import TextComponent from '../../atoms/TextComponent';
import TextIcon from '../../molecules/TextIcon';
import {useAppSelector} from '../../../hooks/hooks.ts';
import styles from './styles.ts';

interface IModalChangeCountry {
  visible: boolean;
  close: () => void;
  changeCountry: (value: any) => void;
}

const ModalChangeCountry = ({
  visible,
  close,
  changeCountry,
}: IModalChangeCountry) => {
  const {countries, countrySelect} = useAppSelector(state => state.country);
  return (
    <ModalComponent visible={visible} close={close} styles={styles.container}>
      <View style={styles.containerModal}>
        <TextComponent styles={styles.textTitle} text={'Cambiar de país'} />
        <View>
          {countries.map((country, index) => (
            <TextIcon
              text={country.title}
              key={index}
              active={country.id === countrySelect.id}
              changeCountry={() => changeCountry(country)}
            />
          ))}
        </View>
      </View>
    </ModalComponent>
  );
};
export default ModalChangeCountry;
