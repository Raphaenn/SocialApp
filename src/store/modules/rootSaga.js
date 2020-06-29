import { all } from 'redux-saga/effects'; 

import auth from "./auth/sagas";
import posts from "./posts/sagas";
import user from "./user/sagas";

export default function* rootSaga() {
    return yield all([auth, posts, user]);
}