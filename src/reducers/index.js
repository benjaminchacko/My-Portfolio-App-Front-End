import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import auth from './auth';
import blogReducer from "./blog";



const Reducers = combineReducers({
    auth,
    blogs: blogReducer,
    form: formReducer,
})

export default Reducers;