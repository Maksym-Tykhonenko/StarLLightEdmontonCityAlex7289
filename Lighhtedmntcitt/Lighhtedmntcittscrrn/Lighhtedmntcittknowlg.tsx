import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Lighhtedmntcittlayyt from '../Lighhtedmntcittcpnts/Lighhtedmntcittlayyt';

const Lighhtedmntcittknowlg = () => {
  const lighhtedmntcittNavigation = useNavigation();

  return (
    <Lighhtedmntcittlayyt>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lighhtedmntcittScroll}>
        <View style={styles.lighhtedmntcittHeader}>
          <View style={styles.lighhtedmntcittStatusDot} />
          <View style={styles.lighhtedmntcittHeaderRow}>
            <Image source={require('../../elements/i/lighhtedmntheadic.png')} />
            <Text style={styles.lighhtedmntcittHeaderTitle}>
              {'Welcome to StarLight Casual Edmonton'}
            </Text>
          </View>
        </View>

        <View style={styles.lighhtedmntcittHeroWrap}>
          <Image source={require('../../elements/i/lighhtedmsavgmintr.png')} />
        </View>

        <View style={styles.lighhtedmntcittCard}>
          <Text style={styles.lighhtedmntcittCardTitle}>Knowledge game</Text>
          <Text style={styles.lighhtedmntcittCardBody}>
            Choose the correct word for the sentence, you will have 5 rounds,
            but be careful, time is limited. Ready to start?
          </Text>
          <Pressable
            onPress={() =>
              lighhtedmntcittNavigation.navigate('Lighhtedmntcittknowlgpla', {
                lighhtedmntcittSessionId: Date.now(),
              })
            }
            style={({pressed}) => [
              styles.lighhtedmntcittStartBtn,
              pressed && styles.lighhtedmntcittStartBtnPressed,
            ]}>
            <Text style={styles.lighhtedmntcittStartBtnText}>Start</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Lighhtedmntcittlayyt>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  lighhtedmntcittScroll: {
    paddingTop: 50,
    paddingBottom: 120,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 12,
    width: '96%',
    minHeight: 92,
  },
  lighhtedmntcittStatusDot: {
    position: 'absolute',
    top: 39,
    right: 14,
    width: 16,
    height: 16,
    borderRadius: 500,
    backgroundColor: '#00FF00',
    zIndex: 2,
  },

  lighhtedmntcittHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    width: '60%',
  },
  lighhtedmntcittHeroWrap: {
    width: '100%',
    alignItems: 'center',
    top: 10,
  },

  lighhtedmntcittCard: {
    width: '97%',
    backgroundColor: '#AD182E',
    borderRadius: 22,
    paddingVertical: 22,
    paddingHorizontal: 18,
    marginTop: 4,
    paddingBottom: 12,
  },
  lighhtedmntcittCardTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 14,
  },
  lighhtedmntcittCardBody: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 18,
  },
  lighhtedmntcittStartBtn: {
    backgroundColor: '#AEA47E',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 62,
  },
  lighhtedmntcittStartBtnPressed: {
    opacity: 0.88,
  },
  lighhtedmntcittStartBtnText: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Lighhtedmntcittknowlg;
