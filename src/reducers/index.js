import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import auth from './auth';
import counterReducer from './counter';
import blogReducer from "./blog";



const Reducers = combineReducers({
    auth,
    blogs: blogReducer,
    counter: counterReducer,
    form: formReducer,
})

export default Reducers;