import { combineReducers } from 'redux';

import auth from "./auth/reducer";
import posts from "./posts/reducer";

export default combineReducers({
    auth,
    posts
});