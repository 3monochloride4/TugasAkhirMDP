import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
  ImageBackground,
} from 'react-native';

import Styles from './index.styles';

export default function Index({navigation}) {
  
  const paket = [
    {
      id: 1,
      nama: 'Paket Troposfer 8 GB',
      harga: 'Rp. 60.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 8 GB\nYoutube Unlimited\nNelpon ke semua operator 30 menit",
    },
    {
      id: 2,
      nama: 'Paket Stratosfer 9 GB',
      harga: 'Rp. 80.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 9 GB\nYoutube Unlimited\nNelpon ke semua operator 40 menit",
    },
    {
      id: 3,
      nama: 'Paket Mesosfer 10 GB',
      harga: 'Rp. 100.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 10 GB\nYoutube Unlimited\nNelpon ke semua operator 50 menit",
    },
    {
      id: 4,
      nama: 'Paket Termosfer 11 GB',
      harga: 'Rp. 120.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 11 GB\nYoutube Unlimited\nNelpon ke semua operator 60 menit",
    },
    {
      id: 5,
      nama: 'Paket Ionosfer 12 GB',
      harga: 'Rp. 140.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 12 GB\nYoutube Unlimited\nNelpon ke semua operator 70 menit",
    },
    {
      id: 6,
      nama: 'Paket Eksosfer 13 GB',
      harga: 'Rp. 160.000',
      deskripsi: "Aktif 30 Hari\nKuota Utama 13 GB\nYoutube Unlimited\nNelpon ke semua operator 80 menit",
    },
  ];

  const onPressCardView = (item) => {
    ToastAndroid.showWithGravity(
      item.nama,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    navigation.navigate('Detail Page', {name: item.nama, price: item.harga, desc: item.deskripsi});
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Outra!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile Page')} style={Styles.iconview}>
            <Image source={require('../splash-screen/logota.png')} style={Styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={Styles.scrollView}>
        <ImageBackground source={require('./background.png')} style={Styles.imagebg}>
          {paket.map(item => (
            <TouchableOpacity
              key={item.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(item)}>
              <View style={Styles.cardView1}>
                <Image source={require('./globe2.png')} style={Styles.image} />
                <View style={Styles.cardView2}>
                  <Text style={Styles.text1}>{`${item.nama}`}</Text>
                  <Text style={Styles.text2}>{'30 Hari'}</Text>
                </View>
              </View>
              <View style={Styles.cardView3}>
                <Text style={Styles.text3}>{`${item.harga}`}</Text>
                <View style={Styles.cardView4}>
                  <Image source={require('./check.png')} style={Styles.image2} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
