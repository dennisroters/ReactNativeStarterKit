import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Button, Icon, Text, View} from "native-base";
import {connect} from "react-redux";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    title: ''
  });

  render() {
    return (
        <View style={s.container}>
          <Icon type="MaterialCommunityIcons" name="rocket" />
          <Text style={s.welcome}>
            Welcome to ReactNativeStarterKit!
          </Text>
          <Text style={s.instructions}>
            {instructions}
          </Text>
          <Button style={{alignSelf: 'center'}} transparent onPress={() => this.props.navigation.navigate('Detail')}>
            <Text style={{paddingRight: 4}}>Go Detail</Text>
            <Icon style={{marginLeft: 0}} type="MaterialCommunityIcons" name="chevron-right"/>
          </Button>
        </View>

    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);