import {combineReducers} from 'redux';
import { newsReducer } from './newsReducer';

const reducers=combineReducers({
    allItem:newsReducer,
})
export default reducers;