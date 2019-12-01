import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Images from '../../config/Images';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Splash componentDidMount');
    this.timeoutHandle = setTimeout(() => {
      //Navigate to Login screen
      this.props.navigation.navigate('Login');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image source={Images.SPLASH_LOGO} style={styles.splashLogo} />
          <Text style={styles.splashText}>Splash Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a87a1',
  },
  body: {
    alignItems: 'center',
    marginTop: 40,
  },
  splashText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  splashLogo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
