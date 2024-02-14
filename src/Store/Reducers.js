import {combineReducers} from 'redux';
import Slice from './Slice';
import {pawhealerApis} from './Auth';

export default combineReducers({
  Slice,
  [pawhealerApis.reducerPath]: pawhealerApis.reducer,
});
