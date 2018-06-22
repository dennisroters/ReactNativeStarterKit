import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon, Text, View} from "native-base";
import {connect} from "react-redux";


class ExampleScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Detail'
  });

  render() {
    return (
      <View style={s.container}>
        <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
        <Text style={s.text}>
          Example Modal
        </Text>
        <Button style={{alignSelf: 'center'}} transparent onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: '#00f'}}>Close Modal</Text>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen);