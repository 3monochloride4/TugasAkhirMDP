import * as React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import Styles from '../home-page/index.styles';
export default function Profile() {

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
          <View style={Styles.profileview}>
            <Image source={require('../home-page/fotoprofil.png')} style={Styles.imageprofile}/>
            <Text style={Styles.textprof1}>Zainul Muttaqin</Text>
            <Text style={Styles.textprof2}>21120118130073</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
