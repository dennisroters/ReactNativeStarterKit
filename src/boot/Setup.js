import React, {Component} from "react";
import {StyleProvider} from "native-base";
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import configureStore from "./configureStore";

// ignore warnings
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const store = configureStore();

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <App/>
        </Provider>
      </StyleProvider>
    );
  }
}
