import {AppRegistry} from 'react-native';
import App from './lib/App';
import {name as appName} from './app.json';
global.Buffer = global.Buffer || require('buffer').Buffer;

AppRegistry.registerComponent(appName, () => App);
