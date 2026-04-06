import Lighhtedmntcittlayyt from '../Lighhtedmntcittcpnts/Lighhtedmntcittlayyt';
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

import {lighhtedmntcittBllogById} from './Lighhtedmntcittbllogdatta';
import {
  lighhtedmntcittBllogIsSaved,
  lighhtedmntcittBllogToggleSaved,
} from './Lighhtedmntcittbllogsavd';

const Lighhtedmntcittbllogdet = ({navigation, route}) => {
  const {blogId: lighhtedmntcittBlogId} = route.params;
  const lighhtedmntcittItem = lighhtedmntcittBllogById(lighhtedmntcittBlogId);
  const [lighhtedmntcittSaved, setLighhtedmntcittSaved] = useState(false);
  const [lighhtedmntcittSaveBusy, setLighhtedmntcittSaveBusy] = useState(false);

  const lighhtedmntcittRefreshSaved = useCallback(async () => {
    const lighhtedmntcittOn = await lighhtedmntcittBllogIsSaved(
      lighhtedmntcittBlogId,
    );
    setLighhtedmntcittSaved(lighhtedmntcittOn);
  }, [lighhtedmntcittBlogId]);

  useFocusEffect(
    useCallback(() => {
      lighhtedmntcittRefreshSaved();
    }, [lighhtedmntcittRefreshSaved]),
  );

  const lighhtedmntcittOnToggleSave = async () => {
    if (lighhtedmntcittSaveBusy) {
      return;
    }
    setLighhtedmntcittSaveBusy(true);
    try {
      const lighhtedmntcittNext = await lighhtedmntcittBllogToggleSaved(
        lighhtedmntcittBlogId,
      );
      setLighhtedmntcittSaved(lighhtedmntcittNext);
    } finally {
      setLighhtedmntcittSaveBusy(false);
    }
  };

  const lighhtedmntcittOnShare = () => {
    if (!lighhtedmntcittItem) {
      return;
    }
    Share.share({
      message: `${lighhtedmntcittItem.title}\n\n${lighhtedmntcittItem.body}\n\n— StarLLight Edmonton City`,
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
            <View style={styles.lighhtedmntcittHeaderTextCol}>
              <Text style={styles.lighhtedmntcittHeaderTitleLine}>
                {'Welcome to StarLight Casual Edmonton'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.lighhtedmntcittArticleCard}>
          <Text style={styles.lighhtedmntcittArticleTitle}>
            {lighhtedmntcittItem?.title}
          </Text>
          <View style={styles.lighhtedmntcittArticleRule} />
          <Text style={styles.lighhtedmntcittArticleBody}>
            {lighhtedmntcittItem?.body}
          </Text>
        </View>

        <View style={styles.lighhtedmntcittActionsRow}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) => [
              styles.lighhtedmntcittIconBtn,
              pressed && styles.lighhtedmntcittBtnPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Back">
            <Image source={require('../../elements/i/lighhtedmnbck.png')} />
          </Pressable>
          <Pressable
            onPress={lighhtedmntcittOnShare}
            style={({pressed}) => [
              styles.lighhtedmntcittShareBtn,
              pressed && styles.lighhtedmntcittBtnPressed,
            ]}>
            <Text style={styles.lighhtedmntcittShareBtnText}>Share</Text>
          </Pressable>
          <Pressable
            onPress={lighhtedmntcittOnToggleSave}
            disabled={lighhtedmntcittSaveBusy}
            style={({pressed}) => [
              styles.lighhtedmntcittIconBtn,
              lighhtedmntcittSaved && styles.lighhtedmntcittIconBtnSaved,
              pressed && styles.lighhtedmntcittBtnPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={
              lighhtedmntcittSaved ? 'Remove from saved' : 'Save article'
            }>
            <Image
              source={
                lighhtedmntcittSaved
                  ? require('../../elements/i/lighhtedmnliked.png')
                  : require('../../elements/i/lighhtedmnlike.png')
              }
            />
          </Pressable>
        </View>
      </ScrollView>
    </Lighhtedmntcittlayyt>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittHeader: {
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 22,
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
  lighhtedmntcittDetlScroll: {
    flex: 1,
  },
  lighhtedmntcittDetlContent: {
    paddingTop: 50,
    paddingBottom: 120,
    alignItems: 'center',
  },

  lighhtedmntcittHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lighhtedmntcittHeaderTextCol: {
    flex: 1,
  },
  lighhtedmntcittHeaderTitleLine: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  lighhtedmntcittArticleCard: {
    width: '96%',
    backgroundColor: '#AD182E',
    borderRadius: 15,
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: 20,
  },
  lighhtedmntcittArticleTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 14,
  },
  lighhtedmntcittArticleRule: {
    height: 2,
    backgroundColor: '#610A17',
    marginBottom: 16,
  },
  lighhtedmntcittArticleBody: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '400',
  },
  lighhtedmntcittActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '96%',
    paddingHorizontal: 2,
  },
  lighhtedmntcittIconBtn: {
    width: 62,
    height: 62,
    borderRadius: 15,
    backgroundColor: '#AEA47E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lighhtedmntcittShareBtn: {
    flex: 1,
    height: 62,
    backgroundColor: '#AEA47E',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittShareBtnText: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '700',
  },
  lighhtedmntcittBtnPressed: {
    opacity: 0.88,
  },
});

export default Lighhtedmntcittbllogdet;
