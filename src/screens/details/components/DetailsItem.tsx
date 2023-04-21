import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { PublicEvent } from '../../../types/publicEvent';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../utils/scales';

type DetailsItemProps = {
  item: PublicEvent,
}

const DetailsItem = ({ item }: DetailsItemProps) => (
  <View style={styles.detailsItemContainer}>
    <View style={styles.detailsItemBody}>
      <Text style={styles.detailsItemText}>
        {item.type}
      </Text>
    </View>
    <View style={styles.detailsItemBody}>
      <Text style={styles.detailsItemText}>
        {item.id}
      </Text>
    </View>
    <View style={styles.detailsItemBody}>
      <Text style={styles.detailsItemText}>
        {new Date(item.created_at).toLocaleTimeString()}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  detailsItemContainer: {
    flexDirection: 'row',
  },
  detailsItemBody: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleVertical(5),
    marginHorizontal: scaleHorizontal(10),
    paddingHorizontal: scaleHorizontal(10),
    backgroundColor: COLORS.lightgray,
    borderRadius: 5,
  },
  detailsItemText: {
    fontSize: scaleFontSize(12),
    textAlign: 'center',
    color: COLORS.darkgray,
  },
});

export default  memo(DetailsItem);
