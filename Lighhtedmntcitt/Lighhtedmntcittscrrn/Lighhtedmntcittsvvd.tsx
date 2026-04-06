// SAVED

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {useCallback, useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Lighhtedmntcittlayyt from '../Lighhtedmntcittcpnts/Lighhtedmntcittlayyt';

import {
  lighhtedmntcittPlccFacts,
  lighhtedmntcittPlccFilters,
  lighhtedmntcittPlccPlaceById,
  type LighhtedmntcittPlccCategory,
  type LighhtedmntcittPlccFilter,
  type LighhtedmntcittPlccPlace,
} from './Lighhtedmntcittplccdatta';
import {lighhtedmntcittPlccReadSavedIds} from './Lighhtedmntcittplccsavd';

const lighhtedmntcittPlccCategoryTitle: Record<
  LighhtedmntcittPlccCategory,
  string
> = {
  leisure: 'Leisure',
  nature: 'Nature',
  culture: 'Culture',
};

const lighhtedmntcittPlccPickFactIdx = (avoidIdx?: number) => {
  const lighhtedmntcittLen = lighhtedmntcittPlccFacts.length;
  if (lighhtedmntcittLen <= 0) {
    return 0;
  }
  if (lighhtedmntcittLen === 1) {
    return 0;
  }
  let lighhtedmntcittNext = Math.floor(Math.random() * lighhtedmntcittLen);
  let lighhtedmntcittTries = 0;
  while (
    avoidIdx !== undefined &&
    lighhtedmntcittNext === avoidIdx &&
    lighhtedmntcittTries < 24
  ) {
    lighhtedmntcittNext = Math.floor(Math.random() * lighhtedmntcittLen);
    lighhtedmntcittTries += 1;
  }
  return lighhtedmntcittNext;
};

const Lighhtedmntcittsvvd = () => {
  const lighhtedmntcittNavigation = useNavigation<LighhtedmntcittSvvdHomeNav>();
  const {width: lighhtedmntcittWinW} = useWindowDimensions();
  const [lighhtedmntcittFilter, setLighhtedmntcittFilter] =
    useState<LighhtedmntcittPlccFilter>('all');
  const [lighhtedmntcittFactIdx, setLighhtedmntcittFactIdx] = useState(() =>
    lighhtedmntcittPlccPickFactIdx(),
  );
  const [lighhtedmntcittSavedIds, setLighhtedmntcittSavedIds] = useState<
    string[]
  >([]);

  const lighhtedmntcittReloadSaved = useCallback(() => {
    lighhtedmntcittPlccReadSavedIds().then(setLighhtedmntcittSavedIds);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLighhtedmntcittFactIdx(prev => lighhtedmntcittPlccPickFactIdx(prev));
      lighhtedmntcittReloadSaved();
    }, [lighhtedmntcittReloadSaved]),
  );

  const lighhtedmntcittCardWidth = Math.round(
    (lighhtedmntcittWinW - 32) * 0.62,
  );
  const lighhtedmntcittCardHeight = Math.round(lighhtedmntcittCardWidth * 1.38);

  const lighhtedmntcittSavedPlaces = useMemo(() => {
    const lighhtedmntcittOrdered = lighhtedmntcittSavedIds
      .map(id => lighhtedmntcittPlccPlaceById(id))
      .filter((p): p is LighhtedmntcittPlccPlace => p !== undefined);
    if (lighhtedmntcittFilter === 'all') {
      return lighhtedmntcittOrdered;
    }
    return lighhtedmntcittOrdered.filter(
      p => p.category === lighhtedmntcittFilter,
    );
  }, [lighhtedmntcittSavedIds, lighhtedmntcittFilter]);

  const lighhtedmntcittFactText =
    lighhtedmntcittPlccFacts[lighhtedmntcittFactIdx] ?? '';

  const lighhtedmntcittOnShareFact = () => {
    Share.share({
      message: `Interesting fact: ${lighhtedmntcittFactText} — StarLLight Edmonton City`,
    });
  };

  const lighhtedmntcittOnGoPlaces = () => {
    lighhtedmntcittNavigation.navigate('Lighhtedmntcitttab', {
      screen: 'Lighhtedmntcittplcc',
    });
  };

  const lighhtedmntcittIsEmpty = lighhtedmntcittSavedPlaces.length === 0;

  return (
    <Lighhtedmntcittlayyt>
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

        <View style={styles.lighhtedmntcittFeatured}>
          <View style={styles.lighhtedmntcittFeaturedInner}>
            <Image source={require('../../elements/i/lighhtedmnthfact.png')} />
            <View style={styles.lighhtedmntcittFeaturedTextCol}>
              <Text style={styles.lighhtedmntcittFeaturedHeading}>
                Interesting fact
              </Text>
              <Text style={styles.lighhtedmntcittFeaturedBody}>
                {lighhtedmntcittFactText}
              </Text>
              <Pressable
                onPress={lighhtedmntcittOnShareFact}
                style={({pressed}) => [
                  styles.lighhtedmntcittShareBtn,
                  pressed && styles.lighhtedmntcittShareBtnPressed,
                ]}>
                <Text style={styles.lighhtedmntcittShareBtnText}>Share</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.lighhtedmntcittChipsRow}>
          {lighhtedmntcittPlccFilters.map(({key, label}) => {
            const lighhtedmntcittChipActive = lighhtedmntcittFilter === key;
            return (
              <Pressable
                key={key}
                onPress={() => setLighhtedmntcittFilter(key)}
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

        {lighhtedmntcittIsEmpty ? (
          <>
            <View style={styles.lighhtedmntcittEmptyWrap}>
              <View style={styles.lighhtedmntcittEmptyInner}>
                <Image
                  source={require('../../elements/i/lighhtedmsnosav.png')}
                />
                <View style={styles.lighhtedmntcittEmptyTextCol}>
                  <Text style={styles.lighhtedmntcittOopsTitle}>Oops</Text>
                  <Text style={styles.lighhtedmntcittEmptyBody}>
                    {
                      "You don't have any saves in this category yet, go to locations and choose something interesting for yourself."
                    }
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              onPress={lighhtedmntcittOnGoPlaces}
              style={({pressed}) => [
                styles.lighhtedmntcittGoPlacesBtn,
                pressed && styles.lighhtedmntcittShareBtnPressed,
              ]}>
              <Text style={styles.lighhtedmntcittGoPlacesBtnText}>
                Go to Places
              </Text>
            </Pressable>
          </>
        ) : (
          <View style={styles.lighhtedmntcittPlacesBlock}>
            <ScrollView
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              contentContainerStyle={styles.lighhtedmntcittHScrollContent}>
              {lighhtedmntcittSavedPlaces.map((place, lighhtedmntcittIdx) => (
                <LighhtedmntcittSvvdStripCard
                  key={place.id}
                  place={place}
                  width={lighhtedmntcittCardWidth}
                  height={lighhtedmntcittCardHeight}
                  marginRight={
                    lighhtedmntcittIdx === lighhtedmntcittSavedPlaces.length - 1
                      ? 0
                      : 12
                  }
                  onPress={() =>
                    lighhtedmntcittNavigation.navigate(
                      'Lighhtedmntcittplccdetl',
                      {placeId: place.id},
                    )
                  }
                />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </Lighhtedmntcittlayyt>
  );
};

function LighhtedmntcittSvvdStripCard({
  place,
  width: lighhtedmntcittWidth,
  height: lighhtedmntcittHeight,
  marginRight: lighhtedmntcittMarginRight,
  onPress: lighhtedmntcittOnPress,
}: {
  place: LighhtedmntcittPlccPlace;
  width: number;
  height: number;
  marginRight: number;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={lighhtedmntcittOnPress}
      style={{
        width: 200,
        height: 280,
        marginRight: lighhtedmntcittMarginRight,
      }}>
      <View
        style={[
          styles.lighhtedmntcittStripCard,
          styles.lighhtedmntcittStripCardFill,
        ]}>
        <Image
          source={place.image}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.35)']}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
        <View style={styles.lighhtedmntcittStripOverlayPill}>
          <Text style={styles.lighhtedmntcittStripTitle} numberOfLines={2}>
            {place.name}
          </Text>

          <View style={styles.lighhtedmntcittStripCoordsRow}>
            <Image source={require('../../elements/i/lighhtedmnthloc.png')} />
            <Text style={styles.lighhtedmntcittStripCoords} numberOfLines={1}>
              {place.coords}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  lighhtedmntcittFeatured: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#AD182E',
    paddingBottom: 0,
    paddingTop: 8,
  },
  lighhtedmntcittFeaturedInner: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'stretch',
  },

  lighhtedmntcittFeaturedTextCol: {
    flex: 1,
    justifyContent: 'space-between',
  },
  lighhtedmntcittFeaturedHeading: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  lighhtedmntcittFeaturedBody: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 19,
    width: '80%',
  },
  lighhtedmntcittShareBtn: {
    backgroundColor: '#AEA47E',
    width: 195,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    marginBottom: 8,
  },
  lighhtedmntcittShareBtnPressed: {
    opacity: 0.88,
  },
  lighhtedmntcittShareBtnText: {
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '700',
  },
  lighhtedmntcittChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
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
  lighhtedmntcittPlacesBlock: {
    marginBottom: 22,
  },
  lighhtedmntcittSectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  lighhtedmntcittHScrollContent: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingRight: 2,
    paddingLeft: 6,
  },
  lighhtedmntcittStripCard: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  lighhtedmntcittStripCardFill: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  lighhtedmntcittStripCoordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  lighhtedmntcittStripPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#4A1218',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittPlaceholderHint: {
    color: '#9E6B72',
    fontSize: 13,
    fontWeight: '600',
  },
  lighhtedmntcittStripOverlayPill: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    backgroundColor: '#E8304BCC',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittStripTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  lighhtedmntcittStripCoords: {
    color: 'rgb(255, 255, 255)',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  lighhtedmntcittEmptyWrap: {
    backgroundColor: '#AD182E',
    paddingVertical: 16,
    paddingHorizontal: 12,
    paddingBottom: 0,
    marginBottom: 22,
    marginTop: 5,
  },
  lighhtedmntcittEmptyInner: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'stretch',
  },
  lighhtedmntcittEmptyTextCol: {
    flex: 1,
    justifyContent: 'center',
  },
  lighhtedmntcittOopsTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  lighhtedmntcittEmptyBody: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 21,
    width: '80%',
    fontWeight: '400',
    marginBottom: 6,
  },
  lighhtedmntcittGoPlacesBtn: {
    backgroundColor: '#AEA47E',
    minHeight: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginHorizontal: 4,
    width: '90%',
    alignSelf: 'center',
  },
  lighhtedmntcittGoPlacesBtnText: {
    color: '#1A1A1A',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Lighhtedmntcittsvvd;
