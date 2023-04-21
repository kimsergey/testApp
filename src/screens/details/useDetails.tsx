import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { DetailsHeader } from './components/DetailsHeader';
import DetailsItem from './components/DetailsItem';

import { useAppSelector } from '../../store/hooks';

import { DetailsNavigationProp } from '../../types/navigation';
import { PublicEvent } from '../../types/publicEvent';

export const useDetails = () => {
  const publicEvents = useAppSelector((state) => state.publicEventsReducer.publicEvents);

  const navigation = useNavigation<DetailsNavigationProp>();

  const goBack = () => {
    navigation.goBack();
  };

  const getKeyExtractor = useCallback((item: PublicEvent) => item.id, []);

  const renderHeader = () => (
    <DetailsHeader />
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<PublicEvent>) => (
    <DetailsItem item={item}/>
  ), [publicEvents]);

  const getItemLayoutHandler = (data: PublicEvent[] | null | undefined, index: number) => {
    return { length: 35, offset: 35 * index, index };
  };

  return {
    publicEvents,
    goBack,
    getKeyExtractor,
    renderHeader,
    renderItem,
    getItemLayoutHandler,
  };
};
