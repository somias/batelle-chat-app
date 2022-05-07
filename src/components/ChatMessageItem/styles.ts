import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  avatarStyle: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    marginHorizontal: 4,
  },
  avatarUsernameWrapper: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bodyWrapper: {
    alignSelf: 'flex-start',
    backgroundColor: '#24252C',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#333439',
    borderRadius: 10,
    padding: 10,
  },
  body: {
    color: '#9FA0A2',
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
    fontSize: 9,
  },
});
