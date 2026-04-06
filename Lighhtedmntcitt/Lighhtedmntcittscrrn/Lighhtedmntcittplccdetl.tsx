import {
  lighhtedmntcittPlccIsPlaceSaved,
  lighhtedmntcittPlccTogglePlaceSaved,
} from './Lighhtedmntcittplccsavd';
import {useFocusEffect} from '@react-navigation/native';

import {useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Lighhtedmntcittlayyt from '../Lighhtedmntcittcpnts/Lighhtedmntcittlayyt';
import {lighhtedmntcittPlccPlaceById} from './Lighhtedmntcittplccdatta';

const Lighhtedmntcittplccdetl = ({navigation, route}: any) => {
  const {placeId: lighhtedmntcittPlaceId} = route.params;
  const lighhtedmntcittPlace = lighhtedmntcittPlccPlaceById(
    lighhtedmntcittPlaceId,
  );
  const [lighhtedmntcittSaved, setLighhtedmntcittSaved] = useState(false);
  const [lighhtedmntcittBookmarkBusy, setLighhtedmntcittBookmarkBusy] =
    useState(false);

  const lighhtedmntcittRefreshSaved = useCallback(async () => {
    const lighhtedmntcittOn = await lighhtedmntcittPlccIsPlaceSaved(
      lighhtedmntcittPlaceId,
    );
    setLighhtedmntcittSaved(lighhtedmntcittOn);
  }, [lighhtedmntcittPlaceId]);

  useFocusEffect(
    useCallback(() => {
      lighhtedmntcittRefreshSaved();
    }, [lighhtedmntcittRefreshSaved]),
  );

  const lighhtedmntcittOnToggleSave = async () => {
    if (lighhtedmntcittBookmarkBusy) {
      return;
    }
    setLighhtedmntcittBookmarkBusy(true);
    try {
      const lighhtedmntcittNext = await lighhtedmntcittPlccTogglePlaceSaved(
        lighhtedmntcittPlaceId,
      );
      setLighhtedmntcittSaved(lighhtedmntcittNext);
    } finally {
      setLighhtedmntcittBookmarkBusy(false);
    }
  };

  const lighhtedmntcittOnSharePlace = () => {
    if (!lighhtedmntcittPlace) {
      return;
    }
    Share.share({
      message: `${lighhtedmntcittPlace.name}\n📍 ${lighhtedmntcittPlace.coords}\n\n${lighhtedmntcittPlace.description}\n\n— StarLLight Edmonton City`,
    });
  };

  return (
    <Lighhtedmntcittlayyt>
      <ScrollView
        style={styles.lighhtedmntcittDetlScroll}
        contentContainerStyle={styles.lighhtedmntcittDetlContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.lighhtedmntcittHeader}>
          <View style={styles.lighhtedmntcittStatusDot} />
          <View style={styles.lighhtedmntcittHeaderRow}>
            <Image source={require('../../elements/i/lighhtedmntheadic.png')} />
            <Text style={styles.lighhtedmntcittHeaderTitle}>
              {'Welcome to StarLight Casual Edmonton'}
            </Text>
          </View>
        </View>

        <View style={styles.lighhtedmntcittDetlCard}>
          <View style={styles.lighhtedmntcittDetlImageWrap}>
            <Image
              source={lighhtedmntcittPlace?.image}
              style={styles.lighhtedmntcittDetlImage}
              resizeMode="cover"
            />

            <Pressable
              onPress={() => navigation.goBack()}
              style={({pressed}) => [
                styles.lighhtedmntcittDetlBackBtn,
                pressed && styles.lighhtedmntcittDetlBtnPressed,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Back">
              <Image source={require('../../elements/i/lighhtedmnthbac.png')} />
            </Pressable>
          </View>

          <View style={styles.lighhtedmntcittDetlTextBlock}>
            <Text style={styles.lighhtedmntcittDetlTitle}>
              {lighhtedmntcittPlace?.name}
            </Text>

            <View style={styles.lighhtedmntcittStripCoordsRow}>
              <Image source={require('../../elements/i/lighhtedmnthloc.png')} />
              <Text style={styles.lighhtedmntcittDetlCoords}>
                {lighhtedmntcittPlace?.coords}
              </Text>
            </View>

            <Text style={styles.lighhtedmntcittDetlBody}>
              {lighhtedmntcittPlace?.description}
            </Text>

            <View style={styles.lighhtedmntcittDetlActions}>
              <Pressable
                onPress={() => {
                  if (!lighhtedmntcittPlace) {
                    return;
                  }
                  navigation.navigate('Lighhtedmntcitttab', {
                    screen: 'Lighhtedmntcittmap',
                    params: {placeId: lighhtedmntcittPlace.id},
                  });
                }}
                style={({pressed}) => [
                  styles.lighhtedmntcittDetlMapBtn,
                  pressed && styles.lighhtedmntcittDetlMapBtnPressed,
                ]}>
                <Text style={styles.lighhtedmntcittDetlMapBtnText}>
                  Open in map
                </Text>
              </Pressable>
              <Pressable
                onPress={lighhtedmntcittOnToggleSave}
                disabled={lighhtedmntcittBookmarkBusy}
                style={({pressed}) => [
                  styles.lighhtedmntcittDetlIconBtn,
                  lighhtedmntcittSaved &&
                    styles.lighhtedmntcittDetlIconBtnSaved,
                  pressed && styles.lighhtedmntcittDetlBtnPressed,
                ]}>
                <Image
                  source={
                    lighhtedmntcittSaved
                      ? require('../../elements/i/lighhtedmnsaved.png')
                      : require('../../elements/i/lighhtedmntsave.png')
                  }
                />
              </Pressable>
              <Pressable
                onPress={lighhtedmntcittOnSharePlace}
                style={({pressed}) => [
                  styles.lighhtedmntcittDetlIconBtn,
                  pressed && styles.lighhtedmntcittDetlBtnPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel="Share">
                <Image
                  source={require('../../elements/i/lighhtedmntshr.png')}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </Lighhtedmntcittlayyt>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittDetlImageWrap: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 6,
  },
  lighhtedmntcittDetlImage: {
    width: '100%',
    height: 270,
  },

  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 26,
    width: '96%',
    alignSelf: 'center',
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
  lighhtedmntcittStripCoordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
    marginBottom: 12,
    justifyContent: 'center',
  },

  lighhtedmntcittDetlScroll: {
    flex: 1,
  },
  lighhtedmntcittDetlContent: {
    paddingTop: 50,
    paddingBottom: 120,
    alignItems: 'center',
  },
  lighhtedmntcittDetlCard: {
    width: '96%',
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingBottom: 16,
  },

  lighhtedmntcittDetlTextBlock: {
    padding: 9,
    paddingBottom: 0,
  },

  lighhtedmntcittDetlBackBtn: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#AD182E',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  lighhtedmntcittDetlBackGlyph: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '300',
    marginTop: -4,
  },
  lighhtedmntcittDetlTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  lighhtedmntcittDetlCoords: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  lighhtedmntcittDetlBody: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: '500',
  },
  lighhtedmntcittDetlActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  lighhtedmntcittDetlMapBtn: {
    flex: 1,
    height: 62,
    backgroundColor: '#AEA47E',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lighhtedmntcittDetlMapBtnPressed: {
    opacity: 0.88,
  },
  lighhtedmntcittDetlMapBtnText: {
    color: '#1A1A1A',
    fontSize: 20,
    fontWeight: '600',
  },
  lighhtedmntcittDetlIconBtn: {
    width: 62,
    height: 62,
    borderRadius: 11,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittDetlIconBtnSaved: {
    backgroundColor: '#AEA47E',
  },

  lighhtedmntcittDetlBookmarkImg: {
    width: 26,
    height: 26,
  },
  lighhtedmntcittDetlShareGlyph: {
    color: '#1A1A1A',
    fontSize: 22,
    fontWeight: '600',
  },
  lighhtedmntcittDetlBtnPressed: {
    opacity: 0.88,
  },
});

export default Lighhtedmntcittplccdetl;
