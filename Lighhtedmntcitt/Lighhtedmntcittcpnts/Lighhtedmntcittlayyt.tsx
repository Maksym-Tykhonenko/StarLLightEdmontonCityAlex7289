import type {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const Lighhtedmntcittlayyt = ({children}: {children: ReactNode}) => {
  return (
    <View style={styles.lighhtedmntcittBackground}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.lighhtedmntcittContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lighhtedmntcittBackground: {
    flex: 1,
    backgroundColor: '#E8304B',
  },
  lighhtedmntcittContent: {
    flexGrow: 1,
  },
});

export default Lighhtedmntcittlayyt;
