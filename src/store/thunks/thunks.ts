import { Dispatch } from 'redux';

import {  getPublicEventsRequest } from '../../api/publicEvents';

import { PublicEvent } from '../../types/publicEvent';
import { getPublicEvents } from '../listReducer/actions';

export const getPublicEventsThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response: PublicEvent[] = await getPublicEventsRequest();

      if (response) {
        dispatch(getPublicEvents(response));
      }
    } catch (e) {
      console.log('getPublicEventsThunk error', e);
    }
  };
};
