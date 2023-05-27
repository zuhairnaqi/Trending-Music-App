import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { createEpicMiddleware } from 'redux-most';
import NavigationContainer from './src/navigation/NavigationContainer';
import appEpic from './src/store/app.epics';
import appReducer from './src/store/app.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(appEpic);
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

export default App;
