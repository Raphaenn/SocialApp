import produce from "immer";

const INITIAL_STATE = {
    profile: null,
    loading: false,
};

export default function user(state = INITIAL_STATE, action) {
    switch(action.type) {
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft => {
                draft.profile = action.payload.userData
        });
        case "@user/UPDATE_PROFILE_REQUEST":
            return produce(state, draft => {
                draft.loading = true
            });
        case '@user/UPDATE_PROFILE_SUCCESS':
            return produce(state, draft => {
                draft.profile = action.payload.userData;
                draft.loading = false
        });
        case '@auth/SIGN_OUT':
            return produce(state, draft => {
                draft.profile = null
        });
        default:
            return state;
    }
};