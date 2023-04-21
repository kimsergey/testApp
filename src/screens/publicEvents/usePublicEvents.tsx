import React, { useCallback, useEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { useIsFocused, useNavigation } from '@react-navigation/native';

import PublicEventsItem from './components/PublicEventsItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { getPublicEventsThunk } from '../../store/thunks/thunks';
import { ListNavigationProp, RootNavigatorScreenNames } from '../../types/navigation';
import { PublicEvent } from '../../types/publicEvent';

export const usePublicEvents = () => {
  const publicEvents: PublicEvent[] = useAppSelector((state) => state.publicEventsReducer.publicEvents);

  const dispatch = useAppDispatch();

  const navigation = useNavigation<ListNavigationProp>();
  const isFocused = useIsFocused();

  let interval: number;

  useEffect(() => {
    if (isFocused) {
      getPublicEventsHandler();
      interval = setInterval(() => getPublicEventsHandler(), 30000);
    }

    return () => clearInterval(interval);
  }, [isFocused]);

  const getPublicEventsHandler = () => {
    dispatch(getPublicEventsThunk()).catch();
  };

  const navigateToDetails = () => {
    navigation.navigate(RootNavigatorScreenNames.details);
  };

  const getKeyExtractor = useCallback((item: PublicEvent) => item.id, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<PublicEvent>) => (
    <PublicEventsItem item={item}/>
  ), [publicEvents]);

  const getItemLayoutHandler = (data: PublicEvent[] | null | undefined, index: number) => {
    return { length: 45, offset: 45 * index, index };
  };

  return {
    publicEvents,
    getPublicEventsHandler,
    navigateToDetails,
    getKeyExtractor,
    renderItem,
    getItemLayoutHandler,
  };
};
