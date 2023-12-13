/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/Screens/Auth/Login';
import Signup from './src/Screens/Auth/Signup';
import Forgetpassword from './src/Screens/Auth/Forgetpassword';
import Otp from './src/Screens/Auth/Otp';
import Recoverpassword from './src/Screens/Auth/Recover';
import Sentcode from './src/Screens/Auth/Sentcode';
import index from './src/Screens/Appscreens/Profile';
import Privacy from './src/Screens/Appscreens/ThingstoKnow/Privacy';
import Shipping from './src/Screens/Appscreens/ThingstoKnow/Shipping';
import Quality from './src/Screens/Appscreens/ThingstoKnow/Quality';
import Return from './src/Screens/Appscreens/ThingstoKnow/Return';
import About from './src/Screens/Appscreens/About';
import Contectus from './src/Screens/Appscreens/Contectus';
import DogHerbs from './src/Screens/Appscreens/Category/DogHerbs';
import Dog from './src/Screens/Appscreens/Category/DogHerb/Dog';
import Test from './src/Stacks/test';
import Catherb from './src/Screens/Appscreens/Category/CatHerb/Catherb';
import Review from './src/Screens/Appscreens/Reviews/Review';
import ReviewsDetail from './src/Screens/Appscreens/Reviews/ReviewsDetail';
import Favorites from './src/Screens/Appscreens/Favorites/Favorites';
import Mycart from './src/Screens/Appscreens/MyCart/Mycart';
import Productdetail from './src/Screens/Appscreens/Category/Productdetail';
import Routes from './src/Stacks';

AppRegistry.registerComponent(appName, () => Routes);
