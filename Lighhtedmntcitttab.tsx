// Bottom TAB

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Lighhtedmntcittmap from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittmap';
import Lighhtedmntcittbllog from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittbllog';
import Lighhtedmntcittknowlg from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittknowlg';
import Lighhtedmntcittcollcn from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittcollcn';

import Lighhtedmntcittsvvd from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittsvvd';
import Lighhtedmntcittplcc from './Lighhtedmntcitt/Lighhtedmntcittscrrn/Lighhtedmntcittplcc';

const Tab = createBottomTabNavigator();

type LighhtedmntcittTabIconSlotProps = {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
};

const LighhtedmntcittTabIconSlot = ({
  focused,
  source,
  label,
}: LighhtedmntcittTabIconSlotProps) => (
  <View style={lighhtedmntcittTabStyles.lighhtedmntcittIconOuter}>
    <View
      style={[
        lighhtedmntcittTabStyles.lighhtedmntcittIconSquare,
        focused
          ? lighhtedmntcittTabStyles.lighhtedmntcittIconSquareActive
          : null,
      ]}>
      <Image
        source={source}
        style={lighhtedmntcittTabStyles.lighhtedmntcittIconImage}
        resizeMode="contain"
        tintColor={focused ? '#AEA47E' : '#4A4533'}
      />
      {focused ? (
        <Text
          style={lighhtedmntcittTabStyles.lighhtedmntcittIconLabel}
          numberOfLines={1}>
          {label}
        </Text>
      ) : null}
    </View>
  </View>
);

const lighhtedmntcittCitab1 = require('./elements/i/lighhtedmntcitab1.png');
const lighhtedmntcittCitab2 = require('./elements/i/lighhtedmntcitab2.png');
const lighhtedmntcittCitab3 = require('./elements/i/lighhtedmntcitab3.png');
const lighhtedmntcittCitab4 = require('./elements/i/lighhtedmntcitab4.png');
const lighhtedmntcittCitab5 = require('./elements/i/lighhtedmntcitab5.png');
const lighhtedmntcittCitab6 = require('./elements/i/lighhtedmntcitab6.png');

const lighhtedmntcittTabBarIconPlcc = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab1}
    label="Places"
  />
);
const lighhtedmntcittTabBarIconSvvd = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab2}
    label="Saved"
  />
);
const lighhtedmntcittTabBarIconMap = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab3}
    label="Map"
  />
);
const lighhtedmntcittTabBarIconBllog = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab4}
    label="Blog"
  />
);
const lighhtedmntcittTabBarIconKnowlg = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab5}
    label="Game"
  />
);
const lighhtedmntcittTabBarIconCollcn = ({focused}: {focused: boolean}) => (
  <LighhtedmntcittTabIconSlot
    focused={focused}
    source={lighhtedmntcittCitab6}
    label="Collection"
  />
);

const LighhtedmntcittAnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const lighhtedmntcittTabScale = useRef(new Animated.Value(1)).current;

  const lighhtedmntcittTabHandlePressIn = () => {
    Animated.spring(lighhtedmntcittTabScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const lighhtedmntcittTabHandlePressOut = () => {
    Animated.spring(lighhtedmntcittTabScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={lighhtedmntcittTabHandlePressIn}
      onPressOut={lighhtedmntcittTabHandlePressOut}
      style={[
        style as ViewStyle,
        lighhtedmntcittTabStyles.lighhtedmntcittPressable,
      ]}
      {...rest}>
      <Animated.View
        style={[
          lighhtedmntcittTabStyles.lighhtedmntcittPressableInner,
          {transform: [{scale: lighhtedmntcittTabScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const LighhtedmntcittTabBarButton = (props: Record<string, unknown>) => (
  <LighhtedmntcittAnimatedTabButton {...props} />
);

const Lighhtedmntcitttab = () => {
  const {height: lighhtedmntcittH, width: lighhtedmntcittW} =
    useWindowDimensions();
  const lighhtedmntcittIsLandscape = lighhtedmntcittH < lighhtedmntcittW;
  const lighhtedmntcittInsets = useSafeAreaInsets();
  const lighhtedmntcittBottomPad = Math.max(lighhtedmntcittInsets.bottom, 10);
  const lighhtedmntcittTabBarHeight =
    (lighhtedmntcittIsLandscape ? 72 : 92) + lighhtedmntcittBottomPad;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          lighhtedmntcittTabStyles.lighhtedmntcittBar,
          {
            height: lighhtedmntcittTabBarHeight,
            paddingBottom: lighhtedmntcittBottomPad,
          },
        ],
        tabBarActiveTintColor: '#AEA47E',
        tabBarInactiveTintColor: '#4A4533',
        tabBarButton: LighhtedmntcittTabBarButton,
      }}>
      <Tab.Screen
        name="Lighhtedmntcittplcc"
        component={Lighhtedmntcittplcc}
        options={{tabBarIcon: lighhtedmntcittTabBarIconPlcc}}
      />
      <Tab.Screen
        name="Lighhtedmntcittsvvd"
        component={Lighhtedmntcittsvvd}
        options={{tabBarIcon: lighhtedmntcittTabBarIconSvvd}}
      />
      <Tab.Screen
        name="Lighhtedmntcittmap"
        component={Lighhtedmntcittmap}
        options={{tabBarIcon: lighhtedmntcittTabBarIconMap}}
      />
      <Tab.Screen
        name="Lighhtedmntcittbllog"
        component={Lighhtedmntcittbllog}
        options={{tabBarIcon: lighhtedmntcittTabBarIconBllog}}
      />
      <Tab.Screen
        name="Lighhtedmntcittknowlg"
        component={Lighhtedmntcittknowlg}
        options={{tabBarIcon: lighhtedmntcittTabBarIconKnowlg}}
      />
      <Tab.Screen
        name="Lighhtedmntcittcollcn"
        component={Lighhtedmntcittcollcn}
        options={{tabBarIcon: lighhtedmntcittTabBarIconCollcn}}
      />
    </Tab.Navigator>
  );
};

const lighhtedmntcittTabStyles = StyleSheet.create({
  lighhtedmntcittPressable: {
    flex: 1,
  },
  lighhtedmntcittPressableInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittIconOuter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittIconSquare: {
    backgroundColor: '#AD182E',
    borderRadius: 14,
    minWidth: 60,
    minHeight: 60,
    paddingVertical: 8,
    paddingHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lighhtedmntcittIconSquareActive: {
    paddingBottom: 6,
  },
  lighhtedmntcittIconImage: {
    width: 30,
    height: 30,
  },
  lighhtedmntcittIconLabel: {
    marginTop: 4,
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '400',
  },
  lighhtedmntcittBar: {
    position: 'absolute',
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderTopColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default Lighhtedmntcitttab;
