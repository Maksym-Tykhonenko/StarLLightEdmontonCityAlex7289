import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/native';

import {useCallback, useMemo, useRef, useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  lighhtedmntcittPlccFilters,
  lighhtedmntcittPlccParseCoords,
  lighhtedmntcittPlccPlaces,
  type LighhtedmntcittPlccCategory,
  type LighhtedmntcittPlccFilter,
  type LighhtedmntcittPlccPlace,
} from './Lighhtedmntcittplccdatta';
import Orientation from 'react-native-orientation-locker';

const lighhtedmntcittMapCategoryOrder: LighhtedmntcittPlccCategory[] = [
  'leisure',
  'nature',
  'culture',
];

const lighhtedmntcittMapDarkStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const Lighhtedmntcittmap = () => {
  const lighhtedmntcittNavigation = useNavigation<any>();
  const lighhtedmntcittRoute = useRoute<any>();
  const {height: lighhtedmntcittH, width: lighhtedmntcittW} =
    useWindowDimensions();
  const [lighhtedmntcittFilter, setLighhtedmntcittFilter] =
    useState<LighhtedmntcittPlccFilter>('all');
  const [lighhtedmntcittSelected, setLighhtedmntcittSelected] =
    useState<LighhtedmntcittPlccPlace | null>(null);
  const lighhtedmntcittMapRef = useRef<MapView | null>(null);
  const lighhtedmntcittLastFocusedPlaceId = useRef<string | null>(null);
  const lighhtedmntcittOnChangeFilter = useCallback(
    (next: LighhtedmntcittPlccFilter) => {
      setLighhtedmntcittSelected(null);
      lighhtedmntcittLastFocusedPlaceId.current = null;
      setLighhtedmntcittFilter(next);
    },
    [],
  );

  const lighhtedmntcittMapHeight = Math.max(
    270,
    Math.round(lighhtedmntcittH - 50 - 120 - 92 - 80 - 45),
  );

  const lighhtedmntcittFiltered = useMemo(() => {
    if (lighhtedmntcittFilter === 'all') {
      return lighhtedmntcittMapCategoryOrder.flatMap(cat =>
        lighhtedmntcittPlccPlaces.filter(p => p.category === cat),
      );
    }
    return lighhtedmntcittPlccPlaces.filter(
      p => p.category === lighhtedmntcittFilter,
    );
  }, [lighhtedmntcittFilter]);

  const lighhtedmntcittMarkers = useMemo(() => {
    return lighhtedmntcittFiltered
      .map(place => {
        const lighhtedmntcittCoord = lighhtedmntcittPlccParseCoords(
          place.coords,
        );
        if (!lighhtedmntcittCoord) {
          return null;
        }
        return {place, coordinate: lighhtedmntcittCoord};
      })
      .filter(
        (
          x,
        ): x is {
          place: LighhtedmntcittPlccPlace;
          coordinate: {latitude: number; longitude: number};
        } => x !== null,
      );
  }, [lighhtedmntcittFiltered]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const lighhtedmntcittPlaceId: string | undefined =
        lighhtedmntcittRoute?.params?.placeId;
      if (!lighhtedmntcittPlaceId) {
        return;
      }
      if (lighhtedmntcittLastFocusedPlaceId.current === lighhtedmntcittPlaceId) {
        return;
      }

      const lighhtedmntcittTarget = lighhtedmntcittPlccPlaces.find(
        p => p.id === lighhtedmntcittPlaceId,
      );
      if (!lighhtedmntcittTarget) {
        lighhtedmntcittLastFocusedPlaceId.current = lighhtedmntcittPlaceId;
        return;
      }
      const lighhtedmntcittCoord = lighhtedmntcittPlccParseCoords(
        lighhtedmntcittTarget.coords,
      );
      if (!lighhtedmntcittCoord) {
        lighhtedmntcittLastFocusedPlaceId.current = lighhtedmntcittPlaceId;
        return;
      }

      // Ensure the marker is visible, then focus the map and open the card.
      setLighhtedmntcittFilter('all');
      setLighhtedmntcittSelected(lighhtedmntcittTarget);

      requestAnimationFrame(() => {
        lighhtedmntcittMapRef.current?.animateToRegion(
          {
            latitude: lighhtedmntcittCoord.latitude,
            longitude: lighhtedmntcittCoord.longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          },
          450,
        );
      });

      lighhtedmntcittLastFocusedPlaceId.current = lighhtedmntcittPlaceId;
    }, [lighhtedmntcittRoute?.params?.placeId]),
  );

  const lighhtedmntcittInitialRegion = {
    latitude: 53.5444,
    longitude: -113.4909,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12,
  };

  const lighhtedmntcittOnOpenDetail = () => {
    if (!lighhtedmntcittSelected) {
      return;
    }
    setLighhtedmntcittSelected(null);
    lighhtedmntcittNavigation.navigate('Lighhtedmntcittplccdetl', {
      placeId: lighhtedmntcittSelected.id,
    });
  };

  return (
    <View style={styles.lighhtedmntcittRoot}>
      <View style={styles.lighhtedmntcittContent}>
        <View style={styles.lighhtedmntcittHeader}>
          <View style={styles.lighhtedmntcittStatusDot} />
          <View style={styles.lighhtedmntcittHeaderRow}>
            <Image source={require('../../elements/i/lighhtedmntheadic.png')} />
            <Text style={styles.lighhtedmntcittHeaderTitle}>
              {'Welcome to StarLight Casual Edmonton'}
            </Text>
          </View>
        </View>

        <View style={styles.lighhtedmntcittChipsRow}>
          {lighhtedmntcittPlccFilters.map(({key, label}) => {
            const lighhtedmntcittChipActive = lighhtedmntcittFilter === key;
            return (
              <Pressable
                key={key}
                onPress={() => lighhtedmntcittOnChangeFilter(key)}
                style={[
                  styles.lighhtedmntcittChip,
                  lighhtedmntcittChipActive
                    ? styles.lighhtedmntcittChipActive
                    : styles.lighhtedmntcittChipInactive,
                ]}>
                <Text
                  style={[
                    styles.lighhtedmntcittChipText,
                    lighhtedmntcittChipActive
                      ? styles.lighhtedmntcittChipTextActive
                      : styles.lighhtedmntcittChipTextInactive,
                  ]}>
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View
          style={[
            styles.lighhtedmntcittMapShell,
            {height: lighhtedmntcittMapHeight},
          ]}>
          <MapView
            // Force a re-mount so marker filtering is always applied.
            key={lighhtedmntcittFilter}
            ref={ref => {
              lighhtedmntcittMapRef.current = ref;
            }}
            userInterfaceStyle="dark"
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            style={StyleSheet.absoluteFill}
            customMapStyle={lighhtedmntcittMapDarkStyle}
            initialRegion={lighhtedmntcittInitialRegion}
            mapType="standard">
            {lighhtedmntcittMarkers.map(({place, coordinate}) => (
              <Marker
                key={place.id}
                coordinate={coordinate}
                tracksViewChanges={false}
                pinColor="#FFFFFF"
                onPress={() => setLighhtedmntcittSelected(place)}>
                <Image
                  source={require('../../elements/i/lighhtedmntmarker.png')}
                />
              </Marker>
            ))}
          </MapView>
        </View>
      </View>

      <Modal
        visible={lighhtedmntcittSelected !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setLighhtedmntcittSelected(null)}>
        <Pressable
          style={styles.lighhtedmntcittModalBackdrop}
          onPress={() => setLighhtedmntcittSelected(null)}>
          <Pressable
            onPress={() => {}}
            style={[
              styles.lighhtedmntcittCard,
              {maxWidth: Math.min(360, lighhtedmntcittW - 32)},
            ]}>
            {lighhtedmntcittSelected ? (
              <>
                <Pressable
                  style={({pressed}) => [
                    styles.lighhtedmntcittCardClose,
                    pressed && styles.lighhtedmntcittCardClosePressed,
                  ]}
                  onPress={() => setLighhtedmntcittSelected(null)}>
                  <Image
                    source={require('../../elements/i/lighhtedmncls.png')}
                  />
                </Pressable>
                <Pressable onPress={lighhtedmntcittOnOpenDetail}>
                  <View style={styles.lighhtedmntcittCardImageWrap}>
                    {lighhtedmntcittSelected.image && (
                      <Image
                        source={lighhtedmntcittSelected.image}
                        style={styles.lighhtedmntcittCardImage}
                        resizeMode="cover"
                      />
                    )}
                    <View style={styles.lighhtedmntcittCardOverlay}>
                      <Text
                        style={styles.lighhtedmntcittCardTitle}
                        numberOfLines={2}>
                        {lighhtedmntcittSelected.name}
                      </Text>
                      <View style={styles.lighhtedmntcittCardCoordsRow}>
                        <Image
                          source={require('../../elements/i/lighhtedmnthloc.png')}
                        />
                        <Text
                          style={styles.lighhtedmntcittCardCoords}
                          numberOfLines={1}>
                          {lighhtedmntcittSelected.coords}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </>
            ) : null}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
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

  lighhtedmntcittRoot: {
    flex: 1,
    backgroundColor: '#E8304B',
  },
  lighhtedmntcittContent: {
    paddingTop: 50,
    paddingBottom: 120,
  },
  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 16,
    width: '96%',
    alignSelf: 'center',
    minHeight: 92,
  },

  lighhtedmntcittChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
    paddingHorizontal: 6,
  },
  lighhtedmntcittChip: {
    height: 40,
    paddingHorizontal: 12,
    borderRadius: 11,
    minWidth: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  lighhtedmntcittChipActive: {
    backgroundColor: '#AD182E',
  },
  lighhtedmntcittChipInactive: {
    backgroundColor: '#AD182E',
  },
  lighhtedmntcittChipText: {
    fontSize: 20,
    fontWeight: '600',
  },
  lighhtedmntcittChipTextActive: {
    color: '#FFFFFF',
  },
  lighhtedmntcittChipTextInactive: {
    color: '#610A17',
  },
  lighhtedmntcittMapShell: {
    width: '89%',
    alignSelf: 'center',
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  lighhtedmntcittModalBackdrop: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  lighhtedmntcittCard: {
    width: '60%',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#AD182E',
  },
  lighhtedmntcittCardClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 4,
    width: 43,
    height: 43,
    borderRadius: 10,
    backgroundColor: '#AD182E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittCardClosePressed: {
    opacity: 0.85,
  },
  lighhtedmntcittCardCloseGlyph: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
    marginTop: -2,
  },
  lighhtedmntcittCardImageWrap: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  lighhtedmntcittCardImage: {
    width: '100%',
    height: 320,
    backgroundColor: '#4A1218',
  },

  lighhtedmntcittCardOverlay: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    backgroundColor: '#E8304BCC',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  lighhtedmntcittCardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  lighhtedmntcittCardCoordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  lighhtedmntcittCardCoords: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Lighhtedmntcittmap;
