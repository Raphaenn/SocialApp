import { all } from 'redux-saga/effects'; 

import auth from "./auth/sagas";
import posts from "./posts/sagas"

export default function* rootSaga() {
    return yield all([auth, posts]);
}