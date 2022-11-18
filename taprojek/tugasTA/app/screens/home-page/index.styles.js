import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#f5f5f5',
    fontFamily: 'roboto',
  },
  scrollView: {
    width,
    backgroundColor: '#f5f5f5',

  },
  iconview: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#fff',
    position: 'relative',
    left: 140,
    bottom: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    backgroundColor: '#fff',
    borderRadius: 25,
    alignContent: 'flex-start',
    margin: 10,
    padding: 10,
    height: 130,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 5,
  },
  cardView1: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#9005b3'
  },
  cardView2: {
    display: 'flex',
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
  cardView3: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
  cardView4: {
    position: 'relative',
    paddingLeft: 10,
    top: 9,
    left: 150,
  },
  profileview: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    height: 550,

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageprofile: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  image2: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imagebg: {
    resizeMode: "cover",
    justifyContent: "center"
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  text2: {
    fontSize: 16,
    letterSpacing: 0.3,
  },
  text3: {
    fontFamily: 'roboto',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'normal',
    color: '#9005b3',
    letterSpacing: 0.3,
  },
  textprof1: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    marginTop: 30,
  },
  textprof2: {
    fontSize: 18,
    letterSpacing: 0.3,
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    position: 'relative',
    top: 24,
    fontSize: 25,
    color: '#9005b3',
  },
});

export default main;
