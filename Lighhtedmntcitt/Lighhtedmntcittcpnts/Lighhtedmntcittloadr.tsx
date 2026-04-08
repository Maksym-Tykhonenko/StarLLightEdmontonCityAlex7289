import React, {useEffect, useRef} from 'react';
import {View, ScrollView, ImageBackground, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const LighhtedmntcittLoader = ` <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
          }

          .loading-wave {
            width: 300px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }

          .loading-bar {
            width: 20px;
            height: 10px;
            margin: 0 5px;
            background-color: #3498db;
            border-radius: 5px;
            animation: loading-wave-animation 1s ease-in-out infinite;
          }

          .loading-bar:nth-child(2) {
            animation-delay: 0.1s;
          }

          .loading-bar:nth-child(3) {
            animation-delay: 0.2s;
          }

          .loading-bar:nth-child(4) {
            animation-delay: 0.3s;
          }

          @keyframes loading-wave-animation {
            0% { height: 10px; }
            50% { height: 50px; }
            100% { height: 10px; }
          }
        </style>
      </head>
      <body>
        <div class="loading-wave">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
      </body>
    </html>`;

const Lighhtedmntcittloadr = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  //useEffect(() => {
  //  timerRef.current = setTimeout(() => {
  //    navigation.replace('Lighhtedmntcittonbr');
  //  }, 6000);
//
  //  return () => {
  //    if (timerRef.current) {
  //      clearTimeout(timerRef.current);
  //      timerRef.current = null;
  //      console.log('timer cleared');
  //    }
  //  };
  //}, [navigation]);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../elements/i/lighhtedmntcittbg.png')}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, height: 600}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../elements/i/lighhtedmntcload.png')} />
        </View>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 10,
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: LighhtedmntcittLoader}}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Lighhtedmntcittloadr;
