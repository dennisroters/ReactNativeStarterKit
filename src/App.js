import React from 'react';
import {Button, Icon, Root, Text} from "native-base";
import {connect} from "react-redux";
import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ExampleScreen from "./screens/ExampleScreen";


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: <Text style={{color: '#fff', paddingLeft: 15, fontSize: 22, fontWeight: 'bold'}}>StarterKit</Text>,
        headerRight: (
          <Button transparent onPress={() => navigation.navigate('ExampleModal')}>
            <Icon type="MaterialCommunityIcons" name="settings" size={30} style={{color: '#fff'}}/>
          </Button>
        )
      }),
    },
    Detail: {screen: DetailScreen},
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        backgroundColor: '#015a95'
      },
      headerTintColor: '#fff',
    },
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    ExampleModal: {
      screen: ExampleScreen,
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
);

class App extends React.Component {

  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);