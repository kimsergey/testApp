import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { TEXT } from '../../../constants/text';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../utils/scales';

type BottomMenuProps = {
  getPublicEventsHandler: () => void,
  navigateToDetails: () => void,
}

export const BottomMenu = ({ getPublicEventsHandler, navigateToDetails }: BottomMenuProps) => (
  <View style={styles.bottomMenuContainer}>
    <TouchableOpacity
      style={styles.refreshButton}
      onPress={getPublicEventsHandler}
    >
      <Text style={styles.refreshButtonText}>{TEXT.publicEvents.update}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.refreshButton}
      onPress={navigateToDetails}
    >
      <Text style={styles.refreshButtonText}>{TEXT.publicEvents.seeDetails}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  bottomMenuContainer: {
    marginVertical: scaleVertical(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleVertical(10),
    paddingVertical: scaleVertical(15),
    paddingHorizontal: scaleHorizontal(25),
    backgroundColor: COLORS.black,
    borderRadius: 10,
  },
  refreshButtonText: {
    fontSize: scaleFontSize(20),
    color: COLORS.white,
  },
});
