import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

export enum RootNavigatorScreenNames {
  publicEvents = 'publicEvents',
  details = 'details',
}

export type RootNavigatorType = {
  [RootNavigatorScreenNames.publicEvents]: undefined;
  [RootNavigatorScreenNames.details]: undefined;
};

export type ListNavigationProp = NativeStackNavigationProp<
  RootNavigatorType,
  RootNavigatorScreenNames.publicEvents
>;

export type DetailsNavigationProp = NativeStackNavigationProp<
  RootNavigatorType,
  RootNavigatorScreenNames.details
>;
