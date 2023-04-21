import { PublicEvent } from '../../types/publicEvent';

export enum PublicEventsActionsEnum {
  GET_PUBLIC_EVENTS = 'PUBLIC_EVENTS',
}

export type GetPublicEventsAction = {
  type: PublicEventsActionsEnum.GET_PUBLIC_EVENTS;
  payload: PublicEvent[];
}

export type PublicEventsAction = GetPublicEventsAction;
