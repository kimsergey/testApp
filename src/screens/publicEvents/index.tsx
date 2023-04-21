import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { BottomMenu } from './components/BottomMenu';

import { TEXT } from '../../constants/text';

import { usePublicEvents } from './usePublicEvents';

export const PublicEventsScreen = () => {
  const {
    publicEvents,
    getPublicEventsHandler,
    navigateToDetails,
    getKeyExtractor,
    renderItem,
    getItemLayoutHandler,
  } = usePublicEvents();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={TEXT.publicEvents.title}/>
      {publicEvents.length ? (
        <FlatList
          style={styles.publicEventsList}
          data={publicEvents}
          keyExtractor={getKeyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          getItemLayout={getItemLayoutHandler}
        />
      ) : (
        <Loader />
      )}
      <BottomMenu
        getPublicEventsHandler={getPublicEventsHandler}
        navigateToDetails={navigateToDetails}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  publicEventsList: {
    width: '100%',
  },
});
