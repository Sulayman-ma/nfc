import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider, IconButton, MD2Colors } from 'react-native-paper';
import { SIZES } from '../../constants/theme';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const HomeModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>

          <IconButton 
          icon="bell"
          mode="outlined"
          iconColor={MD2Colors.blue600}
          size={SIZES.xLarge + 4}  
          onPress={() => FIREBASE_AUTH.signOut()}/>
        </Modal>
      </Portal>
      <IconButton
        icon="bell"
        mode="outlined"
        iconColor={MD2Colors.blue600}
        size={SIZES.xLarge + 4}
        onPress={showModal}
      />
    </PaperProvider>
  );
};

export default HomeModal;