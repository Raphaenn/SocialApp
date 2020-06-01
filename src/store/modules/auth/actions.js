export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }
    }
};

export function signInSuccess(email, uid) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { email, uid }
    }
};

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}

export function signUpRequest(name, email, password, avatar) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password, avatar }
    }
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT'
    };
}