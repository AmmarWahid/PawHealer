import {combineReducers} from 'redux';
import Slice from './Slice';
import {pawhealerApis} from './Auth';
import {getMainApis} from './Main';

export default combineReducers({
  Slice,
  [pawhealerApis.reducerPath]: pawhealerApis.reducer,
  [getMainApis.reducerPath]: getMainApis.reducer,
});
