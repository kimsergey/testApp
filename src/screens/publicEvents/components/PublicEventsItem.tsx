import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { PublicEvent } from '../../../types/publicEvent';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../utils/scales';

type PublicEventItemProps = {
  item: PublicEvent,
}

const PublicEventsItem = ({ item }: PublicEventItemProps) => (
  <View style={styles.publicEventsItemContainer}>
    <Text style={styles.publicEventsItemText}>
      {item.type}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  publicEventsItemContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleVertical(10),
    marginHorizontal: scaleHorizontal(20),
    backgroundColor: COLORS.lightgray,
    borderRadius: 5,
  },
  publicEventsItemText: {
    fontSize: scaleFontSize(20),
    color: COLORS.darkgray,
  },
});

export default memo(PublicEventsItem);
