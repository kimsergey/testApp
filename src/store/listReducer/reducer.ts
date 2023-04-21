import { PublicEvent } from '../../types/publicEvent';

import { PublicEventsAction, PublicEventsActionsEnum } from './actionTypes';

type stateType = {
  publicEvents: PublicEvent[];
}

const initialState: stateType = {
  publicEvents: [],
};

export const publicEventsReducer = (state = initialState, action: PublicEventsAction): stateType => {
  switch (action.type) {
    case PublicEventsActionsEnum.GET_PUBLIC_EVENTS:
      return { publicEvents: action.payload };

    default:
      return state;
  }
};
