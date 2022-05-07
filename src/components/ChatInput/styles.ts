import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#24252C',
    paddingLeft: 20,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#9FA0A2',
  },
  sendIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
});
