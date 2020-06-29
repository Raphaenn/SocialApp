export function updateProfileRequest(data) {
    return {
        type: "@user/UPDATE_PROFILE_REQUEST",
        payload: { data }
    }
};

export function updateProfileSuccess(userData) {

    return {
        type: "@user/UPDATE_PROFILE_SUCCESS",
        payload: { userData }
    }
};

export function updateProfileFailure() {
    return {
        type: "@user/UPDATE_PROFILE_FAILURE",      
    }
};