/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Routes from './src/Stacks';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const Root = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
