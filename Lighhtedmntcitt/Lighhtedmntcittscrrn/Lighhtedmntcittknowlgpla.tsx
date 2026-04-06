import type {RouteProp} from '@react-navigation/native';
import {useCallback, useMemo, useState} from 'react';

import type {StackNavigationProp} from '@react-navigation/stack';
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

import {
  lighhtedmntcittKnowlgMixNonce,
  lighhtedmntcittKnowlgPickSession,
  lighhtedmntcittKnowlgQuestions,
  lighhtedmntcittKnowlgSessionSize,
  lighhtedmntcittKnowlgShuffleOptions,
  lighhtedmntcittKnowlgStarsPerCorrect,
} from './Lighhtedmntcittknowlgdatta';
import {lighhtedmntcittStarStrgAdd} from './Lighhtedmntcittstarstrg';

type LighhtedmntcittKnowlgShuffledRow = {
  options: string[];
  correctIndex: number;
};

const Lighhtedmntcittknowlgpla = ({
  navigation,
  route: lighhtedmntcittRoute,
}) => {
  const [lighhtedmntcittPhase, setLighhtedmntcittPhase] = useState<
    'play' | 'results'
  >('play');
  const [lighhtedmntcittQIndex, setLighhtedmntcittQIndex] = useState(0);
  const [lighhtedmntcittSelectedIdx, setLighhtedmntcittSelectedIdx] = useState<
    number | null
  >(null);
  const [lighhtedmntcittRevealed, setLighhtedmntcittRevealed] = useState(false);
  const [lighhtedmntcittRevealRow, setLighhtedmntcittRevealRow] =
    useState<LighhtedmntcittKnowlgShuffledRow | null>(null);
  const [lighhtedmntcittStars, setLighhtedmntcittStars] = useState(0);
  const [lighhtedmntcittCorrect, setLighhtedmntcittCorrect] = useState(0);
  const [lighhtedmntcittOutcomes, setLighhtedmntcittOutcomes] = useState<
    boolean[]
  >([]);
  const [lighhtedmntcittDeckFallback, setLighhtedmntcittDeckFallback] =
    useState(() => Date.now());

  const lighhtedmntcittDeckKey =
    lighhtedmntcittRoute.params?.lighhtedmntcittSessionId ??
    lighhtedmntcittDeckFallback;

  const lighhtedmntcittSessionQs = useMemo(
    () =>
      lighhtedmntcittKnowlgPickSession(
        lighhtedmntcittKnowlgQuestions,
        lighhtedmntcittKnowlgSessionSize,
        lighhtedmntcittDeckKey,
      ),
    [lighhtedmntcittDeckKey],
  );

  const lighhtedmntcittQ =
    lighhtedmntcittSessionQs[lighhtedmntcittQIndex] ??
    lighhtedmntcittSessionQs[0];

  const lighhtedmntcittShuffled = useMemo(() => {
    return lighhtedmntcittKnowlgShuffleOptions(
      lighhtedmntcittQ.options,
      lighhtedmntcittQ.correctIndex,
      lighhtedmntcittKnowlgMixNonce(
        lighhtedmntcittDeckKey,
        lighhtedmntcittQ.id,
      ),
    );
  }, [lighhtedmntcittDeckKey, lighhtedmntcittQ]);

  const lighhtedmntcittResetGame = useCallback(() => {
    setLighhtedmntcittPhase('play');
    setLighhtedmntcittQIndex(0);
    setLighhtedmntcittSelectedIdx(null);
    setLighhtedmntcittRevealed(false);
    setLighhtedmntcittRevealRow(null);
    setLighhtedmntcittStars(0);
    setLighhtedmntcittCorrect(0);
    setLighhtedmntcittOutcomes([]);
    const lighhtedmntcittNextId = Date.now();
    setLighhtedmntcittDeckFallback(lighhtedmntcittNextId);
    navigation.setParams({lighhtedmntcittSessionId: lighhtedmntcittNextId});
  }, [navigation]);

  const lighhtedmntcittClearQuestionUi = () => {
    setLighhtedmntcittSelectedIdx(null);
    setLighhtedmntcittRevealed(false);
    setLighhtedmntcittRevealRow(null);
  };

  const lighhtedmntcittOnChoose = () => {
    if (
      lighhtedmntcittSelectedIdx === null ||
      lighhtedmntcittRevealed ||
      lighhtedmntcittPhase !== 'play'
    ) {
      return;
    }
    const lighhtedmntcittOk =
      lighhtedmntcittSelectedIdx === lighhtedmntcittShuffled.correctIndex;
    setLighhtedmntcittRevealRow({
      options: [...lighhtedmntcittShuffled.options],
      correctIndex: lighhtedmntcittShuffled.correctIndex,
    });
    setLighhtedmntcittRevealed(true);
    if (lighhtedmntcittOk) {
      setLighhtedmntcittStars(s => s + lighhtedmntcittKnowlgStarsPerCorrect);
      setLighhtedmntcittCorrect(c => c + 1);
      lighhtedmntcittStarStrgAdd(lighhtedmntcittKnowlgStarsPerCorrect).catch(
        () => {},
      );
    }
    setLighhtedmntcittOutcomes(o => [...o, lighhtedmntcittOk]);
  };

  const lighhtedmntcittOnAdvance = () => {
    if (!lighhtedmntcittRevealed || lighhtedmntcittPhase !== 'play') {
      return;
    }
    const lighhtedmntcittLastQ =
      lighhtedmntcittQIndex >= lighhtedmntcittKnowlgSessionSize - 1;
    if (lighhtedmntcittLastQ) {
      setLighhtedmntcittPhase('results');
      return;
    }
    setLighhtedmntcittQIndex(q => q + 1);
    lighhtedmntcittClearQuestionUi();
  };

  const lighhtedmntcittNextBtnLabel = () => {
    if (!lighhtedmntcittRevealed) {
      return 'Choose';
    }
    const lighhtedmntcittLastQ =
      lighhtedmntcittQIndex >= lighhtedmntcittKnowlgSessionSize - 1;
    if (lighhtedmntcittLastQ) {
      return 'Results';
    }
    return 'Next question';
  };

  const lighhtedmntcittOnShareResults = () => {
    Share.share({
      message: `Score: ${lighhtedmntcittCorrect}/${lighhtedmntcittKnowlgSessionSize}\nStars: ${lighhtedmntcittStars}\n`,
    });
  };

  const lighhtedmntcittProgressPct = Math.min(
    100,
    ((lighhtedmntcittQIndex + (lighhtedmntcittRevealed ? 1 : 0)) /
      lighhtedmntcittKnowlgSessionSize) *
      100,
  );

  const lighhtedmntcittRowShown: LighhtedmntcittKnowlgShuffledRow =
    lighhtedmntcittRevealed && lighhtedmntcittRevealRow
      ? lighhtedmntcittRevealRow
      : lighhtedmntcittShuffled;

  const lighhtedmntcittOptStyle = (lighhtedmntcittI: number) => {
    const lighhtedmntcittPicked =
      lighhtedmntcittSelectedIdx === lighhtedmntcittI;
    return [
      styles.lighhtedmntcittOptBtn,
      lighhtedmntcittPicked
        ? styles.lighhtedmntcittOptPicked
        : styles.lighhtedmntcittOptPlain,
    ];
  };

  const lighhtedmntcittOptTxtStyle = (lighhtedmntcittI: number) => {
    if (lighhtedmntcittSelectedIdx === lighhtedmntcittI) {
      return styles.lighhtedmntcittOptTxtPicked;
    }
    return styles.lighhtedmntcittOptTxt;
  };

  return (
    <Lighhtedmntcittlayyt>
      <ScrollView
        contentContainerStyle={styles.lighhtedmntcittScroll}
        showsVerticalScrollIndicator={false}>
        {lighhtedmntcittPhase === 'play' ? (
          <>
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

            <View style={styles.lighhtedmntcittStatusRow}>
              <View>
                <Text style={styles.lighhtedmntcittRoundLbl}>
                  Round {lighhtedmntcittQIndex + 1} /{' '}
                  {lighhtedmntcittKnowlgSessionSize}
                </Text>
              </View>
              <View style={styles.lighhtedmntcittStarPill}>
                <Image
                  source={require('../../elements/i/lighhtedmsbstar.png')}
                />
                <Text style={styles.lighhtedmntcittStarNum}>
                  {lighhtedmntcittStars}
                </Text>
              </View>
            </View>

            <View style={styles.lighhtedmntcittProgressTrack}>
              <View
                style={[
                  styles.lighhtedmntcittProgressFill,
                  {width: `${lighhtedmntcittProgressPct}%`},
                ]}
              />
            </View>

            <View style={styles.lighhtedmntcittPlayCard}>
              <Text style={styles.lighhtedmntcittFillLabel}>
                Fill in the blank:
              </Text>
              <View style={styles.lighhtedmntcittQuestionRow}>
                <Text style={styles.lighhtedmntcittQuestionTxt}>
                  {lighhtedmntcittQ.sentenceBefore}
                </Text>
                <Image
                  source={require('../../elements/i/lighhtedmsaques.png')}
                />
                <Text style={styles.lighhtedmntcittQuestionTxt}>
                  {lighhtedmntcittQ.sentenceAfter}
                </Text>
              </View>

              <View style={styles.lighhtedmntcittOpts}>
                {lighhtedmntcittRowShown.options.map(
                  (lighhtedmntcittOpt, lighhtedmntcittI) => (
                    <Pressable
                      key={`${lighhtedmntcittQ.id}-s${lighhtedmntcittI}`}
                      disabled={lighhtedmntcittRevealed}
                      onPress={() =>
                        setLighhtedmntcittSelectedIdx(lighhtedmntcittI)
                      }
                      style={({pressed}) => [
                        styles.lighhtedmntcittOptPressWrap,
                        pressed &&
                          !lighhtedmntcittRevealed &&
                          styles.lighhtedmntcittPressed,
                      ]}>
                      <View
                        style={lighhtedmntcittOptStyle(lighhtedmntcittI)}
                        pointerEvents="none">
                        <Text
                          style={lighhtedmntcittOptTxtStyle(lighhtedmntcittI)}>
                          {lighhtedmntcittOpt}
                        </Text>
                      </View>
                    </Pressable>
                  ),
                )}
              </View>
            </View>

            {lighhtedmntcittRevealed ? (
              lighhtedmntcittSelectedIdx ===
              lighhtedmntcittRowShown.correctIndex ? (
                <View style={styles.lighhtedmntcittFeedbackOk}>
                  <Text style={styles.lighhtedmntcittFeedbackOkTitle}>
                    Correct! 🎉
                  </Text>
                  <Text style={styles.lighhtedmntcittFeedbackOkSub}>
                    You earned {lighhtedmntcittKnowlgStarsPerCorrect} stars!
                  </Text>
                </View>
              ) : (
                <View style={styles.lighhtedmntcittFeedbackBad}>
                  <Text style={styles.lighhtedmntcittFeedbackBadTitle}>
                    Wrong
                  </Text>
                  <Text style={styles.lighhtedmntcittFeedbackBadSub}>
                    Try again next time.
                  </Text>
                </View>
              )
            ) : null}

            <View style={styles.lighhtedmntcittBottomRow}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={({pressed}) => [
                  styles.lighhtedmntcittBackSquare,
                  pressed && styles.lighhtedmntcittPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel="Back">
                <Image
                  source={require('../../elements/i/lighhtedmsbackar.png')}
                />
              </Pressable>
              <Pressable
                onPress={
                  lighhtedmntcittRevealed
                    ? lighhtedmntcittOnAdvance
                    : lighhtedmntcittOnChoose
                }
                disabled={
                  !lighhtedmntcittRevealed &&
                  lighhtedmntcittSelectedIdx === null
                }
                style={({pressed}) => [
                  styles.lighhtedmntcittMainBtn,
                  !lighhtedmntcittRevealed &&
                  lighhtedmntcittSelectedIdx === null
                    ? styles.lighhtedmntcittMainBtnDisabled
                    : null,
                  pressed && styles.lighhtedmntcittPressed,
                ]}>
                <Text style={styles.lighhtedmntcittMainBtnTxt}>
                  {lighhtedmntcittNextBtnLabel()}
                </Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <View style={styles.lighhtedmntcittHeader}>
              <View style={styles.lighhtedmntcittStatusDot} />
              <View style={styles.lighhtedmntcittHeaderRow}>
                <Image
                  source={require('../../elements/i/lighhtedmntheadic.png')}
                />
                <Text style={styles.lighhtedmntcittHeaderTitle}>
                  Welcome to StarLLight Edmonton City App
                </Text>
              </View>
            </View>

            <View style={styles.lighhtedmntcittResultsCenter}>
              <View style={styles.lighhtedmntcittResultsStarsPill}>
                <Image
                  source={require('../../elements/i/lighhtedmsbstarres.png')}
                />
                <Text style={styles.lighhtedmntcittResultsStarCount}>
                  {lighhtedmntcittStars}
                </Text>
              </View>

              <View style={styles.lighhtedmntcittScoreCard}>
                <View style={styles.lighhtedmntcittScoreRow}>
                  <Text style={styles.lighhtedmntcittScoreLbl}>Your Score</Text>
                  <Text style={styles.lighhtedmntcittScoreVal}>
                    {lighhtedmntcittCorrect}/{lighhtedmntcittKnowlgSessionSize}
                  </Text>
                </View>
                <View style={styles.lighhtedmntcittSegments}>
                  {lighhtedmntcittOutcomes.map(
                    (lighhtedmntcittOk, lighhtedmntcittI) => (
                      <View
                        key={`seg-${lighhtedmntcittI}`}
                        style={[
                          styles.lighhtedmntcittSegment,
                          lighhtedmntcittOk
                            ? styles.lighhtedmntcittSegmentOk
                            : styles.lighhtedmntcittSegmentBad,
                        ]}
                      />
                    ),
                  )}
                </View>
              </View>

              <View style={styles.lighhtedmntcittPromoBanner}>
                <Text style={styles.lighhtedmntcittPromoTxt}>
                  Use your stars to unlock exclusive wallpapers! 🎨
                </Text>
              </View>

              <View style={styles.lighhtedmntcittResultsActions}>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={({pressed}) => [
                    styles.lighhtedmntcittResIconBtn,
                    pressed && styles.lighhtedmntcittPressed,
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel="Back">
                  <Image
                    source={require('../../elements/i/lighhtedmsbackar.png')}
                  />
                </Pressable>
                <Pressable
                  onPress={lighhtedmntcittOnShareResults}
                  style={({pressed}) => [
                    styles.lighhtedmntcittResShareBtn,
                    pressed && styles.lighhtedmntcittPressed,
                  ]}>
                  <Text style={styles.lighhtedmntcittResShareTxt}>Share</Text>
                </Pressable>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </Lighhtedmntcittlayyt>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittResIconBtn: {
    width: 62,
    height: 62,
    borderRadius: 12,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lighhtedmntcittScroll: {
    paddingTop: 50,
    paddingBottom: 120,
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 1,
  },

  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 20,
    width: '98%',
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
  lighhtedmntcittStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '93%',
    marginBottom: 12,
  },
  lighhtedmntcittRoundLbl: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  lighhtedmntcittQuestionSub: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  lighhtedmntcittStarPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#610A17',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  lighhtedmntcittStarIcon: {
    fontSize: 16,
  },
  lighhtedmntcittStarNum: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  lighhtedmntcittProgressTrack: {
    width: '93%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#610A17',
    marginBottom: 16,
    overflow: 'hidden',
  },
  lighhtedmntcittProgressFill: {
    height: '93%',
    borderRadius: 4,
    backgroundColor: '#AC283C',
  },
  lighhtedmntcittPlayCard: {
    width: '100%',
    backgroundColor: '#AD182E',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    marginTop: 8,
  },
  lighhtedmntcittFillLabel: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 14,
    textAlign: 'center',
  },
  lighhtedmntcittQuestionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    gap: 6,
  },
  lighhtedmntcittQuestionTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  lighhtedmntcittBlankBox: {
    minWidth: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  lighhtedmntcittBlankQ: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  lighhtedmntcittOpts: {
    gap: 14,
  },
  lighhtedmntcittOptPressWrap: {
    width: '85%',
    alignSelf: 'center',
  },
  lighhtedmntcittOptBtn: {
    borderRadius: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#610A17',
    minHeight: 58,
    justifyContent: 'center',
    width: '100%',
  },
  lighhtedmntcittOptPlain: {
    backgroundColor: 'transparent',
  },
  lighhtedmntcittOptPicked: {
    backgroundColor: '#610A17',
  },
  lighhtedmntcittOptTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  lighhtedmntcittOptTxtPicked: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  lighhtedmntcittFeedbackOk: {
    width: '96%',
    backgroundColor: '#2E7D32',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  lighhtedmntcittFeedbackOkTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  lighhtedmntcittFeedbackOkSub: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  lighhtedmntcittFeedbackBad: {
    width: '89%',
    backgroundColor: '#B10003CC',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    minHeight: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittFeedbackBadTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  lighhtedmntcittFeedbackBadSub: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 7,
  },
  lighhtedmntcittBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '92%',
    marginTop: 4,
  },
  lighhtedmntcittBackSquare: {
    width: 62,
    height: 62,
    borderRadius: 14,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittMainBtn: {
    flex: 1,
    backgroundColor: '#AEA47E',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 62,
  },
  lighhtedmntcittMainBtnDisabled: {
    opacity: 0.45,
  },
  lighhtedmntcittMainBtnTxt: {
    color: '#1A1A1A',
    fontSize: 17,
    fontWeight: '800',
  },
  lighhtedmntcittResultsCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lighhtedmntcittResultsStarsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#610A17',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 400,
    marginBottom: 60,
    marginTop: 48,
    minHeight: 140,
    minWidth: 240,

    justifyContent: 'center',
  },

  lighhtedmntcittResultsStarCount: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '400',
  },
  lighhtedmntcittScoreCard: {
    width: '98%',
    backgroundColor: '#AD182E',
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
  },
  lighhtedmntcittScoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  lighhtedmntcittScoreLbl: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
  lighhtedmntcittScoreVal: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
  lighhtedmntcittSegments: {
    flexDirection: 'row',
    gap: 7,
    width: '100%',
  },
  lighhtedmntcittSegment: {
    flex: 1,
    height: 9,
    borderRadius: 31,
  },
  lighhtedmntcittSegmentOk: {
    backgroundColor: '#00C950',
  },
  lighhtedmntcittSegmentBad: {
    backgroundColor: '#FB2C36',
  },
  lighhtedmntcittPromoBanner: {
    width: '98%',
    backgroundColor: '#610A17',
    borderRadius: 16,
    padding: 16,
    minHeight: 90,
    justifyContent: 'center',
    marginBottom: 67,
  },
  lighhtedmntcittPromoTxt: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '400',
  },
  lighhtedmntcittResultsActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '98%',
    marginBottom: 12,
  },

  lighhtedmntcittResShareBtn: {
    flex: 1,
    height: 62,
    borderRadius: 12,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittResShareTxt: {
    color: '#1A1A1A',
    fontSize: 20,
    fontWeight: '600',
  },
  lighhtedmntcittPlayAgain: {
    paddingVertical: 12,
  },
  lighhtedmntcittPlayAgainTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  lighhtedmntcittPressed: {
    opacity: 0.88,
  },
});

export default Lighhtedmntcittknowlgpla;
