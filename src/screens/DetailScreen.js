import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Text, View} from "native-base";
import {connect} from "react-redux";


class DetailScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Detail'
  });

  render() {
    return (
      <View style={s.container}>
        <Icon type="MaterialCommunityIcons" name="airplane-takeoff" />
        <Text style={s.text}>
          DetailScreen
        </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);