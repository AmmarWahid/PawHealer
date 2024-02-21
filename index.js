/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Routes from './src/Stacks';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Toast from 'react-native-toast-message';
import Test from './Practices/Test';
import {createContext, useContext, useState} from 'react';
import wrap from './Practices/Ind';
import Contct from './Practices/contct';

const Root = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <Toast position="bottom" />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
