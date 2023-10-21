import { StyleSheet } from 'react-native';
import commonStyles from '../../assets/styles/common-styles';

const styles = StyleSheet.create({
  ...commonStyles,

  // ADD COMPONENT SPECIFIC STYLES HERE
  primaryButton: {
    marginBottom: 20,
    borderRadius: 30,
    color: "#ffffff",
    padding: 15,
    backgroundColor: "#1da5cf"
  }
});

export default styles