import RNFS from 'react-native-fs';
import Share from 'react-native-share';

import LinearGradient from 'react-native-linear-gradient';

import {useFocusEffect} from '@react-navigation/native';

import {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  lighhtedmntcittCollcnUnlockPriceFor,
  lighhtedmntcittCollcnWalls,
  type LighhtedmntcittCollcnWall,
} from './Lighhtedmntcittcollcndatta';
import {
  lighhtedmntcittCollcnAddUnlockedId,
  lighhtedmntcittCollcnReadUnlockedIds,
} from './Lighhtedmntcittcollcnunlck';
import {
  lighhtedmntcittStarStrgDefault,
  lighhtedmntcittStarStrgRead,
  lighhtedmntcittStarStrgTrySpend,
} from './Lighhtedmntcittstarstrg';

async function lighhtedmntcittCopyAssetUriToFile(
  lighhtedmntcittUri: string,
  lighhtedmntcittDest: string,
): Promise<void> {
  if (
    lighhtedmntcittUri.startsWith('http://') ||
    lighhtedmntcittUri.startsWith('https://')
  ) {
    const lighhtedmntcittDl = await RNFS.downloadFile({
      fromUrl: lighhtedmntcittUri,
      toFile: lighhtedmntcittDest,
    }).promise;
    if (lighhtedmntcittDl.statusCode !== 200) {
      throw new Error(`download ${lighhtedmntcittDl.statusCode}`);
    }
    return;
  }
  const lighhtedmntcittPath = lighhtedmntcittUri.replace(/^file:\/\//, '');
  try {
    await RNFS.copyFile(lighhtedmntcittPath, lighhtedmntcittDest);
  } catch {
    const lighhtedmntcittB64 = await RNFS.readFile(
      lighhtedmntcittPath,
      'base64',
    );
    await RNFS.writeFile(lighhtedmntcittDest, lighhtedmntcittB64, 'base64');
  }
}

const Lighhtedmntcittcollcn = () => {
  const lighhtedmntcittInsets = useSafeAreaInsets();
  const {width: lighhtedmntcittW} = useWindowDimensions();
  const [lighhtedmntcittStars, setLighhtedmntcittStars] = useState(
    lighhtedmntcittStarStrgDefault,
  );
  const [lighhtedmntcittUnlocked, setLighhtedmntcittUnlocked] = useState<
    Set<string>
  >(() => new Set());
  const [lighhtedmntcittBusyId, setLighhtedmntcittBusyId] = useState<
    string | null
  >(null);
  const lighhtedmntcittUnlockShakeX = useRef<Record<string, Animated.Value>>(
    {},
  );

  const lighhtedmntcittUnlockShakeXFor = useCallback(
    (lighhtedmntcittId: string) => {
      let lighhtedmntcittX =
        lighhtedmntcittUnlockShakeX.current[lighhtedmntcittId];
      if (!lighhtedmntcittX) {
        lighhtedmntcittX = new Animated.Value(0);
        lighhtedmntcittUnlockShakeX.current[lighhtedmntcittId] =
          lighhtedmntcittX;
      }
      return lighhtedmntcittX;
    },
    [],
  );

  const lighhtedmntcittPlayUnlockShake = useCallback(
    (lighhtedmntcittId: string) => {
      const lighhtedmntcittX =
        lighhtedmntcittUnlockShakeXFor(lighhtedmntcittId);
      lighhtedmntcittX.stopAnimation();
      lighhtedmntcittX.setValue(0);
      Animated.sequence([
        Animated.timing(lighhtedmntcittX, {
          toValue: 7,
          duration: 42,
          useNativeDriver: true,
        }),
        Animated.timing(lighhtedmntcittX, {
          toValue: -7,
          duration: 42,
          useNativeDriver: true,
        }),
        Animated.timing(lighhtedmntcittX, {
          toValue: 5,
          duration: 42,
          useNativeDriver: true,
        }),
        Animated.timing(lighhtedmntcittX, {
          toValue: -5,
          duration: 42,
          useNativeDriver: true,
        }),
        Animated.timing(lighhtedmntcittX, {
          toValue: 0,
          duration: 42,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [lighhtedmntcittUnlockShakeXFor],
  );

  const lighhtedmntcittPad = 12;
  const lighhtedmntcittGap = 10;
  const lighhtedmntcittColW =
    (lighhtedmntcittW - lighhtedmntcittPad * 2 - lighhtedmntcittGap) / 2;
  const lighhtedmntcittCardH = lighhtedmntcittColW * 1.38;

  const lighhtedmntcittRefresh = useCallback(async () => {
    const [lighhtedmntcittB, lighhtedmntcittIds] = await Promise.all([
      lighhtedmntcittStarStrgRead(),
      lighhtedmntcittCollcnReadUnlockedIds(),
    ]);
    setLighhtedmntcittStars(lighhtedmntcittB);
    setLighhtedmntcittUnlocked(new Set(lighhtedmntcittIds));
  }, []);

  useFocusEffect(
    useCallback(() => {
      lighhtedmntcittRefresh().catch(() => {});
    }, [lighhtedmntcittRefresh]),
  );

  const lighhtedmntcittShareUnlockedWallpaper = async (
    lighhtedmntcittSource: ImageSourcePropType,
  ): Promise<void> => {
    try {
      const lighhtedmntcittResolved = Image.resolveAssetSource(
        lighhtedmntcittSource,
      );
      const lighhtedmntcittUri = lighhtedmntcittResolved?.uri;
      if (!lighhtedmntcittUri) {
        Alert.alert('Wallpaper', 'Image is not ready yet.');
        return;
      }
      const lighhtedmntcittExt = /\.png(\?|$)/i.test(lighhtedmntcittUri)
        ? 'png'
        : 'jpg';
      const lighhtedmntcittDest = `${
        RNFS.CachesDirectoryPath
      }/lighhtedmntcitt_wall_${Date.now()}.${lighhtedmntcittExt}`;
      await lighhtedmntcittCopyAssetUriToFile(
        lighhtedmntcittUri,
        lighhtedmntcittDest,
      );
      const lighhtedmntcittFileUrl =
        Platform.OS === 'android'
          ? `file://${lighhtedmntcittDest}`
          : lighhtedmntcittDest.startsWith('file://')
          ? lighhtedmntcittDest
          : `file://${lighhtedmntcittDest}`;
      await Share.open({
        url: lighhtedmntcittFileUrl,
        type: `image/${lighhtedmntcittExt}`,
        failOnCancel: false,
      });
    } catch (lighhtedmntcittErr: unknown) {
      const lighhtedmntcittMsg = String(
        (lighhtedmntcittErr as {message?: string})?.message ??
          lighhtedmntcittErr,
      );
      if (
        lighhtedmntcittMsg.includes('User did not share') ||
        lighhtedmntcittMsg.includes('cancel')
      ) {
        return;
      }
      Alert.alert('Wallpaper', 'Could not share the image.');
    }
  };

  const lighhtedmntcittOnUnlock = async (
    lighhtedmntcittId: string,
    lighhtedmntcittCost: number,
  ): Promise<void> => {
    if (lighhtedmntcittBusyId != null) {
      return;
    }
    setLighhtedmntcittBusyId(lighhtedmntcittId);
    try {
      const lighhtedmntcittRes = await lighhtedmntcittStarStrgTrySpend(
        lighhtedmntcittCost,
      );
      if (!lighhtedmntcittRes.ok) {
        lighhtedmntcittPlayUnlockShake(lighhtedmntcittId);
        return;
      }
      await lighhtedmntcittCollcnAddUnlockedId(lighhtedmntcittId);
      setLighhtedmntcittStars(lighhtedmntcittRes.balance);
      setLighhtedmntcittUnlocked(lighhtedmntcittPrev =>
        new Set(lighhtedmntcittPrev).add(lighhtedmntcittId),
      );
    } finally {
      setLighhtedmntcittBusyId(null);
    }
  };

  const lighhtedmntcittRenderItem = ({
    item: lighhtedmntcittItem,
    index: lighhtedmntcittIndex,
  }: {
    item: LighhtedmntcittCollcnWall;
    index: number;
  }) => {
    const lighhtedmntcittPrice = lighhtedmntcittCollcnUnlockPriceFor(
      lighhtedmntcittIndex,
      lighhtedmntcittItem,
    );
    const lighhtedmntcittIsUnlocked = lighhtedmntcittUnlocked.has(
      lighhtedmntcittItem.id,
    );
    const lighhtedmntcittBusy =
      lighhtedmntcittBusyId === lighhtedmntcittItem.id;
    const lighhtedmntcittShakeX = lighhtedmntcittUnlockShakeXFor(
      lighhtedmntcittItem.id,
    );

    return (
      <View
        style={[
          styles.lighhtedmntcittCardWrap,
          {
            width: lighhtedmntcittColW,
            marginBottom: lighhtedmntcittGap,
          },
        ]}>
        <ImageBackground
          source={lighhtedmntcittItem.source}
          style={[
            styles.lighhtedmntcittCardImg,
            {height: lighhtedmntcittCardH},
          ]}
          imageStyle={styles.lighhtedmntcittCardImgRadius}>
          {!lighhtedmntcittIsUnlocked ? (
            <View style={styles.lighhtedmntcittLockOverlay}>
              <View style={styles.lighhtedmntcittLockCircle}>
                <Image
                  source={require('../../elements/i/lighhtedmsblock.png')}
                />
              </View>
            </View>
          ) : null}
          <View style={styles.lighhtedmntcittCardBtnRow}>
            {lighhtedmntcittIsUnlocked ? (
              <Pressable
                onPress={() =>
                  lighhtedmntcittShareUnlockedWallpaper(
                    lighhtedmntcittItem.source,
                  ).catch(() => {})
                }
                style={({pressed}) => [
                  styles.lighhtedmntcittCardBtn,
                  pressed && styles.lighhtedmntcittPressed,
                ]}>
                <Text style={styles.lighhtedmntcittCardBtnTxt}>Download</Text>
              </Pressable>
            ) : (
              <Animated.View
                style={{
                  transform: [{translateX: lighhtedmntcittShakeX}],
                }}>
                <Pressable
                  disabled={lighhtedmntcittBusy}
                  onPress={() =>
                    lighhtedmntcittOnUnlock(
                      lighhtedmntcittItem.id,
                      lighhtedmntcittPrice,
                    ).catch(() => {})
                  }
                  style={({pressed}) => [
                    styles.lighhtedmntcittCardBtn,
                    lighhtedmntcittBusy && styles.lighhtedmntcittCardBtnBusy,
                    pressed &&
                      !lighhtedmntcittBusy &&
                      styles.lighhtedmntcittPressed,
                  ]}>
                  <Image
                    source={require('../../elements/i/lighhtedmsempst.png')}
                    style={styles.lighhtedmntcittCardBtnStar}
                    resizeMode="contain"
                  />
                  <Text style={styles.lighhtedmntcittCardBtnTxt}>
                    Unlock by {lighhtedmntcittPrice}
                  </Text>
                </Pressable>
              </Animated.View>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  };

  const lighhtedmntcittListHeader = (
    <>
      <View style={styles.lighhtedmntcittHeader}>
        <View style={styles.lighhtedmntcittStatusDot} />
        <View style={styles.lighhtedmntcittHeaderRow}>
          <Image source={require('../../elements/i/lighhtedmntheadic.png')} />
          <Text style={styles.lighhtedmntcittHeaderTitle}>
            {'Welcome to StarLight Casual Edmonton'}
          </Text>
        </View>
      </View>
      <Text style={styles.lighhtedmntcittIntro}>
        Unlock exclusive Edmonton-themed wallpapers using stars earned from the
        quiz game
      </Text>
      <View style={styles.lighhtedmntcittStarPill}>
        <Image
          source={require('../../elements/i/lighhtedmsbstar.png')}
          style={styles.lighhtedmntcittStarPillIcon}
          resizeMode="contain"
        />
        <Text style={styles.lighhtedmntcittStarPillNum}>
          {lighhtedmntcittStars}
        </Text>
      </View>
    </>
  );

  return (
    <>
      <View style={styles.lighhtedmntcittRoot}>
        <FlatList
          data={lighhtedmntcittCollcnWalls}
          keyExtractor={lighhtedmntcittIt => lighhtedmntcittIt.id}
          numColumns={2}
          ListHeaderComponent={lighhtedmntcittListHeader}
          renderItem={lighhtedmntcittRenderItem}
          columnWrapperStyle={styles.lighhtedmntcittColumnWrap}
          contentContainerStyle={[
            styles.lighhtedmntcittListContent,
            styles.lighhtedmntcittListPadBottom,
            {
              paddingTop: Math.max(lighhtedmntcittInsets.top, 12) + 8,
              paddingHorizontal: lighhtedmntcittPad,
            },
          ]}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <LinearGradient
        pointerEvents="none"
        colors={['rgba(174, 6, 6, 0)', 'rgba(0, 0, 0, 0.48)']}
        style={styles.lighhtedmntcittGradient}
      />
    </>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittIntro: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 6,
    fontWeight: '400',
    marginTop: 6,
  },

  lighhtedmntcittGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
  },
  lighhtedmntcittRoot: {
    flex: 1,
    backgroundColor: '#E8304B',
  },

  lighhtedmntcittListContent: {
    flexGrow: 1,
  },
  lighhtedmntcittListPadBottom: {
    paddingBottom: 120,
  },
  lighhtedmntcittColumnWrap: {
    justifyContent: 'space-between',
  },
  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 14,
    width: '100%',
    minHeight: 88,
  },
  lighhtedmntcittStatusDot: {
    position: 'absolute',
    top: 36,
    right: 12,
    width: 14,
    height: 14,
    borderRadius: 500,
    backgroundColor: '#00FF00',
    zIndex: 2,
  },
  lighhtedmntcittHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingRight: 20,
  },
  lighhtedmntcittHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    flex: 1,
  },

  lighhtedmntcittStarPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'center',
    backgroundColor: '#4A0713',
    paddingHorizontal: 20,
    borderRadius: 28,
    marginBottom: 20,
    height: 53,
  },
  lighhtedmntcittStarPillIcon: {
    width: 22,
    height: 22,
  },
  lighhtedmntcittStarPillNum: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  lighhtedmntcittCardWrap: {},
  lighhtedmntcittCardImg: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  lighhtedmntcittCardImgRadius: {
    borderRadius: 16,
  },
  lighhtedmntcittLockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.42)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittLockCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1.2,
    borderColor: '#FFFFFF33',
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittLockGlyph: {
    fontSize: 26,
  },
  lighhtedmntcittCardBtnRow: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  lighhtedmntcittCardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#AEA47E',
    borderRadius: 15,
    paddingHorizontal: 4,
    minWidth: '86%',
    minHeight: 30,
  },
  lighhtedmntcittCardBtnBusy: {
    opacity: 0.55,
  },
  lighhtedmntcittCardBtnStar: {
    width: 16,
    height: 16,
  },
  lighhtedmntcittCardBtnTxt: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  lighhtedmntcittPressed: {
    opacity: 0.88,
  },
});

export default Lighhtedmntcittcollcn;
