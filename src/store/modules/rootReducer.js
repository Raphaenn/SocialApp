import { combineReducers } from 'redux';

import auth from "./auth/reducer";
import posts from "./posts/reducer";
import user from "./user/reducer";

export default combineReducers({
    auth,
    posts,
    user,
});