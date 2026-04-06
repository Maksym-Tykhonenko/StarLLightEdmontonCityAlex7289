import {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const lighhtedmntcittData = [
  {
    id: 1,
    title: 'Welcome to Edmonton',
    description:
      'I’m your personal guide. I’ll show you the best places in the city — from popular spots to hidden locations worth your time.',
    buttonText: 'Next',
    image: require('../../elements/i/lighhtedmntcion1.png'),
  },
  {
    id: 2,
    title: 'Explore by Categories',
    description:
      'Find locations grouped by type: entertainment, nature, culture, food, and more. Choose what fits your mood and start exploring.',
    buttonText: 'Continue',
    image: require('../../elements/i/lighhtedmntcion2.png'),
  },
  {
    id: 3,
    title: 'Plan Your Route',
    description:
      'Use the interactive map to navigate the city. Save places you like and build your own route across Edmonton.',
    buttonText: 'Understood',
    image: require('../../elements/i/lighhtedmntcion3.png'),
  },
  {
    id: 4,
    title: 'Test Your Knowledge',
    description:
      'Complete short challenges about the city. Choose the correct word in each sentence and earn stars for every right answer.',
    buttonText: 'Okay',
    image: require('../../elements/i/lighhtedmntcion4.png'),
  },
  {
    id: 5,
    title: 'Collect and Unlock',
    description:
      'Use your stars to unlock unique wallpapers. Build your collection and keep exploring the city with new rewards.',
    buttonText: 'Start',
    image: require('../../elements/i/lighhtedmntcion5.png'),
  },
];

const Lighhtedmntcittonbr = () => {
  const navigation = useNavigation();
  const [lighhtedmntcittIdx, setLighhtedmntcittIdx] = useState(0);

  const lighhtedmntcittNext = () => {
    lighhtedmntcittIdx < 3
      ? setLighhtedmntcittIdx(lighhtedmntcittIdx + 1)
      : navigation.navigate('Lighhtedmntcitttab');
  };

  return (
    <ImageBackground
      source={require('../../elements/i/lighhtedmntcittbg.png')}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.lighhtedmntcittContainer}>
          <Image source={lighhtedmntcittData[lighhtedmntcittIdx].image} />
          <View style={styles.lighhtedmntcittTitleContainer}>
            <Text style={styles.lighhtedmntcittTitle}>
              {lighhtedmntcittData[lighhtedmntcittIdx].title}
            </Text>
            <Text style={styles.lighhtedmntcittDescription}>
              {lighhtedmntcittData[lighhtedmntcittIdx].description}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.lighhtedmntcittButton}
              onPress={lighhtedmntcittNext}>
              <Text style={styles.lighhtedmntcittButtonText}>
                {lighhtedmntcittData[lighhtedmntcittIdx].buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },

  lighhtedmntcittContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 66,
  },
  lighhtedmntcittTitleContainer: {
    width: '96%',
    alignSelf: 'center',
    padding: 13,
    backgroundColor: '#E8304B99',
    borderWidth: 1,
    borderColor: '#810000',
    borderRadius: 22,
    paddingVertical: 20,
  },
  lighhtedmntcittButton: {
    height: 62,
    backgroundColor: '#AEA47E',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  lighhtedmntcittDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: 25,
    textAlign: 'center',
  },
  lighhtedmntcittButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
});

export default Lighhtedmntcittonbr;
