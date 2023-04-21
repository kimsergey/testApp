import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';

import { TEXT } from '../../constants/text';

import { useDetails } from './useDetails';

export const DetailsScreen = () => {
  const {
    publicEvents,
    goBack,
    getKeyExtractor,
    renderHeader,
    renderItem,
    getItemLayoutHandler,
  } = useDetails();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={TEXT.details.title} goBack={goBack}/>
      {publicEvents.length ? (
        <FlatList
          style={styles.detailsList}
          data={publicEvents}
          keyExtractor={getKeyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          initialNumToRender={20}
          showsVerticalScrollIndicator={false}
          getItemLayout={getItemLayoutHandler}
        />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsList: {
    width: '100%',
  },
});
