import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants/colors';
import { TEXT } from '../constants/text';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../utils/scales';

type HeaderProps = {
  title: string,
  goBack?: () => void,
}

export const Header = ({ title, goBack }: HeaderProps) => (
  <View style={styles.container}>
    {goBack ? (
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={goBack}
      >
        <Text style={styles.buttonText}>{TEXT.back}</Text>
      </TouchableOpacity>
    ) : (
      <View style={styles.button} />
    )}
    <Text style={styles.title}>{title}</Text>
    <View style={styles.button} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleVertical(5),
  },
  title: {
    color: COLORS.black,
    fontSize: scaleFontSize(24),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleHorizontal(60),
    height: scaleVertical(30),
    marginHorizontal: scaleHorizontal(10),
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: COLORS.black,
  },
  buttonText: {
    fontSize: scaleFontSize(16),
    color: COLORS.white,
  },
});
