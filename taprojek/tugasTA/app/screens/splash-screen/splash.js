import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home Page');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('./logota.png')} style={{width: 80, height: 80}} />
      <Text style={styles.logo}>Outra!</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logotext: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'roboto',
    color: '#9005b3',
    marginTop: 5,
  },
});