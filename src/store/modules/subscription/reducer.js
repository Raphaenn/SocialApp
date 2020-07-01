import produce from "immer";

const INITIAL_STATE = {
    validation: []
};

export default function subs(state = INITIAL_STATE, action) {
    switch(action.type) {
        case '@subs/SUBSCRIPTION_REQUEST': 
        return produce(state, draft => {
            draft.validation = action.payload.item
        });
        default:
            return state
    }
};