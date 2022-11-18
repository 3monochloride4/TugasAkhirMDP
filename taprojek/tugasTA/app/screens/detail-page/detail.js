import React from 'react';
import {View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image} from 'react-native';

import Styles from './detail.styles';
import Styles2 from '../home-page/index.styles';

export default function Detail({route, navigation}) {
  const {name, price, desc} = route.params
  
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Detail Paket</Text>
          </View>
          <View style={Styles2.scrollView}>
              <View style={Styles2.cardView}>
                <View style={Styles2.cardView1}>
                  <Image source={require('./globe2.png')} style={Styles2.image} />
                  <View style={Styles2.cardView2}>
                    <Text style={Styles2.text1}>{(name)}</Text>
                    <Text style={Styles2.text2}>{'30 Hari'}</Text>
                  </View>
                </View>
                <View style={Styles2.cardView3}>
                  <Text style={Styles2.text3}>{(price)}</Text>
                </View>       
              </View>
          </View>
          <View style={Styles.view2}>
            <View style={Styles.view3}>
              <Text style={Styles.text}>Kamu bakal dapat:</Text>
            </View>
            <View style={Styles.list}>
              <Text style={Styles.text1}>{(desc)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
