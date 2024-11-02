import { combineReducers } from 'redux';
import tabReducer from '../features/student/tabSlice';

const rootReducer = combineReducers({
    tabs:tabReducer
  
});

export default rootReducer;
