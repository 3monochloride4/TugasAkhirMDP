import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  view3: {
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
  },
  text1: {
    fontSize: 17,
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
  },
  nameView: {
    marginTop: 8,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  emailText: {
    letterSpacing: 0.3,
    fontSize: 15,
  },
  list: {
    paddingVertical: 8,
  },
});

export default main;
