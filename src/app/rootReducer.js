import { combineReducers } from 'redux';
import tabReducer from '../features/student/tabSlice';
import modalsReducer from '../features/modal/modalSlice';

const rootReducer = combineReducers({
    tabs:tabReducer,
    modals:modalsReducer
  
});

export default rootReducer;
