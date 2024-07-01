import React from 'react';
import Modal from 'react-native-modal';
import {ViewStyle} from 'react-native';

interface IModalComponent {
  children: React.ReactNode;
  visible: boolean;
  close: () => void;
  styles: ViewStyle;
}

const ModalComponent = ({
  children,
  visible,
  close,
  styles,
}: IModalComponent) => {
  return (
    <Modal
      onBackButtonPress={close}
      onBackdropPress={close}
      isVisible={visible}
      style={styles}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
