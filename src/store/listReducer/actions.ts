import { PublicEvent } from '../../types/publicEvent';

import { GetPublicEventsAction, PublicEventsActionsEnum } from './actionTypes';

export const getPublicEvents = (list: PublicEvent[]): GetPublicEventsAction => ({
  type: PublicEventsActionsEnum.GET_PUBLIC_EVENTS,
  payload: list,
});
