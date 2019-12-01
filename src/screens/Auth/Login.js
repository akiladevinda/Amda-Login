import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Metrics from '../../config/Metrics';
import Register from './Register';
import URL from '../../config/URL';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('Login componentDidMount');
  }

  //Register button click action
  regsisterButton = () => {
    this.props.navigation.navigate('Register', {screen: Register});
  };

  //Login button click action
  loginButton = () => {
    fetch(URL.USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: this.state.email,
        Password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responseText => {
        console.log(responseText);
        if (responseText.status_code == 200) {
          Alert.alert('Success', 'Login Complete ...', [{text: 'OK'}], {
            cancelable: false,
          });
        } else {
          Alert.alert(
            'Error',
            'Email or Password invalid ...',
            [{text: 'OK'}],
            {
              cancelable: false,
            },
          );
        }
      })
      .catch(error => {});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 10}}>
          <View style={styles.body}>
            <Text style={styles.inputHeading}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                value={this.state.email}
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({email})}
                onSubmitEditing={() => {
                  this.password.focus();
                }}
                returnKeyType={'next'}
              />
            </View>
            <Text style={styles.inputHeading}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                value={this.state.password}
                keyboardType="default"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({password})}
                ref={input => {
                  this.password = input;
                }}
              />
            </View>
            <TouchableOpacity onPress={() => this.loginButton()}>
              <View style={styles.buttonContianer}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => this.regsisterButton()}>
              <View style={styles.buttonContianer}>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginLeft: Metrics.DEVICE_WIDTH / 13,
    marginTop: Metrics.DEVICE_HEIGHT / 5,
  },
  inputHeading: {
    fontSize: 15,
    color: 'black',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: 55,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 15,
  },
  buttonContianer: {
    backgroundColor: '#194d82',
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
});
