import React from 'react';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';

import { RootNavigator } from './src/navigation/RootNavigator';
import { store } from './src/store';

const App = (): JSX.Element => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
