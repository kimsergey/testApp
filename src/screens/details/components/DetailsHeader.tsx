import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { TEXT } from '../../../constants/text';
import { scaleFontSize, scaleVertical } from '../../../utils/scales';

export const DetailsHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{TEXT.details.type}</Text>
    <Text style={styles.headerText}>{TEXT.details.id}</Text>
    <Text style={styles.headerText}>{TEXT.details.createdAt}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: scaleVertical(10),
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleFontSize(18),
    color: COLORS.darkgray,
  },
});
