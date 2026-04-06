import {lighhtedmntcittBllogReadSavedIds} from './Lighhtedmntcittbllogsavd';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Lighhtedmntcittlayyt from '../Lighhtedmntcittcpnts/Lighhtedmntcittlayyt';

import {lighhtedmntcittBllogItems} from './Lighhtedmntcittbllogdatta';

import LinearGradient from 'react-native-linear-gradient';

const Lighhtedmntcittbllog = () => {
  const lighhtedmntcittNavigation = useNavigation();
  const [lighhtedmntcittSavedSet, setLighhtedmntcittSavedSet] = useState<
    Set<string>
  >(() => new Set());

  const lighhtedmntcittReloadSaved = useCallback(() => {
    lighhtedmntcittBllogReadSavedIds().then(ids =>
      setLighhtedmntcittSavedSet(new Set(ids)),
    );
  }, []);

  useFocusEffect(
    useCallback(() => {
      lighhtedmntcittReloadSaved();
    }, [lighhtedmntcittReloadSaved]),
  );

  return (
    <>
      <Lighhtedmntcittlayyt>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lighhtedmntcittScroll}>
          <View style={styles.lighhtedmntcittHeader}>
            <View style={styles.lighhtedmntcittStatusDot} />
            <View style={styles.lighhtedmntcittHeaderRow}>
              <Image
                source={require('../../elements/i/lighhtedmntheadic.png')}
              />
              <Text style={styles.lighhtedmntcittHeaderTitle}>
                {'Welcome to StarLight Casual Edmonton'}
              </Text>
            </View>
          </View>

          {lighhtedmntcittBllogItems.map(lighhtedmntcittItem => {
            const lighhtedmntcittIsSaved = lighhtedmntcittSavedSet.has(
              lighhtedmntcittItem.id,
            );
            return (
              <View
                key={lighhtedmntcittItem.id}
                style={styles.lighhtedmntcittCard}>
                <Text style={styles.lighhtedmntcittCardTitle}>
                  {lighhtedmntcittItem.title}
                </Text>
                <View style={styles.lighhtedmntcittCardRule} />
                <Text
                  style={styles.lighhtedmntcittCardPreview}
                  numberOfLines={3}>
                  {lighhtedmntcittItem.preview}
                </Text>
                <View style={styles.lighhtedmntcittCardActions}>
                  <Pressable
                    onPress={() =>
                      lighhtedmntcittNavigation.navigate(
                        'Lighhtedmntcittbllogdet',
                        {
                          blogId: lighhtedmntcittItem.id,
                        },
                      )
                    }
                    style={({pressed}) => [
                      styles.lighhtedmntcittMoreBtn,
                      pressed && styles.lighhtedmntcittMoreBtnPressed,
                    ]}>
                    <Text style={styles.lighhtedmntcittMoreBtnText}>More</Text>
                  </Pressable>
                  {lighhtedmntcittIsSaved ? (
                    <View style={styles.lighhtedmntcittHeartBadge}>
                      <Image
                        source={require('../../elements/i/lighhtedmsavedcard.png')}
                      />
                    </View>
                  ) : null}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </Lighhtedmntcittlayyt>
      <LinearGradient
        pointerEvents="none"
        colors={['rgba(174, 6, 6, 0)', 'rgba(0, 0, 0, 0.48)']}
        style={styles.lighhtedmntcittGradient}
      />
    </>
  );
};

const styles = StyleSheet.create({
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

  lighhtedmntcittScroll: {
    paddingTop: 50,
    paddingBottom: 120,
    paddingHorizontal: 8,
  },
  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 20,
    width: '96%',
    alignSelf: 'center',
    minHeight: 92,
  },

  lighhtedmntcittHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lighhtedmntcittHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    width: '60%',
  },
  lighhtedmntcittCard: {
    width: '98%',
    alignSelf: 'center',
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  lighhtedmntcittCardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  lighhtedmntcittCardRule: {
    height: 2,
    backgroundColor: '#610A17',
    marginBottom: 12,
  },
  lighhtedmntcittCardPreview: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 16,
  },
  lighhtedmntcittCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  lighhtedmntcittMoreBtn: {
    backgroundColor: '#AEA47E',
    paddingHorizontal: 36,
    borderRadius: 11,
    minWidth: 165,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lighhtedmntcittHeartBadge: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  lighhtedmntcittHeartBadgeGlyph: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 1,
  },
  lighhtedmntcittMoreBtnPressed: {
    opacity: 0.88,
  },
  lighhtedmntcittMoreBtnText: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: '600',
  },
  lighhtedmntcittGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
  },
});

export default Lighhtedmntcittbllog;
