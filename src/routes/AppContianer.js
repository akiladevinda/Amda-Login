import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Home from '../screens/Home/Home';

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Register: {screen: Register},
    Home: {screen: Home},
  },
  {
    headerMode: 'none',
    title: 'none',
    initialRouteName: 'Splash',
  },
);

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);

//exporting App Conrainer with all routing pages
export default AppContainer;
