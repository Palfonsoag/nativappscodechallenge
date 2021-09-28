import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';
import reducers from './app/ducks/reducers';
import AppStackContainer from './app/navigation/AppNavigation';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppStackContainer />
    </Provider>
  );
};

export default App;
