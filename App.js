import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/components/Main';

import store from './src/redux/reducer/Store';
import {Provider} from 'react-redux'

const App = () => {
  return (
      <Provider store={store}>
        <Main />
      </Provider>
  );
}

export default App;
