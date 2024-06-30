/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import RootStack from './navigation/RootStack.tsx';
import {store} from './state/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}

export default App;
